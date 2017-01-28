import React from 'react';
import Link from 'next/link';

export default ({ items }) => (
  <div className="navigation">
    {items.map(([href, label], index) => (
      <Link href={href} key={index}><a className="item">{label}</a></Link>
    ))}

    <style jsx>{`
      .navigation {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: stretch;
        flex: 1;
      }

      .item {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ddd;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 18px;
        text-decoration: none;
      }

      .item:hover {
        color: #fff;
        border-bottom: 4px solid #b11b11;
        transform: translateY(0px);
      }
    `}</style>
  </div>
);
