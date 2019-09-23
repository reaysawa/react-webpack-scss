import React, { useState } from 'react';

import styles from './styles';

function HelloReact(props) {
  const [name] = useState('No')

  return (
    <div className={`${styles['title']}`}>No! {name}</div>
  );
}

export default HelloReact
