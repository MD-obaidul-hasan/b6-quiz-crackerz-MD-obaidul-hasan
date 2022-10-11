import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Quiz from './pages/Quiz/Quiz';
import 'swiper/css';
import './App.css';
import Blogs from './pages/Blogs/Blogs';
import Statices from './pages/Statices/Statices';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        {
          path: '/blogs',
          element: <Blogs />,
        },
        {
          path: '/statices',
          element: <Statices />,
          loader: () => fetch(`https://openapi.programming-hero.com/api/quiz`)
        },
      ]
    },
    { path: '*', element: <NotFound /> },
  ]);


  return (
    <div>
      <ToastContainer />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
