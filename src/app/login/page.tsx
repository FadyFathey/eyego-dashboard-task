'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        router.push('/dashboard');
      } else {
        const data = await res.json();
        setError(data.error);
      }
    } catch (error) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          width="180"
          height="180"
          src="https://i0.wp.com/eyego.ai/wp-content/uploads/2023/12/cropped-eyego-logo-png-1-1.png?fit=810%2C935&ssl=1"
          alt="EyeGo AI computer vision platform"
          className="mx-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                Password
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

          <div>
            {isLoading ? (
              <button
                type="button"
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold text-white shadow opacity-70 cursor-not-allowed"
                disabled
              >
                <svg className="mr-3 size-5 animate-spin" viewBox="0 0 24 24"></svg>
                Processing…
              </button>
            ) : (
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            )}
          </div>
        </form>
        <div className="mt-4 text-sm text-gray-600 text-center">
          <p className="font-medium text-gray-700">Test Credentials:</p>
          <p>
            Email: <span className=" text-indigo-600">test@eyego.ai</span>
          </p>
          <p>
            Password: <span className=" text-indigo-600">123456</span>
          </p>
        </div>
        <p className="mt-10 text-center text-sm text-gray-500 cursor-pointer">Not a member?</p>
      </div>
    </div>
  );
};

export default LoginPage;
