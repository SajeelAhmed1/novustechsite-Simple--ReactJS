import React from 'react'
import {IoLogoGithub} from 'react-icons/io5'

 import me from './assets/me.jpeg'


export default function ourserviceComp() {
  return (
    <div
                  // key={n.id}
                  className="border border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out"
                >
                  <p className="text-lg text-textBase font-medium uppercase">
                    {/* {n.name.length > 25 ? `${n.name.slice(0, 25)}...` : n.name} */}
                  </p>

                  <img
                    src={me}
                    className="w-full h-full object-cover rounded-md my-4"
                    alt=""
                  />

                  <div className="flex flex-1 items-center justify-between">
                    <p className="text-lg text-gray-300">
                      Technologies
                      <span className="block text-sm text-gray-500">
                        {/* {n.techs} */}
                      </span>
                    </p>
                    <a 
                    // href={n.github}
                    >
                      <div whileTap={{ scale: 0.5 }}>
                        <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />
                      </div>
                    </a>
                  </div>
                  
                </div>
  )
}
