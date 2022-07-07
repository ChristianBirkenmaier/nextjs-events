import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../dummy-data";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <h1>The Home Page</h1>
      <ul>
        <EventList items={featuredEvents} />
      </ul>
    </div>
  );
};

export default Home;
