import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import SignIn from '@/components/signIn';

import ArticleDetailPage from '@/pages/articleDetail';
import SignUp from '@/components/signUp';
import MyPage from '@/pages/myPage';
import ArticleListPage from '@/pages/articleList';
import AdminLogin from '@/pages/adminLogin';
import AdminBoardDetail from '@/pages/AdminBoardDetail';
import AdminBoard from '@/pages/adminBoard';
import CampReviewListPage from '@/pages/campReviewList';
import ReviewDetailListPage from '@/pages/reviewDetailList';
import { Suspense, lazy } from 'react';

const WritePage = lazy(() => import('@/pages/editor/write'));
const EditPage = lazy(() => import('@/pages/editor/edit'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <SignIn />,
      },
      {
        path: '/signin',
        element: <SignIn />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/community',
        element: <ArticleListPage />,
      },
      {
        path: '/community/:id',
        element: <ArticleDetailPage />,
      },
      {
        path: '/review',
        element: <CampReviewListPage />,
      },
      {
        path: '/review/detail',
        element: <ReviewDetailListPage />,
      },
      { path: '/mypage', element: <MyPage /> },
      { path: '/admin/login', element: <AdminLogin /> },
      { path: '/admin/board', element: <AdminBoard /> },
      { path: '/admin/detail/:id', element: <AdminBoardDetail /> },
    ],
  },
  {
    path: '/write',
    element: (
      <Suspense>
        <WritePage />
      </Suspense>
    ),
  },
  {
    path: '/edit/:id',
    element: (
      <Suspense>
        <EditPage />
      </Suspense>
    ),
  },
]);
