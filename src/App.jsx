
import {IoMenu} from 'react-icons/io5'
import { useState } from 'react';
import novuslogo from './assets/novuslogo.jpg';


function App() {

  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex w-screen  min-h-screen flex-col items-center justif-center relative bg-primary pb-20 ">
      {/* navbar */}
      <nav className='w-full px-6 z-50  fixed inset-x-0 top-2 flex justify-center items-center'>
        <div className='w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center'>
          <p className="text-lg text-m  font-medium">Novus Tech</p>
          <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
              <a href="#home"
                className="text-base text-textBase font-medium hover:text-m cursor-pointer duration-100 ease-in"
              > Home</a>
              <a href="#home"
                className="text-base text-textBase font-medium hover:text-m cursor-pointer duration-100 ease-in"
              > About</a>
              <a href="#home"
                className="text-base text-textBase font-medium hover:text-m cursor-pointer duration-100 ease-in"
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
      
      {/* new bg */}
      
      {/* <Spline scene="https://prod.spline.design/hiKd3KfSG2B49b-s/scene.splinecode" /> */}
      
     {/* <iframe src='https://my.spline.design/novustechscenenoballs-b7420824bc18175398aa9972fa3abd01/' frameborder='0' width='280%' height='300%' className='woop'></iframe> */}

    <section>
      <div className='titlebox'>
        <h1 className='novustitle'>The Novus Tech</h1>
      </div>
      
    </section>
 
      
      
  
     
      
      <main className="w-[80%] mt-4">
          <section
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24"
            id="about"
          >
            <div className="w-full h-420 flex items-center justify-center">
              <div className="w-275 h-340 relative bg-m -200 rounded-md">
                <img
                  src={novuslogo}
                  alt=""
                  className="w-full h-full absolute -right-4 top-4 object-cover rounded-lg drop-shadow-2xl"
                />
              </div>
            </div>
            <div className="w-full h-420 flex flex-col items-center justify-center ">
              <p className="text-lg text-textBase text-center">
                Providng the best ad most effeciently streamlined solution for all your IT needs and beyond.
              </p>

              <button class="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-orange-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80">
                <span class="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Hire Us !
                </span>
              </button>
            </div>
            </section>
        </main>
        <h1 className='u text-6xl'>Our Services</h1>
        <section
            className="flex flex-wrap items-center justify-evenly my-24 gap-4"
            id="projects"
          >
        {/* <div className='cont'> */}
                <div class="service">
                <i class="fas fa-laptop-code"></i>
                <h2>Web Design</h2>
                <p className='ptext'>
                    Web Solutions ranging from Front End developement to backend developement solutions
                </p>
                </div>

                <div class="service">
                <i class="fas fa-mobile-alt"></i>
                <h2>App Development</h2>
                <p className='ptext'>
                    Robust Mobile Application developement using a wide array of trending frameworks and Languages 
                </p>
                </div>

                <div class="service">
                <i class="fas fa-chart-line"></i>
                <h2>Marketing</h2>
                <p className='ptext'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                    quae?
                </p>
                </div>
                <div class="service">
                <i class="fab fa-sketch"></i>
                <h2>Graphics</h2>
                <p className='ptext'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                    quae?
                </p>
                </div>
            {/* </div> */}

                
                
  {/* <ourserviceComp/> */}
      
          </section>
            

    </div>
  );
}

export default App;
