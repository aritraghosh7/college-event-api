const apiUrl = "http://localhost:3000/api/events";
const eventForm = document.getElementById("eventForm");
const eventList = document.getElementById("eventList");

async function fetchEvents() {
  const res = await fetch(apiUrl);
  const events = await res.json();
  eventList.innerHTML = "";
  events.forEach(event => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${event.title}</strong> - ${event.description} (${event.date.split("T")[0]})
      <br/>📍 ${event.location} | 🧑 ${event.organizer}
      <br/>
      <button onclick="deleteEvent('${event._id}')">Delete</button>
    `;
    eventList.appendChild(li);
  });
}

eventForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const newEvent = {
    title: eventForm.title.value,
    description: eventForm.description.value,
    date: eventForm.date.value,
    location: eventForm.location.value,
    organizer: eventForm.organizer.value,
  };
  await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newEvent),
  });
  eventForm.reset();
  fetchEvents();
});

async function deleteEvent(id) {
  await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
  fetchEvents();
}

fetchEvents();
