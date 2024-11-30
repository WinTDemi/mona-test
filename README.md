
# Hướng dẫn thiết lập dự án React Vite

## Bước 1: Cài đặt Dependencies

Trước tiên, bạn cần cài đặt các dependencies được liệt kê trong tệp `package.json` của dự án. Mở terminal và chạy lệnh sau:

```bash
npm install
```

Sau đó, bạn cần tạo tệp `.env` cho dự án với nội dung sau:

```env
VITE_BASE_API_URL=https://dummyjson.com
VITE_PRODUCTS_API_URL=https://dummyjson.com/products
VITE_PRODUCTS_WITH_CATEGORY_API_URL=https://dummyjson.com/products/category
```

## Bước 2: Chạy Dự Án

Sau khi cài đặt xong, bạn có thể chạy dự án ở chế độ phát triển bằng lệnh:

```bash
npm run dev
```

Dự án sẽ được chạy trên localhost, thường là `http://localhost:3000`.

## Bước 3: Xây Dựng Dự Án

Khi bạn đã hoàn thành việc phát triển và muốn xây dựng ứng dụng để triển khai, hãy sử dụng lệnh:

```bash
npm run build
```

Lệnh này sẽ tạo ra một thư mục `dist` chứa các tệp đã được tối ưu hóa để triển khai.

## Bước 4: Các Lệnh Khác

Bạn có thể chạy các lệnh khác tùy theo yêu cầu của dự án. Dưới đây là một số lệnh thông dụng:

- **Kiểm tra**: Nếu bạn có thiết lập các script kiểm tra trong `package.json`, bạn có thể chạy lệnh:
  ```bash
  npm test
  ```

- **Chạy lệnh tùy chỉnh**: Nếu bạn muốn chạy một lệnh cụ thể khác đã được cấu hình trong `package.json`, hãy sử dụng:
  ```bash
  npm run <tên-lệnh>
  ```

## Dependencies

Dưới đây là danh sách các dependencies của dự án:

- `@reduxjs/toolkit`: ^2.3.0
- `@tanstack/react-query`: ^5.59.16
- `antd`: ^5.21.6
- `axios`: ^1.7.7
- `learn-tech`: file:
- `query-string`: ^9.1.1
- `react`: ^18.3.1
- `react-dom`: ^18.3.1
- `react-redux`: ^9.1.2
- `react-router-dom`: ^6.27.0
- `redux`: ^5.0.1

## Tài liệu tham khảo

- [Vite Documentation](https://vitejs.dev/guide/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/introduction/getting-started)
- [Ant Design Documentation](https://ant.design/docs/react/introduce)
- [Query String Documentation](https://github.com/sindresorhus/query-string)
- [TanStack Query Documentation](https://tanstack.com/query/latest/docs/overview)
- [React Router Documentation](https://reactrouter.com/en/main/start/overview)
