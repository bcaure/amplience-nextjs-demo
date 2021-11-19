import type { NextPage } from 'next';
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import DemoHeader from './header';
import HomePage from './homepage';

const Index: NextPage = () => {
  return (
    <>
      <div className="header"><DemoHeader /></div>
      <main className="main">
        <HomePage />
      </main>
      <footer className="footer">
      </footer>
    </>
  );
};

export default Index;


