import React from 'react';

const Circle = ({
  children,
  size = 50,
  style,
  selected,
  ...props
}) => (
  <button
    className={selected && 'selected'}
    style={{
      width: size,
      height: size,
      borderRadius: size / 2,
      ...style
    }}
    {...props}
  >
    {children}

    <style jsx>{`
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        color: rgba(255, 255, 255, .4);
        transition: transform .1s, color .2s;
        font-size: 22px;
        border: 0;
        outline: none;
        cursor: pointer;
        background: #b11b11;
        z-index: 10;
        position: relative;
        overflow: hidden;
      }

      button:hover {
        color: rgba(255, 255, 255, 1);
      }

      .selected {
        color: rgba(255, 255, 255, 1);
      }
    `}
    </style>
  </button>
);

export default Circle;
