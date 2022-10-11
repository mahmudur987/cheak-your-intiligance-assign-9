
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Main/Main';
import Header from './Components/Header/Header';
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blog/Blog';
import Quizs from './Components/Quizs/Quizs';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Header></Header>
        },
        {
          path: '/statistics',
          loader: async () => {
            return fetch(`https://openapi.programming-hero.com/api/quiz `)

          },
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/quizs/:quizsId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizsId}`)

          },
          element: <Quizs></Quizs>
        },
        {
          path: '/*',
          element: <div>
            <h1 className='text-5xl font-extrabold'>The page is under maintanace !</h1>

          </div>
        }
      ]
    },
    {
      path: '/*',
      element: <div className='flex flex-col items-center mt-20'>
        <h1 className='text-5xl font-extrabold'>The page is currently not available !</h1>
        <h1 className='text-5xl font-extrabold'>please compline to us</h1>

      </div>
    }
  ])






  return (
    <div className="App">

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
