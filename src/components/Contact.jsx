function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Get in Touch
        </h2>

        <p className="mt-4 text-gray-600 text-base md:text-lg">
          I’m open to junior front-end roles, internships, freelance work, and collaborations.
        </p>

        <div className="mt-8 space-y-4">
          <p className="text-lg">
            📧{" "}
            <a
              href="mailto:deborahmomodu999@gmail.com"
              className="text-blue-600 hover:underline"
            >
              deborahmomodu999@gmail.com
            </a>
          </p>

          <p className="text-lg">
            🔗{" "}
            <a
              href="https://www.linkedin.com/in/deborah-momodu-0a2910313/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
          </p>

          <p className="text-lg">
            💻{" "}
            <a
              href="https://github.com/debbiemomodu"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
