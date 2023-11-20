import React from 'react';

function Layout({ children }) {

  return (
    <main className="max-w-5xl mx-auto h-screen py-10 px-5">
      {children}
    </main>
  );
};

export default Layout;
