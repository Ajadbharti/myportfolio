import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              Ajad<span className="text-blue-500">.</span>
            </h2>

            <p className="mt-4 text-gray-400 max-w-md">
              Full Stack MERN Developer passionate about building modern,
              responsive and scalable web applications.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col md:items-end">
            <h3 className="text-xl font-semibold mb-4">
              Connect With Me
            </h3>

            <div className="flex gap-5 text-2xl">

              <a
                href="https://github.com/Ajadbharti"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-500 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/ajad62bharti/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-500 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:azadbharati802223@gmail.com"
                className="hover:text-blue-500 transition"
              >
                <FaEnvelope />
              </a>

            </div>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-gray-400">
          <p className="flex justify-center items-center gap-2">
            Made with <FaHeart className="text-red-500" />
            by <span className="text-white font-semibold">Ajad Bharti</span>
          </p>

          <p className="mt-2">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;