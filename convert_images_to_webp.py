#!/usr/bin/env python3
import os
from PIL import Image
import glob

def convert_to_webp(input_path, output_path, quality=85):
    try:
        img = Image.open(input_path)
        if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
            # 如果是透明图片，保留alpha通道
            img.save(output_path, 'WEBP', quality=quality, lossless=False)
        else:
            img.save(output_path, 'WEBP', quality=quality)
        return True
    except Exception as e:
        print(f"转换失败: {input_path}, 错误: {e}")
        return False

def get_file_size(file_path):
    return os.path.getsize(file_path)

def format_size(size):
    for unit in ['B', 'KB', 'MB', 'GB']:
        if size < 1024.0:
            return f"{size:.2f} {unit}"
        size /= 1024.0
    return f"{size:.2f} TB"

def process_directory(directory, extensions, quality=85):
    results = []
    total_original_size = 0
    total_webp_size = 0
    
    for ext in extensions:
        search_pattern = os.path.join(directory, f"*.{ext}")
        for img_path in glob.glob(search_pattern):
            webp_path = os.path.splitext(img_path)[0] + ".webp"
            
            if os.path.exists(webp_path):
                print(f"跳过已存在的WebP文件: {webp_path}")
                continue
            
            original_size = get_file_size(img_path)
            total_original_size += original_size
            
            print(f"正在转换: {img_path}")
            if convert_to_webp(img_path, webp_path, quality):
                webp_size = get_file_size(webp_path)
                total_webp_size += webp_size
                reduction = 100 * (1 - webp_size / original_size)
                results.append({
                    'original': img_path,
                    'webp': webp_path,
                    'original_size': original_size,
                    'webp_size': webp_size,
                    'reduction': reduction
                })
                print(f"  完成! 原始大小: {format_size(original_size)}, WebP大小: {format_size(webp_size)}, 减少: {reduction:.2f}%")
    
    return results, total_original_size, total_webp_size

def main():
    quality = 85
    all_results = []
    grand_total_original = 0
    grand_total_webp = 0
    
    directories = [
        ('/Users/eyewind/Desktop/landing/images/', ['png', 'jpg', 'jpeg']),
        ('/Users/eyewind/Desktop/landing/clip/pic/', ['png']),
        ('/Users/eyewind/Desktop/landing/clip/图片/', ['jpg', 'jpeg']),
        ('/Users/eyewind/Desktop/landing/public/images/', ['png', 'jpg', 'jpeg']),
        ('/Users/eyewind/Desktop/landing/public/clip/pic/', ['png']),
        ('/Users/eyewind/Desktop/landing/public/clip/图片/', ['jpg', 'jpeg']),
    ]
    
    for directory, extensions in directories:
        if not os.path.exists(directory):
            print(f"目录不存在: {directory}")
            continue
        
        print(f"\n处理目录: {directory}")
        results, total_original, total_webp = process_directory(directory, extensions, quality)
        all_results.extend(results)
        grand_total_original += total_original
        grand_total_webp += total_webp
        
        if total_original > 0:
            total_reduction = 100 * (1 - total_webp / total_original)
            print(f"\n目录 {directory} 总结:")
            print(f"  转换文件数: {len(results)}")
            print(f"  原始总大小: {format_size(total_original)}")
            print(f"  WebP总大小: {format_size(total_webp)}")
            print(f"  总体减少: {total_reduction:.2f}%")
    
    print("\n" + "="*80)
    print("完整转换报告")
    print("="*80)
    
    if grand_total_original > 0:
        grand_total_reduction = 100 * (1 - grand_total_webp / grand_total_original)
        print(f"\n总体总结:")
        print(f"  总转换文件数: {len(all_results)}")
        print(f"  原始总大小: {format_size(grand_total_original)}")
        print(f"  WebP总大小: {format_size(grand_total_webp)}")
        print(f"  总体减少: {grand_total_reduction:.2f}%")
        
        print(f"\n文件详情:")
        print(f"{'文件名':<60} {'原始大小':<15} {'WebP大小':<15} {'减少比例':<10}")
        print("-"*100)
        
        for result in all_results:
            filename = os.path.basename(result['original'])
            print(f"{filename:<60} {format_size(result['original_size']):<15} {format_size(result['webp_size']):<15} {result['reduction']:.2f}%")

if __name__ == "__main__":
    main()
