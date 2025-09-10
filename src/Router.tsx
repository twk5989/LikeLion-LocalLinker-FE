import React, { useEffect, useState } from 'react';
import { Outlet, createBrowserRouter, useNavigate } from 'react-router-dom';
import Layout from './layouts/layout';
import MainPage from './pages/Main/MainPage';
import OnboardingPage from './pages/Onboarding/OnboardingPage';
import ServiceIntroPage from './pages/ServiceIntro/ServiceIntroPage';
import ProfileSettingPage from './pages/ProfileSetting/ProfileSettingPage';
import CategoryPage from './pages/Category/CategoryPage';
import LatestPage from './pages/LatestPage/LatestPage';
import DuePage from './pages/DuePage/DuePage';
import BookmarkedNoticesPage from './pages/BookmarkedNotices/BookmarkedNoticesPage';
import ChatBotPage from './pages/ChatBot/ChatBotPage';
import DetailPage from './pages/Detail/DetailPage';
import SplashScreenPage from './pages/SplashScreen/SplashScreenPage';

const RootPage = () => {
  const navigate = useNavigate();
  const [showSplash, setShowSplash] = useState(true);
  const onboardingDone = localStorage.getItem('onboardingDone');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 2000); // 2초 동안 스플래시 화면 표시

    return () => clearTimeout(timeout);
  }, []);

  if (showSplash) {
    return <SplashScreenPage />;
  }

  if (!onboardingDone) {
    return (
      <OnboardingPage
        onNext={() => {
          localStorage.setItem('onboardingDone', 'true');
          navigate('/');
        }}
      />
    );
  }

  return (
    <Layout showHeader showFooter headerProps={{ type: 'main' }}>
      <MainPage />
    </Layout>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Outlet />
      </>
    ),
    children: [
      {
        index: true,
        element: <RootPage />,
      },
      {
        path: 'service-intro',
        element: (
          <Layout
            showHeader
            showFooter
            headerProps={{ type: 'detail', text: '서비스 소개' }}
          >
            <ServiceIntroPage />
          </Layout>
        ),
      },
      {
        path: 'profile-setting',
        element: (
          <Layout
            showHeader
            showFooter
            headerProps={{ type: 'detail', text: '개인 설정' }}
          >
            <ProfileSettingPage />
          </Layout>
        ),
      },
      {
        path: 'bookmarked',
        element: (
          <Layout
            showHeader
            showFooter
            headerProps={{ type: 'detail', text: '저장한 공고' }}
          >
            <BookmarkedNoticesPage />
          </Layout>
        ),
      },
      {
        path: 'detail/:id',
        element: (
          <Layout
            showHeader
            showFooter
            headerProps={{ type: 'detail', hideMenu: true }}
          >
            <DetailPage />
          </Layout>
        ),
      },
      {
        path: 'category',
        element: <CategoryPage />,
      },
      {
        path: 'postings/latest',
        element: <LatestPage />,
      },
      {
        path: 'postings/due',
        element: <DuePage />,
      },
      {
        path: 'chatbot',
        element: (
          <Layout showHeader showFooter={false} headerProps={{ type: 'chat' }}>
            <ChatBotPage />
          </Layout>
        ),
      },
    ],
  },
]);

export default router;
