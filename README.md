# 📘 College Event Management App

A simple full-stack web application to manage college events. Built with **Node.js**, **Express**, and **MongoDB** for the backend, and a clean **HTML/CSS/JS frontend** that interacts with the REST API.

---

## 📦 Tech Stack

- **Backend:** Node.js + Express  
- **Database:** MongoDB (via Mongoose)  
- **Frontend:** HTML, CSS, JavaScript  
- **Testing:** Postman, curl

---

## 🖥️ Frontend

- Located in the `/frontend` folder  
- Interacts with API using `fetch()`  
- Lets users create and view events in the browser  
- Automatically displays the event list after submission

---


## 📁 Folder Structure

<pre> college-event-api/
├── controllers/
│ └── eventController.js
├── models/
│ └── Event.js
├── routes/
│ └── eventRoutes.js
├── frontend/
│ ├── index.html
│ ├── style.css
│ └── script.js
├── keploy/
│ └── test-sets/                
├── tests/
│ ├── unit/
│ │ └── eventController.test.js
│ ├── integration/
│ │ └── eventRoutes.test.js
│ └── api/
│   └── apiEndpoints.test.js
├── openapi.yaml                
├── .github/
│ └── workflows/
│     └── keploy-test.yml       
├── server.js
├── Dockerfile
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
```
> ### 2. Install Dependencies  
> ```
> npm install

### 3. Create a `.env` File

```env
MONGODB_URI=your_mongodb_uri
PORT=3000
```
### 🚀 4. Run the Server


```bash
npm run dev
```
Server will start at `http://localhost:3000`.

---


### 🌐 Using the App

After running the server, open your browser and visit:
```
http://localhost:3000
```
You’ll see a form to add events and a live list of existing events below it.

---


## 🔌 API Endpoints

The following API endpoints are available for interacting with the event resource:

| Method | Endpoint           | Description         |
|--------|--------------------|---------------------|
| GET    | `/api/events`      | Get all events      |
| POST   | `/api/events`      | Create a new event  |
| GET    | `/api/events/:id`  | Get single event    |
| PUT    | `/api/events/:id`  | Update an event     |
| DELETE | `/api/events/:id`  | Delete an event     |


## 📨 Sample POST Request

### POST `/api/events`

Use the following JSON structure to create a new event:

```json
{
  "title": "Tech Talk",
  "description": "A seminar on AI",
  "date": "2025-06-30",
  "location": "Auditorium",
  "organizer": "CSI Club"
}
```
## 🧪 How to Run Tests

```bash
npm test
```
### ✅ Test Coverage Report
Includes unit, integration, and API level tests

Achieved: ~60–80% overall coverage (adjust based on actual output)

#### Tools used: Jest, Supertest, mongodb-memory-server

