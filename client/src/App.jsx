import React from 'react'
import Timeline from './components/Timeline';
import Navbar from './components/Navbar';

const App = () => {
  // console.log("Joy Brar");
  return (
    <div className="bg-zinc-50 relative">
      <Navbar />
      <div className="max-w-lg min-h-screen mx-auto pt-28 flex flex-col gap-8 justify-start bg-zinc-50 z-50">
        <h1 className="font-semibold text-3xl text-left px-8 md:px-6 lg:px-4 xl:px-2">Steps for your Consumer App</h1>
        <Timeline />
      </div>
      <img
        src="/newsletter-homepage-woman-couch 1.png"
        className="absolute right-0 bottom-0 max-xl:hidden z-0"
        alt="graphic"
      />
    </div>
  );
}

export default App
