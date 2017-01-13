import { Component } from 'react';
import NProgress from 'nprogress';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import animatedAbakus from '../animatedAbakus';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default class extends Component {
  componentDidMount() {
    animatedAbakus(this.canvas);
  }

  render() {
    return (
      <div className="container">
        <Head>
          <meta charSet="utf-8" />
          <title>{this.props.title} &middot; Jubileum</title>
          <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
          <link rel="stylesheet" href="/static/nprogress.css" />
        </Head>
        <div>
          <div>
            <h1>Jubileum</h1>
            <div>13.–19. mars 2017</div>
          </div>

          <canvas ref={(ref) => { this.canvas = ref; }} />
        </div>

        <div>
          <Link href='/'>Hjem</Link>
          <Link href='/about'>Om</Link>
          <Link href='/contact'>Kontakt</Link>
        </div>

        {this.props.children}

        <footer>
          Copyright 2042
        </footer>

        <style jsx>{`
          :global(*) {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          :global(body) {
            font-family: Menlo, Roboto, sans-serif;
          }

          .container {
            background: linear-gradient(90deg, #fff 50%, #fff 0);
            max-width: 640px;
            margin: 0 auto;
          }

          h1 {
            background-color: #b11b11;
            padding: 20px;
            color: #fff;
            margin: 0;
          }

          .content {
            display: flex;
            align-items: center;
            font-size: 24px;
          }
        `}</style>
      </div>
    );
  }
}
