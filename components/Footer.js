import { Component } from 'react';

export default class Footer extends Component {
  state = {
    expanded: false
  };

  render() {
    return (
      <div className='footer'>
        <div className='footerContent'>
          <h2>Sosialt</h2>
          <div className="sections">

            <div className='section'>
              <a
                className="twitter-timeline"
                href="https://twitter.com/abakus_ntnu"
                data-tweet-limit="2"
                data-lang="no"
                data-chrome="nofooter"
              >Twitter
              </a>
              <script async src="//platform.twitter.com/widgets.js" charSet="utf-8"></script>

            </div>

            <div className="section">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAbakusNTNU%2F&tabs=timeline&width=420&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1717809791769695"
                style={{ border: "none", overflow: "hidden", height: "325px", width: "100%" }}
                scrolling="no"
                frameBorder="0"
                allowTransparency="true">
              </iframe>
            </div>

          </div>
        </div>

        <div className="credit">
          Laget av webkom <i className="fa fa-power-off" aria-hidden="true"></i>
        </div>

        <style jsx>{`
          .footer {
            width: 100%;
            background-color: #222;
            color: white;
            margin-top: 50px;
            padding: 40px 0 20px 0;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            flex-direction: column;
          }

          .footer h2 {
            margin-top: 0;
            text-transform: uppercase;
            font-size: 25px;
            margin-bottom: 45px;
          }

          .footerContent {
            max-width: 940px;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            margin-right: -1px;
            flex-direction: column;
          }

          .sections {
            display: flex;
            flex-direction: row;
          }

          .section {
            width: 100%;
            border-right: 1px solid #eee;
            padding-right: 50px;
            padding-left: 50px;
            min-width: 300px;
            flex: 1;
            order: 1;
          }

          .section:first-child {
            order: 0;
            padding-left: 0;
          }

          .section:last-child {
            order: 2;
            padding-right: 0;
            border-right: none;
          }

          .credit {
            font-size: 12px;
            margin: 40px 0 10px;
          }

          @media (max-width: 800px) {
            .footerContent {
              padding: 0 30px;
            }

            .footer h2 {
              margin-bottom: 25px;
            }

            .sections {
              flex-direction: column;
            }

            .section {
              border-right: none;
              margin-bottom: 30px;
              padding: 0;
            }
          }
        `}
        </style>
      </div>
    );
  }
};
