# Sử dụng image node.js làm nền tảng
FROM node:16

# Thiết lập thư mục làm việc
WORKDIR /usr/src/app

# Sao chép package.json và package-lock.json
COPY server/package*.json ./

# Cài đặt các gói phụ thuộc
RUN npm install

# Sao chép mã nguồn từ thư mục server
COPY server/ .

# Thiết lập cổng mà ứng dụng sẽ lắng nghe
EXPOSE 5000

# Chạy ứng dụng
CMD [ "node", "index.js" ]
