#!/usr/bin/env python3
"""
图像卡片分离脚本
将包含8张卡片的图片分离为独立的图像文件
"""

from PIL import Image
import os
import sys

def split_cards(image_path, output_dir):
    """
    将图片中的8张卡片分离并保存
    布局：2列 x 4行
    """
    # 检查输入文件是否存在
    if not os.path.exists(image_path):
        print(f"错误：找不到输入文件 {image_path}")
        return False
    
    # 打开原始图片
    img = Image.open(image_path)
    width, height = img.size
    
    print(f"原始图片尺寸: {width} x {height}")
    
    # 计算每张卡片的尺寸
    # 图片是2列4行的布局
    card_width = width // 2
    card_height = height // 4
    
    print(f"单张卡片尺寸: {card_width} x {card_height}")
    
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
            
            print(f"已保存: card_{card_count}.png ({card.size[0]}x{card.size[1]})")
            card_count += 1
    
    print(f"\n✅ 完成！共分离 {card_count - 1} 张卡片到 {output_dir}")
    return True

if __name__ == "__main__":
    # 支持命令行参数
    if len(sys.argv) > 1:
        input_image = sys.argv[1]
    else:
        # 默认输入图片路径
        input_image = "/Users/eyewind/Desktop/landing/input_cards.png"
    
    if len(sys.argv) > 2:
        output_directory = sys.argv[2]
    else:
        # 默认输出目录
        output_directory = "/Users/eyewind/Desktop/landing/split_cards"
    
    # 执行分离
    split_cards(input_image, output_directory)
