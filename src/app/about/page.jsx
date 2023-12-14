import AboutCard from '@/components/AboutCard';
import Contact from '@/components/AboutCard/Contact';
import TechStack from '@/components/AboutCard/TechStack';
import Izzan from '@/components/assets/images/izzanbout2.png';
import Image from 'next/image';

const About = () => {
  return (
    <main className="max-w-screen-lg mx-auto mt-24 p-5">
      <h1 className="animate__animated animate__fadeInUp animate__faster text-white text-3xl font-bold [text-shadow:1px_1px_100px_var(--tw-shadow-color)] shadow-blue-500">About</h1>
      <h3 className="animate__animated animate__fadeInUp animate__fast text-emerald-300 text-4xl font-bold mt-2">Izzan Abdul Aziz</h3>
      <div className="md:flex gap-10">
        <div className="mt-5">
          <AboutCard />
          <TechStack />
        </div>
        <div className="mt-5">
          <Image src={Izzan} className="rounded-md animate__animated animate__fadeInUp animate__fast" />
          <Contact />
        </div>
      </div>
    </main>
  );
};

export default About;
