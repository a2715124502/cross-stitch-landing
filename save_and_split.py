#!/usr/bin/env python3
"""
保存并分离卡片图片
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
    
    # 计算每张卡片的尺寸 (2列 x 4行)
    card_width = width // 2
    card_height = height // 4
    
    print(f"📏 单张卡片尺寸: {card_width} x {card_height}")
    
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
            card.save(output_path, "PNG")
            
            print(f"✅ 已保存: card_{card_count}.png ({card.size[0]}x{card.size[1]})")
            card_count += 1
    
    print(f"\n🎉 完成！共分离 {card_count - 1} 张卡片到 {output_dir}")
    return True

def verify_output(output_dir):
    """验证输出文件"""
    print("\n📋 验证输出文件:")
    print("-" * 50)
    total_size = 0
    for i in range(1, 9):
        file_path = os.path.join(output_dir, f"card_{i}.png")
        if os.path.exists(file_path):
            size = os.path.getsize(file_path)
            total_size += size
            img = Image.open(file_path)
            print(f"  card_{i}.png: {img.size[0]}x{img.size[1]} | {size/1024:.1f}KB")
        else:
            print(f"  ❌ card_{i}.png: 文件不存在")
    print("-" * 50)
    print(f"总计: 8张卡片 | 总大小: {total_size/1024:.1f}KB")

if __name__ == "__main__":
    # 输入和输出路径
    input_image = "/Users/eyewind/Desktop/landing/clip/pic/color_cards.png"
    output_directory = "/Users/eyewind/Desktop/landing/clip/pic"
    
    print("🚀 开始处理8张卡片分离任务...")
    print(f"输入文件: {input_image}")
    print(f"输出目录: {output_directory}")
    print()
    
    # 检查输入文件是否存在
    if not os.path.exists(input_image):
        print(f"⚠️  请先将要处理的图片保存为: {input_image}")
        print("\n您可以通过以下方式提供图片:")
        print("1. 将图片文件拖放到 /Users/eyewind/Desktop/landing/clip/pic/ 目录")
        print("2. 命名为 color_cards.png")
        sys.exit(1)
    
    # 执行分离
    if split_cards(input_image, output_directory):
        verify_output(output_directory)
    else:
        print("❌ 处理失败")
        sys.exit(1)
