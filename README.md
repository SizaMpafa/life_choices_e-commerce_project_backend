# life_choices_e-commerce_project_backend

# Life Choices E-Commerce Project

This repository contains both the frontend and backend for the Life Choices e-commerce application.

## Project Structure

- `life_choices_e-commerce_project_frontend/` - Vue 3 + Vite client app
- `life_choices_e-commerce_project_backend/` - Express + MySQL API

## Prerequisites

- Node.js `^20.19.0 || >=22.12.0` (frontend requirement)
- Node.js 20+ (backend compatible)
- MySQL server

## Quick Start (Lecturer Setup)

1. Open two terminals in this project.
2. Create a MySQL database (replace `<DB_NAME>`):

```sh
mysql -u <DB_USER> -p -e "CREATE DATABASE IF NOT EXISTS <DB_NAME>;"
```

3. Import the included database dump from the backend folder:

```sh
cd life_choices_e-commerce_project_backend
mysql -u <DB_USER> -p <DB_NAME> < db/Dump20260227.sql
```

4. In `life_choices_e-commerce_project_backend/.env`, set:

```env
DB_HOST=localhost
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=your_database
JWT_SECRET=your_jwt_secret
```

5. Install dependencies:

```sh
cd ../life_choices_e-commerce_project_backend
npm install
cd ../life_choices_e-commerce_project_frontend
npm install
```

6. Start backend first:

```sh
cd ../life_choices_e-commerce_project_backend
node index.js
```

7. Start frontend second:

```sh
cd ../life_choices_e-commerce_project_frontend
npm run dev
```

8. Open the app at `http://localhost:5173` (or the URL printed by Vite).
9. Register/login at `http://localhost:5173/auth`.
10. For admin pages, promote any registered account to Admin:

```sql
UPDATE users
SET role = 'Admin'
WHERE email = 'your_email@example.com';
```

11. Login again and open admin routes like:
- `http://localhost:5173/admin/products`
- `http://localhost:5173/admin/categories`
- `http://localhost:5173/admin/orders`
- `http://localhost:5173/admin/companies`

---

## Frontend

Path:

- `life_choices_e-commerce_project_frontend`

Stack:

- Vue 3
- Vue Router
- Vuex
- Axios
- Bootstrap 5

Installed packages (`package.json`):

- `@fortawesome/fontawesome-svg-core@^7.2.0`
- `@fortawesome/free-brands-svg-icons@^7.2.0`
- `@fortawesome/free-solid-svg-icons@^7.2.0`
- `@fortawesome/vue-fontawesome@^3.1.3`
- `axios@^1.13.5`
- `bootstrap@^5.3.8`
- `bootstrap-icons@^1.13.1`
- `vue@^3.5.27`
- `vue-router@^4.6.4`
- `vuex@^4.1.0`

Frontend dev packages:

- `@vitejs/plugin-vue@^6.0.3`
- `@vitejs/plugin-vue-jsx@^5.1.3`
- `oxfmt@^0.27.0`
- `vite@^7.3.1`
- `vite-plugin-vue-devtools@^8.0.5`

Install:

```sh
cd life_choices_e-commerce_project_frontend
npm install
```

Run (development):

```sh
npm run dev
```

Build:

```sh
npm run build
```

Preview build:

```sh
npm run preview
```

Format source:

```sh
npm run format
```

Frontend API base URL:

- Configured in `src/services/api.js`
- Default: `http://localhost:5490`

---

## Backend

Path:

- `life_choices_e-commerce_project_backend`

Stack:

- Node.js (ES Modules)
- Express
- MySQL (`mysql2/promise`)
- JWT authentication
- bcrypt
- multer

Installed packages (`package.json`):

- `bcrypt@^6.0.0`
- `cors@^2.8.6`
- `dotenv@^17.3.1`
- `express@^5.2.1`
- `jsonwebtoken@^9.0.3`
- `multer@^2.0.2`
- `mysql2@^3.17.0`

Install:

```sh
cd life_choices_e-commerce_project_backend
npm install
```

Create `.env` in backend root:

```env
DB_HOST=localhost
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=your_database
JWT_SECRET=your_jwt_secret
```

Database:

- Import SQL from backend `db/` folder before running the API.

Run backend:

```sh
node index.js
```

Backend URL:

- `http://localhost:5490`

Uploads static path:

- `http://localhost:5490/uploads`

Main route groups:

- `/users`
- `/items`
- `/categories`
- `/companies`
- `/item_variants`
- `/orders`
- `/order_items`
- `/payments`
- `/cart`
- `/cart_items`
- `/payment_methods`
- `/addresses`
- `/banking_details`

---

## Run Full Project

1. Start backend in one terminal:

```sh
cd life_choices_e-commerce_project_backend
node index.js
```

2. Start frontend in another terminal:

```sh
cd life_choices_e-commerce_project_frontend
npm run dev
```

3. Open the frontend URL printed by Vite (typically `http://localhost:5173`).
