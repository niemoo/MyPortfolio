import { MdEmail } from 'react-icons/md';

const Contact = () => {
  return (
    <div className="md:mt-10 mt-5">
      <div className="flex gap-3 items-center justify-center group hover:text-emerald-500 animate__animated animate__fadeInUp animate__fast">
        <MdEmail className="text-white text-3xl group-hover:text-emerald-500" />
        <div className="border-l-2 border-color-red h-6 mr-2"></div>
        <p className="text-sm">izzanabdul123@gmail.com</p>
      </div>
    </div>
  );
};

export default Contact;
