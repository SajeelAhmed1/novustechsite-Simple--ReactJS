import Spline from '@splinetool/react-spline';
import {IoMenu,IoLogoGithub,IoPhonePortraitOutline} from 'react-icons/io5'
import { useState } from 'react';
import me from './assets/me.jpeg';
import graphics from './assets/graphics.PNG';

import appdev from './assets/appdev.PNG';

import web from './assets/web.PNG';

import marketing from './assets/marketing.PNG';
// import ourserviceComp from './serviceComp';

function App() {

  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex w-screen  min-h-screen flex-col items-center justif-center relative bg-primary pb-20 ">
      {/* navbar */}
      <nav className='w-full px-6 z-50  fixed inset-x-0 top-2 flex justify-center items-center'>
        <div className='w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center'>
          <p className="text-lg text-slate-200 font-medium">Novus Tech</p>
          <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
              <a href="#home"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
              > Home</a>
              <a href="#home"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
              > About</a>
              <a href="#home"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
              > Contact</a>
          </div>
          <div
              className="block md:hidden  ml-auto cursor-pointer"
              onClick={() => setIsActive(!isActive)}
            >
              <IoMenu className="text-2xl text-textBase " />
            </div>
            {isActive && (
              <div
                
                className="p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6"
              >
                <a
                  href="#home"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  Projects
                </a>
                <a
                  href="#contacts"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  Contact
                </a>
                
              </div>)}
        </div>
      </nav>
      <div className="relative " id="home" > 
      
      {/* new bg */}
      <Spline scene="https://prod.spline.design/BdDckWFpugA51Fok/scene.splinecode" />
      <div className="absolute bottom-10 w-full flex justify-center items-center">
            <div className="shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl ">
              <p className="text-white">Press and drag to orbit</p>
            </div>
      </div>    
      </div>
      <main className="w-[80%] mt-4">
          <section
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24"
            id="about"
          >
            <div className="w-full h-420 flex items-center justify-center">
              <div className="w-275 h-340 relative bg-m -200 rounded-md">
                <img
                  src={me}
                  alt=""
                  className="w-full h-full absolute -right-4 top-4 object-cover rounded-lg drop-shadow-2xl"
                />
              </div>
            </div>
            <div className="w-full h-420 flex flex-col items-center justify-center ">
              <p className="text-lg text-textBase text-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente dicta recusandae commodi praesentium officia, aliquam
                cumque voluptatem dolor enim ducimus id maiores consequatur
                dolorem! Architecto aperiam corrupti nostrum eum similique!
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis saepe dolor illo. Tenetur labore impedit nihil natus
                explicabo perspiciatis nisi autem aut numquam dolorum, voluptas
                vero nobis assumenda commodi magni.
              </p>

              <button class="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80">
                <span class="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Download
                </span>
              </button>
            </div>
            </section>
        </main>
        <h1 className='text-m text-6xl'>Our Services</h1>
        <section
            className="flex flex-wrap items-center justify-evenly my-24 gap-4"
            id="projects"
          >
            {/* new conatiner */}
            <div
                  // key={n.id}
                  className="border border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out"
                >
                  <p className="text-lg text-textBase font-medium uppercase">
                    {/* {n.name.length > 25 ? `${n.name.slice(0, 25)}...` : n.name} */}
                  </p>

                  <img
                    src={appdev}
                    className="w-full h-full object-cover rounded-md my-4"
                    alt=""
                  />

                  {/* <div className="flex flex-1 items-center justify-between">
                    <p className="text-lg text-gray-300">
                      heading
                      <span className="block text-sm text-gray-500">
                        info
                      </span>
                    </p>
                    <a 
                    
                    >
                      <div whileTap={{ scale: 0.5 }}>
                        <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />
                      </div>
                    </a>
                  </div> */}
                </div>
                
                
                  
                
                
                {/* new conatiner */}
                <div
                  // key={n.id}
                  className="border border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out"
                >
                  <p className="text-lg text-textBase font-medium uppercase">
                    {/* {n.name.length > 25 ? `${n.name.slice(0, 25)}...` : n.name} */}
                  </p>

                  <img
                    src={marketing}
                    className="w-full h-full object-cover rounded-md my-4"
                    alt=""
                  />

                  {/* <div className="flex flex-1 items-center justify-between">
                    <p className="text-lg text-gray-300">
                      heading
                      <span className="block text-sm text-gray-500">
                        info
                      </span>
                    </p>
                    <a 
                    
                    >
                      <div whileTap={{ scale: 0.5 }}>
                        <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />
                      </div>
                    </a>
                  </div> */}
                </div>


                {/* new conatiner */}
                <div
                  // key={n.id}
                  className="border border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out"
                >
                  <p className="text-lg text-textBase font-medium uppercase">
                    {/* {n.name.length > 25 ? `${n.name.slice(0, 25)}...` : n.name} */}
                  </p>

                  <img
                    src={appdev}
                    className="w-full h-full object-cover rounded-md my-4"
                    alt=""
                  />

                  {/* <div className="flex flex-1 items-center justify-between">
                    <p className="text-lg text-gray-300">
                      heading
                      <span className="block text-sm text-gray-500">
                        info
                      </span>
                    </p>
                    <a 
                    
                    >
                      <div whileTap={{ scale: 0.5 }}>
                        <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />
                      </div>
                    </a>
                  </div> */}
                </div>

                {/* new conatiner */}
                <div
                  // key={n.id}
                  className="border border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out"
                >
                  <p className="text-lg text-textBase font-medium uppercase">
                    {/* {n.name.length > 25 ? `${n.name.slice(0, 25)}...` : n.name} */}
                  </p>

                  <img
                    src={graphics}
                    className="w-full h-full object-cover rounded-md my-4"
                    alt=""
                  />

                  {/* <div className="flex flex-1 items-center justify-between">
                    <p className="text-lg text-gray-300">
                      heading
                      <span className="block text-sm text-gray-500">
                        info
                      </span>
                    </p>
                    <a 
                    
                    >
                      <div whileTap={{ scale: 0.5 }}>
                        <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />
                      </div>
                    </a>
                  </div> */}
                </div>


                
                
                {/* <ourserviceComp/> */}
                
                
              
          </section>
            

    </div>
  );
}

export default App;
