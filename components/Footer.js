import React from 'react';
import css from 'next/css';
import { container } from './styles';

export default function Footer() {
  return (
    <div className={[container, styles].join(' ')}>
      Like us on Fuuto
    </div>
  );
}

const styles = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 20
});
