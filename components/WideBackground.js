function WideBackground({ children, ...style }) {
  return (
    <div className="root" style={{ ...style }}>
      {children}
      <style jsx>{`
        .root {
          background: #F4F4F4;
          color: #333;
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
