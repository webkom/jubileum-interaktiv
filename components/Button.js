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
          box-shadow: 2px 2px 4px #aaa;
          letter-spacing: 1px;
          outline: none;
        }

        .button:active {
          transform: translateY(1px);
        }
      `}
      </style>
    </button>
  );
}
