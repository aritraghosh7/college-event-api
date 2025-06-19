# 📘 College Event Management API

A simple REST API to manage college events, built with **Node.js**, **Express**, and **MongoDB**.

---

## 🧰 Tech Stack

- **Backend**: Node.js + Express
- **Database**: MongoDB (via Mongoose)
- **Testing**: Postman / curl

---

## 📁 Folder Structure

<pre> college-event-api/
│
├── controllers/
│   └── eventController.js
│
├── models/
│   └── Event.js
│
├── routes/
│   └── eventRoutes.js
│
├── server.js
├── .env
├── .gitignore
├── package.json
└── README.md
 </pre>

---

## 🚀 Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/college-event-api.git
cd college-event-api
2. Install Dependencies
bash
Copy
Edit
npm install
3. Create a .env File
Create a file named .env in the root folder and add:

env
Copy
Edit
MONGODB_URI=your_mongodb_connection_string
PORT=3000
4. Run the Server
bash
Copy
Edit
npm run dev
yaml
Copy
Edit
