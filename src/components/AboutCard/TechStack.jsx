'use client';

import { TbBrandNextjs } from 'react-icons/tb';
import { RiReactjsFill } from 'react-icons/ri';
import { FaNodeJs, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiPostman } from 'react-icons/si';
import { Tooltip } from '@material-tailwind/react';
import 'animate.css';

const TechStack = () => {
  return (
    <div className="md:mt-20 mt-16">
      <p className="text-xl font-semibold animate__animated animate__fadeInUp animate__fast">Tech Stack</p>
      <div className="flex gap-5 mt-3 animate__animated animate__fadeInUp animate__fast">
        <div className="w-fit">
          <Tooltip
            content="Next.js"
            className="bg-white text-black p-1 rounded-lg"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <a>
              <TbBrandNextjs className="text-white text-3xl hover:text-emerald-500 mt-5" />
            </a>
          </Tooltip>
        </div>
        <div className="w-fit">
          <Tooltip
            content="React"
            className="bg-white text-black p-1 rounded-lg"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <a>
              <RiReactjsFill className="text-white text-3xl hover:text-sky-500 mt-5" />
            </a>
          </Tooltip>
        </div>
        <div className="w-fit">
          <Tooltip
            content="Node.js"
            className="bg-white text-black p-1 rounded-lg"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <a>
              <FaNodeJs className="text-white text-3xl hover:text-emerald-500 mt-5" />
            </a>
          </Tooltip>
        </div>
        <div className="w-fit">
          <Tooltip
            content="Tailwindcss"
            className="bg-white text-black p-1 rounded-lg"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <a>
              <SiTailwindcss className="text-white text-3xl hover:text-sky-500 mt-5" />
            </a>
          </Tooltip>
        </div>
        <div className="w-fit">
          <Tooltip
            content="Bootstrap"
            className="bg-white text-black p-1 rounded-lg"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <a>
              <FaBootstrap className="text-white text-3xl hover:text-purple-600 mt-5" />
            </a>
          </Tooltip>
        </div>
        <div className="w-fit">
          <Tooltip
            content="MySQL"
            className="bg-white text-black p-1 rounded-lg"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <a>
              <SiMysql className="text-white text-4xl hover:text-sky-500 mt-5" />
            </a>
          </Tooltip>
        </div>
        <div className="w-fit">
          <Tooltip
            content="Postman"
            className="bg-white text-black p-1 rounded-lg"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <a>
              <SiPostman className="text-white text-3xl hover:text-orange-500 mt-5" />
            </a>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};
export default TechStack;
