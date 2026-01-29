import HeroImage from "../assets/images/profile 2.jpeg"; 
function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 bg-gray-50"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Text Section */}
        <div className="text-center md:text-left mt-10 sm:mt-14 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Hi, I’m <span className="text-blue-600">Deborah</span>
          </h1>

          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            Front-End Developer building responsive and user-friendly web
            applications with React.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Image / Illustration */}
        <div className="flex justify-center">
          <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
             <img src={HeroImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}


export default Hero;
