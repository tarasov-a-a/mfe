import React from 'react';
import { MarketingApp } from './MarketingApp';

import styles from './App.module.css';

export const App = () => {
  console.log('%ccontainer', 'color: red; font-size: 1.1rem');

  return (
    <div className={styles.app}>
      <h1>
        Container Page
      </h1>
      <MarketingApp />
    </div>
  )
}
