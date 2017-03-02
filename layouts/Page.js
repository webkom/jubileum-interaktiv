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
    //animatedAbakus(this.canvas, {});
  }

  render() {
    return (
      <div className="container">
        <Head>
          <meta charSet="utf-8" />
          <title>Abakus 40 år</title>
          <link href="https://fonts.googleapis.com/css?family=Lato|Ubuntu:700" rel="stylesheet" />
          <link rel="stylesheet" href="/static/nprogress.css" />
          <script src="https://use.fontawesome.com/f3b8128270.js"></script>
          <link rel="icon" href="/static/favicon.png" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Abakus 40 år!" />
          <meta property="og:description" content="Hold av uken, fordi i 2017 fyller Abakus 40 år! Abakus har i den anledning satt opp et fullspekket program for hele uken, så ta på deg festskoene og vær forberedt på lite søvn, mye moro og en skikkelig feiring! I løpet av én uke har du muligheten til å oppleve et stort spekter av det Abakus har å tilby!" />
          <meta property="og:image" content="/static/graphimg.png" />
        </Head>

        <WideBackground height={460}>
          <Content alignItems="center" justifyContent="flex-end">
            <img src="/static/logo.svg" style={{ marginLeft: -20, width: '100%', padding: 20 }} />
            <div className="date">
              <time>12.–19. mars 2017</time>
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
            line-height: 1.6;
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
            font-size: 24px;
            letter-spacing: 2px;
            text-transform: uppercase;
            padding: 20px;
          }

          .canvas {
            transform: translateX(-30px)
          }
        `}</style>
        <script dangerouslySetInnerHTML={{__html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-17746625-8', 'auto');
        ga('send', 'pageview');`}} />
      </div>
    );
  }
}
