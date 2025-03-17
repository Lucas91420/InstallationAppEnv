const React = require('react');
const { createRoot } = require('react-dom/client');
require('./styles/main.scss');
function App() {
  return React.createElement('div', null, 'Hello React , je suis Lucas');
}
const container = document.getElementById('root');
const root = createRoot(container);
root.render(React.createElement(App));
