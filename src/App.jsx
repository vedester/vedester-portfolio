// App.jsx
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <div className="min-h-screen bg-yellow-100 text-gray-800 font-sans">
      {/* Navbar */}
      <header className="bg-white shadow-md sticky top-0 z-50 px-4 py-3 md:px-8 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-extrabold text-blue-700">Vedester Otieno • Portfolio</h1>
        <nav className="flex flex-wrap justify-center md:justify-end gap-4 mt-3 md:mt-0 text-md font-medium">
          <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
          <a href="#projects" className="text-gray-700 hover:text-blue-600 transition">Projects</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 md:py-28 px-4 md:px-10 bg-gradient-to-br from-yellow-100 to-white">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-blue-700">👋 Hi, I'm Vedester</h2>
        <p className="text-base sm:text-lg md:text-xl max-w-4xl text-gray-700 leading-relaxed">
          A Nairobi-based <span className="font-semibold">software developer</span>, <span className="font-semibold">data analyst</span>, and <span className="font-semibold">ICT support specialist</span>.
          I build responsive web apps with <span className="font-semibold">React</span> and <span className="font-semibold">Flask</span>, develop smart tools using <span className="font-semibold">machine learning</span> and <span className="font-semibold">Python</span>,
          and maintain reliable systems through <span className="font-semibold">networking</span>, <span className="font-semibold">server administration</span>, and <span className="font-semibold">end-user support</span>.
          <br className="hidden md:inline" />
          Let’s build and support the future — one system, one solution, one line of code at a time.
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-20 px-4 sm:px-6 md:px-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-6">About Me</h2>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-gray-700 leading-relaxed">
          I'm <span className="font-semibold">Vedester Otieno</span>, a Mathematics & Computer Science graduate from JKUAT.
          I focus on crafting modern web solutions, integrating APIs, analyzing data, and building smart ML-powered tools.
        </p>

        {/* Skills Section */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Skills & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3 text-white">
            {[
              'HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS',
              'Python', 'Flask', 'SQL', 'PostgreSQL',
              'Machine Learning', 'Excel', 'Tableau', 'Git',
              'Linux', 'Network Troubleshooting', 'System Configuration'
            ].map(skill => (
              <span key={skill} className="bg-blue-600 px-4 py-2 rounded-full text-sm font-medium shadow">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />

      {/* Scroll Button */}
      <ScrollToTopButton />
    </div>
  );
}

export default App;
