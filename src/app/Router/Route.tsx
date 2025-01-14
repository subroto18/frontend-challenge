import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import TodoPage from '../pages/TodoPage';
import ErrorPage from '../pages/ErrorPage';
import NotFoundPage from '../pages/404';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <TodoPage />,
    errorElement: <ErrorPage />,
  },

  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default Router;
