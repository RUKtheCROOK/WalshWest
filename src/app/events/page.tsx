import { getUpcomingEvents } from "@/lib/events";

export default async function EventsPage() {
  const events = await getUpcomingEvents();

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold">Upcoming Events</h1>

      <p className="text-muted-foreground">
        Section copy pending review.
      </p>

      <div className="space-y-4">
        {events.map((event) => (
          <div key={event.id} className="border p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
            <p className="text-sm text-muted-foreground mb-2">
              {event.date.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            {event.location && (
              <p className="text-sm text-muted-foreground mb-2">{event.location}</p>
            )}
            <p className="mb-4">{event.description}</p>
            {event.link && (
              <a href={event.link} className="text-blue-600 hover:underline text-sm">
                Learn more &rarr;
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
