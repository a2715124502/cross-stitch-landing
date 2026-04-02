#!/usr/bin/env python3
"""
背景去除脚本
对卡片图像进行背景移除，保留圆角卡片主体
"""

from PIL import Image
import os
import numpy as np

def remove_background(input_path, output_path, tolerance=30):
    """
    移除图像背景，保留主体内容
    
    参数:
        input_path: 输入图像路径
        output_path: 输出图像路径
        tolerance: 背景颜色容差值
    """
    # 打开图像
    img = Image.open(input_path).convert("RGBA")
    width, height = img.size
    
    # 转换为numpy数组进行处理
    data = np.array(img)
    
    # 获取图像的四个角的颜色作为背景参考色
    corners = [
        data[0, 0],           # 左上角
        data[0, -1],          # 右上角
        data[-1, 0],          # 左下角
        data[-1, -1]          # 右下角
    ]
    
    # 计算平均背景色
    bg_color = np.mean(corners, axis=0).astype(int)
    
    # 创建掩码 - 检测背景区域
    # 计算每个像素与背景色的距离
    diff = np.abs(data[:, :, :3].astype(float) - bg_color[:3].astype(float))
    distance = np.sqrt(np.sum(diff ** 2, axis=2))
    
    # 创建Alpha通道
    alpha = np.where(distance < tolerance, 0, 255).astype(np.uint8)
    
    # 应用边缘优化 - 保留圆角
    alpha = refine_edges(alpha, data, bg_color, tolerance)
    
    # 更新Alpha通道
    data[:, :, 3] = alpha
    
    # 转换回PIL图像
    result = Image.fromarray(data)
    
    # 裁剪透明边缘
    result = crop_to_content(result)
    
    # 保存结果
    result.save(output_path, "PNG")
    
    return result.size

def refine_edges(alpha, data, bg_color, tolerance):
    """
    优化边缘，处理圆角和平滑过渡
    """
    height, width = alpha.shape
    
    # 对每个像素进行更精细的判断
    for y in range(height):
        for x in range(width):
            if alpha[y, x] == 0:
                continue
                
            # 检查当前像素颜色
            pixel = data[y, x, :3]
            diff = np.abs(pixel.astype(float) - bg_color[:3].astype(float))
            distance = np.sqrt(np.sum(diff ** 2))
            
            # 渐变透明度处理
            if distance < tolerance * 1.5:
                # 计算渐变透明度
                alpha_val = int(255 * (distance / (tolerance * 1.5)))
                alpha[y, x] = max(0, min(255, alpha_val))
    
    return alpha

def crop_to_content(img):
    """
    裁剪图像到内容区域，移除透明边缘
    """
    # 获取Alpha通道
    alpha = np.array(img)[:, :, 3]
    
    # 找到非透明区域的边界
    rows = np.any(alpha > 0, axis=1)
    cols = np.any(alpha > 0, axis=0)
    
    if not np.any(rows) or not np.any(cols):
        return img  # 图像完全透明
    
    ymin, ymax = np.where(rows)[0][[0, -1]]
    xmin, xmax = np.where(cols)[0][[0, -1]]
    
    # 添加少量边距（5像素）
    padding = 5
    ymin = max(0, ymin - padding)
    ymax = min(img.height - 1, ymax + padding)
    xmin = max(0, xmin - padding)
    xmax = min(img.width - 1, xmax + padding)
    
    # 裁剪
    cropped = img.crop((xmin, ymin, xmax + 1, ymax + 1))
    
    return cropped

def process_all_cards(input_dir, output_dir):
    """
    处理所有卡片
    """
    os.makedirs(output_dir, exist_ok=True)
    
    results = []
    
    for i in range(1, 9):
        input_file = os.path.join(input_dir, f"card_{i}.png")
        output_file = os.path.join(output_dir, f"card_{i}_nobg.png")
        
        if os.path.exists(input_file):
            print(f"🔄 处理 card_{i}.png...")
            new_size = remove_background(input_file, output_file)
            results.append({
                'card': i,
                'input': input_file,
                'output': output_file,
                'size': new_size,
                'status': 'success'
            })
            print(f"   ✅ 完成: {new_size[0]}x{new_size[1]}")
        else:
            print(f"   ❌ 文件不存在: {input_file}")
            results.append({
                'card': i,
                'status': 'failed'
            })
    
    return results

def verify_results(results):
    """
    验证处理结果
    """
    print("\n" + "="*60)
    print("📋 验证处理结果")
    print("="*60)
    
    success_count = 0
    total_size = 0
    
    for result in results:
        if result['status'] == 'success':
            success_count += 1
            file_size = os.path.getsize(result['output'])
            total_size += file_size
            print(f"  ✅ card_{result['card']}_nobg.png: {result['size'][0]}x{result['size'][1]} | {file_size/1024:.1f}KB")
        else:
            print(f"  ❌ card_{result['card']}: 处理失败")
    
    print("-"*60)
    print(f"📊 成功: {success_count}/8 | 总大小: {total_size/1024:.1f}KB")
    print("="*60)
    
    return success_count == 8

if __name__ == "__main__":
    input_directory = "/Users/eyewind/Desktop/landing/clip/pic"
    output_directory = "/Users/eyewind/Desktop/landing/clip/pic"
    
    print("🚀 开始背景去除处理")
    print("="*60)
    
    # 处理所有卡片
    results = process_all_cards(input_directory, output_directory)
    
    # 验证结果
    if verify_results(results):
        print("\n✨ 所有卡片背景去除成功！")
    else:
        print("\n⚠️ 部分卡片处理失败")
