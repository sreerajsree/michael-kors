import Layout from "../components/Layout";
import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import HandBag from "../components/HandBag";


export default function Home() {
  return (
    <Layout className="font-sans">
      <Head>
        <title>Designer Handbags, Shoes, Clothes</title>
      </Head>
      <Header/>
      <Banner/>
      <HandBag/>
      <div className="my-[200px]"></div>
    </Layout>
  )
}
