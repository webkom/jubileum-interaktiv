export default function Button({ children, ...props }) {
  return (
    <button className="button" {...props}>
      {children}
      <style jsx>{`
        .button {
          background: #b11b11;
          display: inline-block;
          padding: 10px 14px;
          font-size: 16px;
          color: #fff;
          border: 0;
          cursor: pointer;
          font-weight: 700;
          border-radius: 3px;
          box-shadow: 2px 4px 6px rgba(0, 0, 0, .09), 0 1px 2px rgba(0, 0, 0, .3);
          letter-spacing: 1px;
          outline: none;
          position: relative;
          overflow: hidden;
          z-index: 100;
        }

        .button:active {
          transform: translateY(1px);
        }

        .button::before {
          background: #c9241c;
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          transform: scaleX(0);
          transition: transform .2s;
          z-index: -1;
        }

        .button:hover::before {
          transform: scaleX(1);
        }
      `}
      </style>
    </button>
  );
}
