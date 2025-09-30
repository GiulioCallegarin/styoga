import { readContentJson } from "~/util";
import BlurredImage from "../components/BlurredImage";
import EventTile from "./EventTile";

export default async function EventsPage() {
  const data = await readContentJson<{
    title1: string;
    subtitle1: string;
    subtitle2: string;
    title2: string;
    title3: string;
    courses: { title: string; description: string; image: string; dates: string }[];
    tiles: { title: string; description: string; image: string; dates: string }[];
    footing1: string;
    footing2: string;
  }>("home.json");
  const eventData = await readContentJson<{
    events: { id: string; name: string; description: string; image: string; dates: string; postDate: string }[];
  }>("events.json");
  return (
    <div className="flex flex-col gap-8 items-center">
      <div className="w-full card overflow-hidden">
        <BlurredImage
          src="/dynamic/images/events/landing.jpg"
          className="w-full h-64"
          style={{ objectFit: "cover" }}
          alt=""
        />
      </div>
      <div className="mt-16 w-full flex flex-col gap-8 items-center">
        <h2>CORSI</h2>
        <div className="flex flex-col gap-4 items-center">
          {data.courses.map((course, index) => (
            <EventTile
              key={index}
              name={course.title}
              description={course.description}
              image={course.image}
              dates={course.dates}
            />
          ))}
        </div>
        {eventData.events.length > 0 && <>
          <h2>EVENTI</h2>
          <div className="flex flex-col gap-4 items-center">
            {eventData.events.map((event, index) => (
              <EventTile
                key={index}
                name={event.name}
                description={event.description}
                image={event.image}
                dates={event.dates}
                postDate={event.postDate}
              />
            ))}
          </div>
        </>}
      </div>
    </div>
  );
}
