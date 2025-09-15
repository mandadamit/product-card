import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImage from '../assets/images/404-not-found.avif'; // place your image in public or src/assets

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-4">
      <img
        src={NotFoundImage}
        alt="404 Not Found"
        className="w-full max-w-md mb-6"
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Page Not Found</h1>
      <p className="text-gray-600 mb-6">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
