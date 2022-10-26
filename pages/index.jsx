import Layout from "../components/Layout";
import Head from "next/head";
import Header from "../components/Header";


export default function Home() {
  return (
    <Layout className="font-sans">
      <Head>
        <title>Designer Handbags, Shoes, Clothes</title>
      </Head>
      <Header/>
    </Layout>
  )
}
