import React from 'react';
import css from 'next/css';
import { container } from './styles';

export default function Header() {
  return (
    <div className={[container, styles].join(' ')}>
      <h1>Jubileum</h1>
      <div>13.–19. mars 2017</div>
    </div>
  );
}

const styles = css({
  background: 'linear-gradient(90deg, #ddd 50%, #fff 0)',
  padding: 20
});
