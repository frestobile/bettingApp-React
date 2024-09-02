import React from 'react';
import Layout from '../Layout';
import ThirdSection from './ThirdSection';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';

const HomePage = () => {
  return (
    <Layout type="main">
      <div className="md:grid md:grid-cols-12 flex flex-col gap-[3px] p-[3px]">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </div>
    </Layout>
  );
};

export default HomePage;
