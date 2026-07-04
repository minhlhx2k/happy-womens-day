# Kế hoạch thiết kế lại web chúc 8/3

## 1. Mục tiêu
- Tạo giao diện đẹp, ấm áp và đáng nhớ hơn cho trang chúc mừng ngày Quốc tế Phụ nữ.
- Giữ nguyên ý nghĩa cảm xúc của trang nhưng làm nổi bật hơn trải nghiệm người dùng.
- Tăng tính tương tác, responsive và dễ chia sẻ trên điện thoại.

## 2. Phong cách thiết kế đề xuất
- Màu sắc chủ đạo: hồng pastel, đỏ cam nhạt, trắng ngà.
- Hình ảnh cảm xúc: hoa, nơ, ánh sáng mềm, hiệu ứng bóng mờ.
- Tone: nữ tính, lãng mạn, hiện đại, nhẹ nhàng.
- Font chữ: dùng font dễ đọc, có cảm giác tinh tế như Playfair Display hoặc Quicksand.

## 3. Cấu trúc trang mới
1. Hero section
   - Tiêu đề lớn: "Happy Women's Day"
   - Ngày lễ và tên người nhận
   - Nút chính: "Nhận lời chúc"

2. Khu vực lời chúc
   - Hiển thị lời chúc ngẫu nhiên bằng hiệu ứng chữ hiện dần
   - Có animation nhẹ khi đổi câu

3. Khu vực tương tác
   - Nút chia sẻ
   - Nút phát/dừng nhạc
   - Khung nhập tên người nhận để cá nhân hóa

4. Nền động
   - Hạt sáng, bông hoa bay nhẹ, hiệu ứng tím hồng chuyển động
   - Không làm ảnh hưởng đến việc đọc nội dung chính

## 4. Cải tiến UX/UI
- Thiết kế theo kiểu mobile-first để đẹp trên cả điện thoại và máy tính.
- Tăng khoảng cách, bo góc, bóng đổ nhẹ để feel hiện đại hơn.
- Bố cục cân đối, nội dung tập trung vào trung tâm màn hình.
- Thêm transition mượt cho nút bấm và animation.
- Đảm bảo màu sắc đủ tương phản để dễ đọc.

## 5. Tính năng nên bổ sung
- Ô nhập tên người nhận và cập nhật ngay trên giao diện
- Chuyển đổi theme sáng/tối nhẹ
- Hiệu ứng pháo hoa hoặc hoa rơi khi bấm nút
- Chia sẻ nhanh qua Messenger, Zalo, WhatsApp
- Tùy chọn phát nhạc và tắt tiếng

## 6. Phân chia công việc thực hiện
### Giai đoạn 1: Cải thiện giao diện
- Đổi bố cục, màu sắc và typography
- Tối ưu layout cho mobile

### Giai đoạn 2: Tăng tương tác
- Thêm ô nhập tên, nút phát nhạc, animation mới
- Tối ưu hiệu ứng nền

### Giai đoạn 3: Hoàn thiện và kiểm thử
- Kiểm tra trên Chrome, Edge, điện thoại
- Đảm bảo không lỗi hiển thị và tốc độ tải tốt

## 7. Đề xuất triển khai kỹ thuật
- Dùng CSS variables để dễ đổi màu và theme
- Tách phần giao diện và logic JS rõ ràng hơn
- Giữ file HTML đơn giản, CSS và JS tách riêng
- Có thể dùng thư viện confetti và QR code như hiện tại

## 8. Kết quả mong đợi
Sau khi redesign, trang sẽ trở nên:
- đẹp mắt hơn
- có cảm giác sang trọng và ấm áp hơn
- thân thiện hơn với người dùng
- phù hợp để gửi cho bạn bè, người thân, người yêu trong dịp 8/3
