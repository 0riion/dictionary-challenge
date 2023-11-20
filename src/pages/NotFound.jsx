import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from '../assets/no-results.png';

const RootStyles = ({ children }) => (
  <div className="flex flex-col items-center justify-center min-h-screen">
    {children}
  </div>
);

const NotFound = () => {
  return (
    <RootStyles>
      <img
        src={notFoundImg}
        alt="404 error"
        className="w-96 h-96"
      />
      <h2 className="text-5xl font-bold">Word not Found</h2>
      <Link to="/" className="text-blue-500 underline">
        Go Home
      </Link>
    </RootStyles>
  );
};

export default NotFound;
