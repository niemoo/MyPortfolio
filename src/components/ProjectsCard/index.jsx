'use client';

import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { Tooltip } from '@material-tailwind/react';
import 'animate.css';

const ProjectsCard = ({ title, desc, repo }) => {
  return (
    <div className="md:mt-0 mt-5 rounded-md p-3 bg-transparent border border-zinc-700 animate__animated animate__fadeInUp animate__fast">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-zinc-400">{desc}</p>
      <div className="w-fit">
        <Tooltip
          content="Go to Repo"
          className="bg-white text-black p-1 rounded-lg"
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
        >
          <Link href={repo} target="_blank">
            <FaGithub className=" text-zinc-400 text-xl hover:text-white mt-5" />
          </Link>
        </Tooltip>
      </div>
    </div>
  );
};
export default ProjectsCard;
