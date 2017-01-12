import style from 'next/css';

export default () => {
  return (
    <div className="container">
      <div className="">
        <div>
          <h1 className="heading">Jubileum</h1>
          <div>13.–19. mars 2017</div>
        </div>
      </div>

      <style jsx>{`
        .container {
          background: linear-gradient(90deg, #fff 50%, #fff 0);
          max-width: 640px;
          margin: 0 auto;
        }

        .heading {
          background-color: #b11b11;
          color: #333;
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
};
