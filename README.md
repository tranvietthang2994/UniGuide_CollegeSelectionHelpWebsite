# Thống Kê Điểm Thi Đại Học

Ứng dụng web thống kê điểm thi đại học của các trường đại học ở Việt Nam, được xây dựng bằng React JS.

## Tính năng

- Xem thông tin điểm chuẩn của các trường đại học
- Lọc theo khu vực (Miền Bắc, Miền Trung, Miền Nam)
- Tìm kiếm theo tên trường
- Tìm kiếm theo ngành học
- Lọc theo năm học
- Lọc theo khoảng điểm
- Hiển thị chỉ tiêu tuyển sinh

## Cài đặt

1. Clone repository:

```bash
git clone <repository-url>
cd university-admission-stats
```

2. Cài đặt dependencies:

```bash
npm install
```

3. Chạy ứng dụng:

```bash
npm start
```

Ứng dụng sẽ chạy tại [http://localhost:3000](http://localhost:3000)

## Công nghệ sử dụng

- React JS
- Material-UI
- Recharts (cho biểu đồ thống kê)

## Cấu trúc dự án

```
src/
  ├── components/
  │   ├── Header.js
  │   ├── FilterSection.js
  │   └── UniversityList.js
  ├── data/
  │   └── universitiesData.js
  ├── App.js
  ├── index.js
  └── index.css
```

## Đóng góp

Mọi đóng góp đều được hoan nghênh. Vui lòng tạo issue hoặc pull request để đóng góp.
