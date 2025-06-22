const { createEvent } = require("../../controllers/eventController");
const httpMocks = require("node-mocks-http");
const Event = require("../../models/Event");

jest.mock("../../models/Event");

describe("createEvent", () => {
  it("should create a new event", async () => {
    const req = httpMocks.createRequest({
      method: "POST",
      body: {
        title: "Mock Event",
        description: "Test Description",
        date: "2025-07-01",
        location: "Auditorium",
        organizer: "Mock Club"
      }
    });
    const res = httpMocks.createResponse();

    Event.create.mockResolvedValue(req.body);
    await createEvent(req, res);
    expect(res.statusCode).toBe(201);
    expect(res._getJSONData()).toEqual(req.body);
  });
});
