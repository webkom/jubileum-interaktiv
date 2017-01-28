export default ({ children, alignItems = 'flex-start', flex = 1, ...style }) => (
  <div className="content" style={{ alignItems, flex, ...style }}>
    {children}
    <style jsx>{`
      .content {
        max-width: 940px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    `}
    </style>
  </div>
);
