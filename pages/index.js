import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

export default function Home(props) {
  const { exploreData, liveAnywhereData } = props;

  return (
    <div className="">
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 md:px-16">
        <section>
          <h2 className="text-4xl font-semibold pb-5 pt-6">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            {exploreData?.map((item) => (
              <SmallCard key={item.img} {...item} />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {liveAnywhereData?.map((item) => (
              <MediumCard key={item.img} {...item} />
            ))}
          </div>
        </section>

        <LargeCard
          buttonText="Get Inspired"
          description="Wishlists curated by Airbnb."
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

// 1. special function name.
// 2. only works in pages directory.
export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (response) => response.json()
  );
  const liveAnywhereData = await fetch("https://links.papareact.com/zp1").then(
    (response) => response.json()
  );
  // this info is sent to <Home />
  return {
    props: {
      exploreData,
      liveAnywhereData,
    },
  };
}
