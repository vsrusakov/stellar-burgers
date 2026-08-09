import { createBrowserRouter } from 'react-router-dom';
import {
  ConstructorPage,
  Feed,
  Login,
  Register,
  ForgotPassword,
  ResetPassword,
  Profile,
  ProfileOrders,
  NotFound404
} from '@pages';
import { ProtectedRoute, OrderInfo, IngredientDetails } from '@components';
import App from '../components/app/app';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <ConstructorPage />
      },
      {
        path: 'feed',
        element: <Feed />
      },
      {
        path: '/feed/:number',
        element: <OrderInfo />,
        handle: {
          title: 'Детали заказа'
        }
      },
      {
        path: '/ingredients/:id',
        element: <IngredientDetails />,
        handle: {
          title: 'Детали ингредиента'
        }
      },
      {
        path: '*',
        element: <NotFound404 />
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: 'login',
            element: <Login />
          },
          {
            path: 'register',
            element: <Register />
          },
          {
            path: 'forgot-password',
            element: <ForgotPassword />
          },
          {
            path: 'reset-password',
            element: <ResetPassword />
          },
          {
            path: 'profile',
            element: <Profile />
          },
          {
            path: 'profile/orders',
            element: <ProfileOrders />
          },
          {
            path: 'profile/orders/:number',
            element: <OrderInfo />,
            handle: {
              title: 'Детали заказа'
            }
          }
        ]
      }
    ]
  }
]);

export default router;
