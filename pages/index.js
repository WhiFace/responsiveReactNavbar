import Head from "next/head";

// components
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Responsive Navbar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script
          src="https://kit.fontawesome.com/d85931d136.js"
          crossorigin="anonymous"
        ></script>
      </Head>

      <main>
        <Navbar />
      </main>
    </div>
  );
}
