import events from "@/app/data/datas";
import Link from "next/link";
import Image from "next/image";
import "./events.css";

export default function EventPage() {
  return (
    <main className="events-page">
      <section className="events-hero">
        <span className="events-label">OUR COMMUNITY</span>

        <h1>
          Discover Our <span>Events</span>
        </h1>

        <p>
          Connect, learn, build, and grow with a community of innovators,
          developers, and creative thinkers.
        </p>

        <div className="events-count">
          <span>{events.length}</span> Upcoming Events
        </div>
      </section>

      <section className="events-container">
        <div className="events-heading">
          <div>
            <span className="section-subtitle">WHAT'S HAPPENING</span>
            <h2>Explore Events</h2>
          </div>

          <span className="events-total">{events.length} Events</span>
        </div>

        <div className="events-grid">
          {events.map((event) => (
            <article className="event-card" key={event.id}>
              <div className="event-image">
                <Image
                  src={event.image_url}
                  alt={event.event_name}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw"
                />

                <span className="event-number">
                  #{String(event.id).padStart(2, "0")}
                </span>
              </div>

              <div className="event-content">
                <span className="event-category">TECH & INNOVATION</span>

                <h3>{event.event_name}</h3>

                <p>{event.description}</p>

                <div className="event-footer">
                  <Link
                    href={`/events/${event.slug}`}
                    className="event-details"
                  >
                    View Details <span>↗</span>
                  </Link>

                  <a
                    href={event.registration_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="event-register"
                  >
                    Register <span>→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
