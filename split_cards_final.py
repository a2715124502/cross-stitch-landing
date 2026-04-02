#!/usr/bin/env python3
"""
图像卡片分离脚本 - 最终版本
将包含8张卡片的图像精确分离为独立的图像文件
"""

from PIL import Image
import os
import sys

def split_cards(image_path, output_dir):
    """
    将图片中的8张卡片分离并保存
    布局：2列 x 4行
    """
    if not os.path.exists(image_path):
        print(f"❌ 错误：找不到输入文件 {image_path}")
        return False
    
    # 打开原始图片
    img = Image.open(image_path)
    width, height = img.size
    
    print(f"📐 原始图片尺寸: {width} x {height}")
    print(f"📊 图片模式: {img.mode}")
    
    # 计算每张卡片的尺寸 (2列 x 4行)
    card_width = width // 2
    card_height = height // 4
    
    print(f"📏 单张卡片尺寸: {card_width} x {card_height}")
    print()
    
    # 创建输出目录
    os.makedirs(output_dir, exist_ok=True)
    
    # 分离8张卡片
    card_count = 1
    for row in range(4):  # 4行
        for col in range(2):  # 2列
            # 计算裁剪区域
            left = col * card_width
            upper = row * card_height
            right = left + card_width
            lower = upper + card_height
            
            # 裁剪卡片
            card = img.crop((left, upper, right, lower))
            
            # 保存卡片 - 使用PNG格式保持质量
            output_path = os.path.join(output_dir, f"card_{card_count}.png")
            card.save(output_path, "PNG", optimize=True)
            
            print(f"✅ 已保存: card_{card_count}.png ({card.size[0]}x{card.size[1]})")
            card_count += 1
    
    print(f"\n🎉 完成！共分离 {card_count - 1} 张卡片")
    return True

def verify_output(output_dir):
    """验证输出文件"""
    print("\n" + "="*60)
    print("📋 验证输出文件")
    print("="*60)
    
    total_size = 0
    all_exist = True
    
    for i in range(1, 9):
        file_path = os.path.join(output_dir, f"card_{i}.png")
        if os.path.exists(file_path):
            size = os.path.getsize(file_path)
            total_size += size
            img = Image.open(file_path)
            print(f"  ✅ card_{i}.png: {img.size[0]}x{img.size[1]} | {size/1024:.1f}KB | 模式:{img.mode}")
        else:
            print(f"  ❌ card_{i}.png: 文件不存在")
            all_exist = False
    
    print("-"*60)
    print(f"📊 总计: 8张卡片 | 总大小: {total_size/1024:.1f}KB")
    print(f"📁 输出目录: {output_dir}")
    print("="*60)
    
    return all_exist

if __name__ == "__main__":
    # 输入和输出路径
    input_image = "/Users/eyewind/Desktop/landing/clip/pic/Gemini_Generated_Image_m2g4ldm2g4ldm2g4.png"
    output_directory = "/Users/eyewind/Desktop/landing/clip/pic"
    
    print("🚀 开始处理8张卡片分离任务")
    print("="*60)
    print(f"📥 输入文件: {input_image}")
    print(f"📤 输出目录: {output_directory}")
    print("="*60)
    print()
    
    # 执行分离
    if split_cards(input_image, output_directory):
        if verify_output(output_directory):
            print("\n✨ 所有卡片分离成功！")
        else:
            print("\n⚠️ 部分文件可能未正确生成")
            sys.exit(1)
    else:
        print("\n❌ 处理失败")
        sys.exit(1)
