import React from 'react';
import Footer from '../Footer';


const Home = () => {

  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
              ByTeams
            </h1>
            <p className="mt-6 text-med leading-8 text-gray-600">
              Introducing the data-driven, collaborative approach to tech team hiring.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/start"
                className="rounded-md bg-zinc-950 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      <Footer/>
      </div>
    </div>
  )
}

export default Home;