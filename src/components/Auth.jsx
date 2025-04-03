import React, { useState } from 'react';
import { PenLine, Book, Heart } from 'lucide-react';

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full flex rounded-2xl shadow-lg overflow-hidden">
        {/* Left Panel - Branding */}
        <div className="hidden md:flex md:w-1/2 bg-blue-600 p-12 flex-col justify-between text-white relative">
          <div className="relative z-10">
            <h1 className="text-4xl font-bold mb-6">काव्यपथ</h1>
            <p className="text-lg mb-8">अपनी कविताओं को लिखें, पढ़ें और साझा करें। हिंदी साहित्य की एक नई यात्रा।</p>
            <div className="space-y-4">
              <Feature Icon={PenLine} text="अपनी कविताएँ लिखें" />
              <Feature Icon={Book} text="श्रेष्ठ रचनाएँ पढ़ें" />
              <Feature Icon={Heart} text="पसंदीदा कविताएँ साझा करें" />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/50 to-blue-700/50" />
          <img
            src="https://images.unsplash.com/photo-1519791883288-dc8bd696e667"
            alt="Books Background"
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
          />
        </div>

        {/* Right Panel - Auth Form */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 bg-white dark:bg-gray-800">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2 dark:text-white">
              {isSignIn ? 'स्वागत है' : 'खाता बनाएं'}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {isSignIn ? 'अपने खाते में प्रवेश करें' : 'काव्यपथ में शामिल हों'}
            </p>
          </div>

          <form className="space-y-6">
            {!isSignIn && (
              <div>
                <label className="block text-sm font-medium mb-2 dark:text-white">नाम</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="अपना नाम दर्ज करें"
                />
              </div>
            )}
            <div>
              <label className="block text-sm font-medium mb-2 dark:text-white">ईमेल</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="आपका ईमेल"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 dark:text-white">पासवर्ड</label>
              <input
                type="password"
                className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="पासवर्ड दर्ज करें"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {isSignIn ? 'प्रवेश करें' : 'खाता बनाएं'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsSignIn(!isSignIn)}
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              {isSignIn ? 'नया खाता बनाएं' : 'पहले से खाता है? प्रवेश करें'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Feature = ({ Icon, text }) => (
  <div className="flex items-center space-x-3">
    <Icon className="w-6 h-6" />
    <span>{text}</span>
  </div>
);

export default Auth;