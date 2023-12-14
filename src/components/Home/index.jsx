import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Izzan from '@/components/assets/images/izzan.png';
import 'animate.css';

const SectionHome = () => {
  return (
    <div className="p-5">
      <section className="flex justify-between items-center">
        <div className="">
          <h1 className="animate__animated animate__fadeInUp animate__faster text-5xl font-bold">Hi!</h1>
          <h1 className="animate__animated animate__fadeInUp animate__fast text-5xl font-bold">
            It's me <span className="text-emerald-500 [text-shadow:1px_1px_1px_var(--tw-shadow-color)] shadow-white">Izzan</span>
          </h1>
        </div>
        <div className="absolute before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
        <Image src={Izzan} width={100} height={100} alt="" className="animate__animated animate__fadeInUp animate__faster" />
      </section>
      <section className="mt-10">
        <p className="text-zinc-300 animate__animated animate__fadeInUp animate__fast">I'm a web developer based in Jakarta, Indonesia. I enjoy using JavaScript</p>
        <p className="text-zinc-300 animate__animated animate__fadeInUp animate__fast">to build tech products.</p>
      </section>
      <section className=" flex mt-10">
        <Link href={'https://www.linkedin.com/in/izzanabdul/'} target="_blank">
          <FaLinkedin className="text-zinc-400 text-3xl hover:text-white animate__animated animate__fadeInUp animate__fast mr-5" />
        </Link>
        <Link href={'https://github.com/niemoo'} target="_blank">
          <FaGithub className="text-zinc-400 text-3xl hover:text-white animate__animated animate__fadeInUp animate__fast" />
        </Link>
      </section>
    </div>
  );
};

export default SectionHome;
