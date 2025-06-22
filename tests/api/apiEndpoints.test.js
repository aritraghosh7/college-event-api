const request = require("supertest");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const app = require("../../server");

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongoServer.stop();
});

describe("📡 API Endpoints Test Suite", () => {
  let eventId;

  it("POST /api/events - should create a new event", async () => {
    const res = await request(app).post("/api/events").send({
      title: "API Testing Event",
      description: "Test POST endpoint",
      date: "2025-07-10",
      location: "Conference Room",
      organizer: "QA Club"
    });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("_id");
    eventId = res.body._id;
  });

  it("GET /api/events - should return list of events", async () => {
    const res = await request(app).get("/api/events");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("GET /api/events/:id - should return specific event", async () => {
    const res = await request(app).get(`/api/events/${eventId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("title", "API Testing Event");
  });

  it("PUT /api/events/:id - should update an event", async () => {
    const res = await request(app)
      .put(`/api/events/${eventId}`)
      .send({ title: "Updated Event Title" });

    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe("Updated Event Title");
  });

  it("DELETE /api/events/:id - should delete an event", async () => {
    const res = await request(app).delete(`/api/events/${eventId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toMatch(/deleted/i);
  });
});
