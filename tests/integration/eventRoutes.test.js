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

describe("Event API", () => {
  it("should create an event", async () => {
    const res = await request(app)
      .post("/api/events")
      .send({
        title: "Test Event",
        description: "Some description",
        date: "2025-06-30",
        location: "Room 101",
        organizer: "Science Club"
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("title", "Test Event");
  });
});
