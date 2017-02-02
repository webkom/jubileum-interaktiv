import { Component } from 'react';
import NProgress from 'nprogress';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import animatedAbakus from '../animatedAbakus';
import Content from '../components/Content';
import WideBackground from '../components/WideBackground';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default class extends Component {
  componentDidMount() {
    animatedAbakus(this.canvas, {});
  }

  render() {
    return (
      <div className="container">
        <Head>
          <meta charSet="utf-8" />
          <title>{this.props.title} &middot; Jubileum</title>
          <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" />
          <link rel="stylesheet" href="/static/nprogress.css" />
          <script src="https://use.fontawesome.com/f3b8128270.js"></script>
        </Head>

        <WideBackground height={600}>
          <Content alignItems="center" justifyContent="center">
            <div className="title"><span>abakus fyller</span></div>
            <canvas
              ref={(ref) => { this.canvas = ref; }}
              className="canvas"
            />
            <div className="date">
              <time>13.–19. mars 2017</time>
            </div>
          </Content>
        </WideBackground>

        <Content>
          {this.props.children}
        </Content>

        <Footer />

        <style jsx>{`
          :global(*) {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-font-smoothing: antialiased;
          }

          :global(body) {
            font-family: Lato, 'Open Sans', sans-serif;
            background: #f4f4f4;
            font-size: 18px;
          }

          :global(a) {
            text-decoration: none;
            color: #333;
            cursor: pointer;
          }

          :global(h2) {
            font-weight: 400;
          }


          .title {
            font-size: 85px;
            letter-spacing: 10px;
            text-transform: uppercase;
            font-weight: 700;
            text-shadow: 4px 2px 0 #444;
            padding-bottom: 10px;
            text-align: center;
          }

          .title::selection {
            background: #b11b11;
          }

          .date {
            font-size: 22px;
            letter-spacing: 2px;
            text-transform: uppercase;
            padding: 20px;
          }

          .canvas {
            transform: translateX(-30px)
          }
        `}</style>
      </div>
    );
  }
}
