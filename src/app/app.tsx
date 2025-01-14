import { RouterProvider } from 'react-router-dom';
import TodoPage from './pages/TodoPage';

import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Router from './Router/Route';

export function App() {
  return <RouterProvider router={Router} />;
}

export default App;
