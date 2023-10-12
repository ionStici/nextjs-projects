import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/event-list";

import Head from "next/head";

function HomePage(props) {
    const { events } = props;

    return (
        <div>
            <Head>
                <meta
                    name="description"
                    content="Find a lot of great events that allow you to evolve..."
                />
                <title>NextJS Events</title>
            </Head>
            <EventList items={events} />
        </div>
    );
}

export default HomePage;

export async function getStaticProps() {
    const featuredEvents = await getFeaturedEvents();
    return { props: { events: featuredEvents }, revalidate: 1800 };
}
