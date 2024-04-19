// src/App.js

import { BrowserRouter as Router } from 'react-router-dom';

import SwitchRoutes from './core/util/components/SwitchRoutes';
import routes from './routes';

function App() {
  return (
    <Router>
      <SwitchRoutes routes={routes} />
    </Router>
  );
}

export default App;
