export default function Box({ children }) {
  return (
    <div className="box">
      {children}
      <style jsx>{`
        .box {
          display: flex;
          flex-direction: column;
          padding: 20px;
          box-shadow: 0 0 10px #eee;
          border: 1px solid #ccc;
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  );
}
