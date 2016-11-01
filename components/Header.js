import React from 'react';
import css from 'next/css';
import { container } from './styles';

export default function Header() {
  return (
    <div className={css(styles.container)}>
      <div className={[container, css(styles.content)].join(' ')}>
        <div>
          <h1 className={css(styles.heading)}>Jubileum</h1>
          <div>13.–19. mars 2017</div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    background: 'linear-gradient(90deg, #fff 50%, #fff 0)',
    padding: 20,
  },
  heading: {
    backgroundColor: '#B11B11',
    color: '#fff',
    margin: 0
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '24px',
  }
};
