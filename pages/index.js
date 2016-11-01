import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import css, { insertRule } from 'next/css';
import { Header, Events, Footer } from '../components';

export default () => (
  <div className={style}>
    <Head>
      <title>Jubileum</title>
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
    </Head>

    <Header />
    <Events />
    <Footer />
  </div>
);

insertRule(`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Roboto, sans-serif;
  }
`);

const style = css({
  height: '100vh'
});
