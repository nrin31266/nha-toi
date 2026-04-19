# NHÀ TÔI - Landing Page Hoành Tráng

## Mô tả dự án
Landing page cho khu du lịch sinh thái "NHÀ TÔI" - có hồ, cây cối, không gian thiên nhiên, có bán nước uống nhưng KHÔNG hiển thị giá.

## Màu sắc (thiên nhiên)
- Màu chính: Xanh lá cây (#2d5a27), Xanh nước biển (#1a7f6b), Xanh mint (#5f9e8e)
- Màu phụ: Nâu gỗ (#8b5a2b), Vàng nắng nhạt (#e8c468), Trắng kem (#f5f0e6)
- Background: Gradient nhẹ từ xanh lá sang xanh nước hoặc ảnh nền thiên nhiên mờ

## Yêu cầu kỹ thuật
1. **Next.js 15+ App Router + TypeScript + TailwindCSS**
2. **Tất cả nội dung từ JSON trong /public/data/**
3. **Tất cả ảnh dùng link URL (placeholder từ Unsplash hoặc Pexels)** - không lưu ảnh cứng
4. **Sau này chỉ cần đổi link trong JSON sang S3 là tự động cập nhật**
5. **Responsive hoàn toàn** (mobile/tablet/desktop)

## Cấu trúc thư mục
public/
data/
site.json # Thông tin chung
hero.json # Ảnh hero slider
gallery.json # Tất cả ảnh phong cảnh
corners.json # Các góc trong khuôn viên
menu.json # Thức uống (không có giá)
social.json # Link mạng xã hội
app/
components/
Navbar.tsx # Header cố định
Hero.tsx # Slider ảnh toàn màn hình
Intro.tsx # Giới thiệu
Gallery.tsx # Thư viện ảnh (masonry grid)
Corners.tsx # Các góc đẹp
Menu.tsx # Menu nước (card đẹp)
VideoSection.tsx # Video giới thiệu (nếu có)
Contact.tsx # Liên hệ + bản đồ
Footer.tsx # Footer
page.tsx
layout.tsx
globals.css

text

## Tính năng hoành tráng
- [x] Hero slider ảnh toàn màn hình, tự động chuyển (autoplay)
- [x] Navbar trong suốt lúc đầu, đổi màu khi scroll
- [x] Scroll mượt đến từng section
- [x] Gallery dạng Masonry (Pinterest style) - rất đẹp cho ảnh phong cảnh
- [x] Hover effect cho ảnh (zoom nhẹ + overlay)
- [x] Lazy loading cho ảnh
- [x] Phần "Các góc NHÀ TÔI" dạng card ngang, có icon
- [x] Menu dạng grid 3 cột, mỗi món có ảnh + tên + mô tả (KHÔNG có giá)
- [x] Phần thông tin thêm: giờ mở cửa, dịch vụ, lưu ý
- [x] Footer với social links, bản đồ nhúng, địa chỉ
- [x] Nút "Gọi ngay" và "Chỉ đường" nổi ở góc màn hình (mobile friendly)
- [x] Animation khi scroll (fade-in-up)