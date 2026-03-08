# Credit Score Prediction – Frontend

## 1. Giới thiệu

Đây là **frontend của ứng dụng Credit Score Prediction**, cho phép người dùng nhập thông tin hồ sơ vay và nhận kết quả đánh giá tín dụng từ hệ thống Machine Learning.

Ứng dụng được xây dựng bằng **Next.js 14 (React)** và giao tiếp với **FastAPI Backend** thông qua REST API.

Người dùng có thể:

* Nhập thông tin hồ sơ vay
* Nhận kết quả đánh giá tín dụng (score, risk level, approved/rejected)
* Xem lịch sử các đơn vay đã submit

---

# 2. Tech Stack

* **Framework:** Next.js 14
* **Language:** TypeScript
* **UI:** React + TailwindCSS
* **HTTP Requests:** Fetch API
* **Deployment:** Vercel

---

# 3. Kiến trúc Frontend

Ứng dụng sử dụng **Next.js App Router** với cấu trúc chính như sau:

```
loan-frontend
│
├── app                # Pages (Next.js App Router)
│   ├── apply          # Trang nhập đơn vay
│   │   └── page.tsx
│   │
│   ├── history        # Trang lịch sử đơn vay
│   │   └── page.tsx
│   │
│   ├── globals.css    # Global CSS
│   ├── layout.tsx     # Layout chung toàn app
│   └── page.tsx       # Trang chủ
│
├── components         # Các React components
│   ├── LoanForm.tsx
│   ├── LoanResult.tsx
│   ├── LoanTable.tsx
│   ├── Navbar.js
│   └── ScoreGauge.tsx
│
├── services           # Gọi API backend
│   └── api.ts
│
├── public             # Static assets
│
├── package.json
└── tsconfig.json
└── frontend_README.md
```

---

# 4. Giải thích các thành phần

## 4.1 app/

Thư mục chứa các **pages của ứng dụng** theo chuẩn **Next.js App Router**.

### `/`

File:

```
app/page.tsx
```

Trang **homepage** của ứng dụng, giới thiệu hệ thống Credit Score Prediction.

---

### `/apply`

File:

```
app/apply/page.tsx
```

Trang cho phép người dùng:

* nhập thông tin hồ sơ vay
* submit form để dự đoán credit score

Trang này sử dụng component:

```
LoanForm
LoanResult
ScoreGauge
```

---

### `/history`

File:

```
app/history/page.tsx
```

Trang hiển thị **lịch sử các đơn vay đã submit**.

Dữ liệu được lấy từ API:

```
GET /applications
```

Hiển thị dưới dạng bảng bằng component:

```
LoanTable
```

---

# 4.2 components/

Chứa các **React components tái sử dụng**.

### LoanForm.tsx

Component **form nhập dữ liệu hồ sơ vay**.

Bao gồm các fields:

* income
* age
* employment_years
* loan_amount
* loan_term
* credit_history_length
* num_credit_lines
* num_delinquencies
* debt_to_income_ratio
* savings_balance

Chức năng:

* Form validation
* Submit dữ liệu đến backend
* Hiển thị loading khi gọi API

---

### LoanResult.tsx

Hiển thị **kết quả dự đoán** từ backend.

Bao gồm:

* approval_score
* approved / rejected
* risk_level
* recommendation

---

### LoanTable.tsx

Component hiển thị **bảng lịch sử các đơn vay**.

Thông tin hiển thị:

* id
* score
* approved
* risk_level
* created_at

---

### Navbar.js

Thanh **navigation bar** của ứng dụng.

Cho phép điều hướng giữa:

```
Home
Apply Loan
History
```

---

### ScoreGauge.tsx

Component hiển thị **credit score dưới dạng gauge chart** giúp trực quan hóa mức độ rủi ro.

---

# 4.3 services/

Thư mục chứa các hàm **giao tiếp với Backend API**.

File:

```
services/api.ts
```

Các chức năng chính:

### Submit loan application

```
POST /predict
```

Gửi dữ liệu form đến backend để dự đoán.

---

### Lấy lịch sử đơn vay

```
GET /applications
```

Lấy danh sách các đơn vay đã submit.

---

# 5. Luồng hoạt động

Luồng hoạt động của frontend:

```
User nhập form
      ↓
LoanForm gửi request
      ↓
POST /predict
      ↓
Backend trả kết quả
      ↓
LoanResult hiển thị score
      ↓
User có thể vào /history
      ↓
GET /applications
      ↓
LoanTable hiển thị lịch sử
```

---

# 6. Cài đặt và chạy local

## 1. Clone repository

```
git clone <repo-url>
```

---

## 2. Di chuyển vào thư mục frontend

```
cd loan-frontend
```

---

## 3. Cài đặt dependencies

```
npm install
```

---

## 4. Chạy development server

```
npm run dev
```

Ứng dụng sẽ chạy tại:

```
http://localhost:3000
```

---

# 7. Cấu hình Backend API

Frontend gọi backend qua file:

```
services/api.ts
```

Ví dụ:

```
const API_URL = "http://127.0.0.1:8000"
```

Khi deploy production, cần đổi thành:

```
https://your-backend-api.onrender.com
```

---

# 8. Build Production

Để build project:

```
npm run build
```

Chạy production server:

```
npm start
```

---

# 9. Deployment

Frontend được deploy trên **Vercel**.

Sau khi deploy, ứng dụng sẽ có URL dạng:

```
https://your-app.vercel.app
```

Frontend sẽ gọi API từ backend deploy trên **Render**.

---

# 10. Tính năng chính

* Nhập hồ sơ vay
* Dự đoán credit score bằng Machine Learning
* Hiển thị kết quả đánh giá rủi ro
* Hiển thị gauge score trực quan
* Xem lịch sử các đơn vay
* Responsive UI

---

# 11. Tác giả

Mini Project – Fullstack Credit Score Prediction

Frontend built with **Next.js + TypeScript**
