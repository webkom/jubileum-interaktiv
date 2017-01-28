function WideBackground({ children, ...style }) {
  return (
    <div className="root" style={{ ...style }}>
      {children}
      <style jsx>{`
        .root {
          background: #222;
          color: #fff;
          height: 500px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
        }
      `}</style>
    </div>
  );
}

export default WideBackground;
