# End-to-End Backend

A simple Node.js + Express backend connected to a PostgreSQL database.  
This API manages countries data and exposes clean REST endpoints.

## 🚀 Tech Stack
- Node.js
- Express
- PostgreSQL
- pg library
- dotenv
- nodemon (dev)

## 📁 Project Structure

server/  
  controllers/  
  db/  
  models/  
  routers/  
  index.js  
  logger.js  

package.json  
.gitignore  
.env (ignored)

## 🔧 Setup Instructions

### 1. Install dependencies

npm install
### 2. Create a `.env` file


DB_HOST=your_host
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=your_database
PORT=3000

### 3. Start the server

npm run dev

Server runs at:  
http://localhost:3000

---

## 🛣 API Endpoints

### GET all countries

GET /countries

### GET a country by ID
GET /countries/:id



### POST a new country
POST /countries


---

## 🗄 Database
The database is created using:
- `countries.sql` (schema + seed)
- `setup.js` (runs SQL file automatically)

---

## 📌 Notes
- `.env` and `node_modules` are ignored using `.gitignore`
- Backend is ready to connect to a frontend or deploy to the cloud





