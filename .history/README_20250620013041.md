📘 College Event Management API
A simple REST API to manage college events, built with Node.js, Express, and MongoDB.

📦 Tech Stack
Backend: Node.js + Express

Database: MongoDB (Mongoose)

Testing: Postman / curl

📁 Folder Structure
vbnet
Copy
Edit
college-event-api/
├── controllers/
│   └── eventController.js
├── models/
│   └── Event.js
├── routes/
│   └── eventRoutes.js
├── server.js
├── .env
├── .gitignore
├── package.json
└── README.md
🚀 Setup Instructions
1. Clone the Repo
bash
Copy
Edit
git clone https://github.com/your-username/college-event-api.git
cd college-event-api
2. Install Dependencies
bash
Copy
Edit
npm install
3. Create .env File
ini
Copy
Edit
MONGODB_URI=your_mongodb_uri
PORT=3000
4. Run the Server
bash
Copy
Edit
npm run dev
🔌 API Endpoints
Method	Endpoint	Description
GET	/api/events	Get all events
POST	/api/events	Create a new event
GET	/api/events/:id	Get single event
PUT	/api/events/:id	Update an event
DELETE	/api/events/:id	Delete an event

📥 Sample POST Request
POST /api/events

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
