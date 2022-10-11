import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Quiz from './pages/Quiz/Quiz';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('tshirts.json'),
          element: <Home />
        },
        {
          path: '/quiz/:id',
          element: <Quiz />
        },
      ]
    },
    { path: '*', element: <NotFound /> },
  ])


  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
