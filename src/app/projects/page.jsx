import ProjectsCard from '@/components/ProjectsCard';

const Projects = () => {
  return (
    <main className="max-w-screen-lg mx-auto mt-24 p-5">
      <div>
        <h1 className="animate__animated animate__fadeInUp animate__faster text-emerald-300 text-5xl font-bold [text-shadow:1px_1px_100px_var(--tw-shadow-color)] shadow-blue-500">Projects</h1>
        <p className="text-zinc-300 animate__animated animate__fadeInUp animate__fast mt-5">Showcase of my works.</p>
      </div>
      <div className="md:grid md:grid-cols-3 gap-10 mt-10">
        <ProjectsCard title="Anime List API" desc="This project utilizes the Jikan API to captivate users by displaying an exciting and engaging list of anime." repo={'https://github.com/niemoo/animeList-API'} />
        <ProjectsCard title="Dashboard Monitoring Melon" desc="This website is created to monitoring and controlling the growth and development of melon fruits in UG Technopark Cianjur." repo={'https://github.com/niemoo/dashboard-melon'} />
        <ProjectsCard title="Maqaan Food" desc="A responsive web app that I built during my learning journey, enhanced with a touch of creativity." repo={'https://github.com/niemoo/MaQaan-food-project'} />
        <ProjectsCard title="Movie List API" desc="This project utilizes the TMDB API to captivate users by displaying an exciting and engaging list of movie." repo={'https://github.com/niemoo/movie-api'} />
        <ProjectsCard title="Notes App" desc="This website is created utilizing session storage to create, archive, and delete notes." repo={'https://github.com/niemoo/notes-apps'} />
        <ProjectsCard title="Notes App Back End" desc="This application is built using HAPI JS to create a simple REST API that functions to create, archive, and delete notes." repo={'https://github.com/niemoo/notes-app-back-end'} />
      </div>
    </main>
  );
};

export default Projects;
