import React from 'react';
import Header from '@/components/Header';
import Profile from '@/components/Profile';
import Skills from '@/components/Skills';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Profile />
      <Skills />
    </div>
  );
};

export default Home;
