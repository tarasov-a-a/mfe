import React from 'react';
import ReactDom from 'react-dom';

import { App } from './App';

const mount = el => {
  ReactDom.render( <App />, el)
}

if (process.env.NODE_ENV === 'development') {
  const rootId = '_marketing_dev-root'
  const devRoot = document.getElementById(rootId)

  if (devRoot) {
    mount(devRoot)
  }
}

export { mount }
