export default function Button({ children, facebook, ...props }) {
  return (
    <a className={facebook ? 'facebook' : ''} {...props}>
      {children}
      <style jsx>{`
        a {
          background: linear-gradient(#eee, #ddd);
          display: inline-block;
          padding: 5px 10px;
          font-size: 14px;
          color: #444;
          border: 0;
          cursor: pointer;
          font-weight: 700;
          border-radius: 3px;
          box-shadow: 2px 4px 6px rgba(0, 0, 0, .04), 0 1px 2px rgba(0, 0, 0, .05);
          border: 1px solid #ccc;,
          outline: none;
          position: relative;
          overflow: hidden;
          z-index: 100;
          text-transform: uppercase;
          margin: 0 5px;
          letter-spacing: 2px;
        }

        .facebook {
          background: #3B5998;
          color: #fff;
          border: 1px solid #1e325b;
        }

        a:active {
          transform: translateY(1px);
        }

        a:hover {
          opacity: 0.95;
        }
      `}
      </style>
    </a>
  );
}
