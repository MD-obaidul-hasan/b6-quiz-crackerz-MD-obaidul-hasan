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
      element: <Main />,
      children: [
        {
          path: '/',
          element: <Home />,
          loader: () => fetch(`https://openapi.programming-hero.com/api/quiz`)
        },
        {
          path: '/home',
          element: <Home />,
          loader: () => fetch(`https://openapi.programming-hero.com/api/quiz`)
        },
        {
          path: '/quiz/:id',
          element: <Quiz />,
          loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
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
