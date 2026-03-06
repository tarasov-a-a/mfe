console.log('%cdashboard', 'color: purple; font-size: 1.1rem');

const mount = el => {
  const h1 = document.createElement('h1')
  h1.textContent = 'Dashboard Page'

  el.append(h1)
}

const rootId = 'root'
const rootElement = document.getElementById(rootId)

if (rootElement) {
  mount(rootElement)
}

export { mount }
