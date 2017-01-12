import { Component } from 'react';
import style from 'next/css';
import animatedAbakus from '../animatedAbakus';

export default class extends Component {
  
  componentDidMount() {
    animatedAbakus(this.canvas);
  }

  render() {
    return (
      <div className="container">
        <div>
          <div>
            <h1>Jubileum</h1>
            <div>13.–19. mars 2017</div>
          </div>

          <canvas ref={(ref) => { this.canvas = ref; }} />
        </div>

        <style jsx>{`
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
