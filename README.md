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

1. **Clone the Repo**
   ```bash
   git clone https://github.com/your-username/college-event-api.git
   cd college-event-api
Install Dependencies

bash
Copy
Edit
npm install
Create .env File

ini
Copy
Edit
MONGODB_URI=your_mongodb_connection_string
PORT=3000
Run the Server

bash
Copy
Edit
npm run dev
🔌 API Endpoints
Method	Endpoint	Description
GET	/api/events	Get all events
POST	/api/events	Create a new event
GET	/api/events/:id	Get a single event
PUT	/api/events/:id	Update an event
DELETE	/api/events/:id	Delete an event

🧪 Sample POST Body (JSON)
json
Copy
Edit
{
  "title": "Tech Talk",
  "description": "A seminar on AI",
  "date": "2025-06-30",
  "location": "Auditorium",
  "organizer": "CSI Club"
}
