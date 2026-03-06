import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';

import { Landing, Pricing } from './components';

import styles from './App.module.css';

export const App = () => {
  console.log('%cmarketing', 'color: aqua; font-size: 1.1rem');

  return (
    <div className={styles.app}>
      <StylesProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/pricing" component={Pricing} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  )
}
