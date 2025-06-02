import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FiMail, FiChevronDown } from 'react-icons/fi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';





export default function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar after scrolling past hero section
      const heroHeight = window.innerHeight;
      setShowNavbar(window.scrollY > heroHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Sticky Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl md:text-4xl font-caramel text-teal-600">Rayyan</h1>
          <div className="flex space-x-8">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className="text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              Projects
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              Contact
            </ScrollLink>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 flex flex-wrap justify-center items-end gap-2">
            Hi, I'm
            <span className="text-teal-600 font-caramel text-[3.5rem] md:text-[5rem] leading-none relative top-[2px]">
              Rayyan
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            I'm a Computer Science Graduate
          </p>
          <p className="text-xl md:text-2xl text-gray-600 mb-10">
            Welcome to my Portfolio!
          </p>

          {/* Scroll Button */}
          <ScrollLink
            to="projects"
            smooth={true}
            duration={600}
            className="inline-flex items-center justify-center text-teal-600 hover:text-teal-800 transition-all cursor-pointer animate-bounce"
          >
            <FiChevronDown size={36} />
          </ScrollLink>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-6 space-y-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            My Projects
          </h2>

          {/* Project 1 */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="md:w-1/2 h-[360px] flex items-center justify-center">
              <img
                src="/images/Electricity.png"
                alt="Electricity Forecasting"
                className="w-full h-full object-contain rounded-lg shadow-lg cursor-pointer"
                onClick={() => setSelectedImage('/images/Electricity.png')}
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-sm text-teal-500 uppercase mb-2">Featured Project</p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Short-Term Electricity Load Forecasting</h3>
              <p className="text-gray-700 mb-4">
                I conducted a comparative study of three machine learning models to forecast hourly electricity demand in Germany,
                using over 43,000 data points from European grid operators (ENTSO-E) between 2015 and 2019.
                The models included ARMA for traditional time series analysis, Kernel Ridge Regression for machine learning, and LSTM,
                as my deep learning approach.
                <br />
                <br />
                Each model was evaluated using multiple accuracy metrics,
                and the results were benchmarked against official ENTSO-E forecasts.
              </p>
              <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500">
                <span>scikit-learn</span>
                <span>TensorFlow</span>
                <span>Jupyter Notebook</span>
              </div>
              <div className="flex space-x-6">
                <a
                  href="https://github.com/333Rayyan/Electricity-Forecasting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-teal-600 transition-all"
                  aria-label="GitHub Repository"
                >
                  <FaGithub size={28} />
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="flex flex-col md:flex-row-reverse items-start md:items-center gap-8">
            <div className="md:w-1/2">
              <img
                src="/images/Flight-Planner.png"
                alt="Flight Planner"
                className="rounded-lg shadow-lg w-full h-[360px] object-cover cursor-pointer"
                onClick={() => setSelectedImage('/images/Flight-Planner.png')}
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-sm text-teal-500 uppercase mb-2">Featured Project</p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Flight Planner</h3>
              <p className="text-gray-700 mb-4">
                I built a full-stack web application that integrates the Amadeus Flight API to search and manage flights across more than 45 global cities.
                The app includes a complete user authentication system using bcrypt for password hashing, session management, and protected routes.
                <br />
                <br />
                It uses a MySQL database with custom stored procedures to optimise bookmark handling. Users can filter flights by date, number of passengers,
                and price, and manage their saved bookings through a personalised bookmark system. The interface was developed with Bootstrap and
                includes modals, input validation (via Express Validator), and CSRF protection. The backend runs on Node.js and Express.js with EJS templating,
                following secure, RESTful development practices.
              </p>
              <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500">
                <span>Express.js</span>
                <span>Bootstrap</span>
                <span>MySQL</span>
              </div>
              <div className="flex space-x-6">
                <a
                  href="https://github.com/333Rayyan/Flight-Planner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-teal-600 transition-all"
                  aria-label="GitHub Repository"
                >
                  <FaGithub size={28} />
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="md:w-1/2">
              <img
                src="/images/Game.png"
                alt="Platforming Game"
                className="rounded-lg shadow-lg w-full object-cover h-[360px] cursor-pointer"
                onClick={() => setSelectedImage('/images/Game.png')}
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-sm text-teal-500 uppercase mb-2">Featured Project</p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Platforming Game</h3>
              <p className="text-gray-700 mb-4">
                I developed a 2D side-scrolling platformer using p5.js, where players control a robot character navigating through a mystical environment.
                The game features smooth side-scrolling, jetpack-style movement, collectible golden keys, and environmental obstacles like canyons and mountains.
                <br />
                <br />
                Players must collect four keys to reach the flagpole and complete the level while managing a limited number of lives.
                The game includes animated character states (walking, flying, falling), interactive scenery, a scoring system, and keyboard controls for movement
                and flight. It demonstrates core game mechanics, sprite interactions, and dynamic camera movement in a custom-built engine.
              </p>
              <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500">
                <span>p5.js</span>
                <span>HTML</span>
                <span>CSS</span>
              </div>
              <div className="flex space-x-6">
                <a
                  href="https://github.com/333Rayyan/Intro-to-programming-game"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-teal-600 transition-all"
                  aria-label="GitHub Repository"
                >
                  <FaGithub size={28} />
                </a>
              </div>
            </div>
          </div>

          {/* GitHub CTA */}
          <div className="text-center mt-32">
            <h4 className="text-3xl font-semibold text-gray-900 mb-4">
              Want to see more?
            </h4>
            <p className="text-lg text-gray-700 mb-8">
              Explore additional projects and experiments on my GitHub profile.
            </p>
            <a
              href="https://github.com/333Rayyan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-teal-600 text-white text-lg font-medium rounded-full shadow-md hover:bg-teal-700 transition duration-300"
            >
              View More on GitHub →
            </a>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Expanded project"
            className="max-w-4xl max-h-[90vh] rounded-lg shadow-lg"
          />
        </div>
      )}


      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Contact Me
          </h2>

          {/* Contact Icons */}
          <div className="flex justify-center space-x-10 mb-8">
            {/* Email */}
            <a
              href="mailto:rayyan.hossain2050@gmail.com"
              className="text-gray-600 hover:text-teal-600 transform hover:scale-110 transition-all"
              aria-label="Email"
            >
              <FiMail size={32} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/m-rayyan-h/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-teal-600 transform hover:scale-110 transition-all"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={32} />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/333Rayyan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-teal-600 transform hover:scale-110 transition-all"
              aria-label="GitHub"
            >
              <FaGithub size={32} />
            </a>
          </div>

          {/* CV Button */}
          <div className="text-center">
            <a
              href="/Rayyan-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-teal-600 text-white text-lg font-medium rounded-full shadow-md hover:bg-teal-700 transition duration-300"
            >
              View My CV
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© {new Date().getFullYear()} Rayyan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
