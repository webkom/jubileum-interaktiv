import Head from 'next/head';
import Link from 'next/link';
import style from 'next/css';
import { Header, Events, Footer } from '../components';

export default () => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <title>Jubileum</title>
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
    </Head>

    <Header />
    <Events />
    <Footer />

    <style jsx global>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: Menlo, Roboto, sans-serif;
      }
    `}</style>
  </div>
);
