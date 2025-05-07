import { Typewriter } from "react-simple-typewriter";
import app from "./assets/app.jpg";
import demu from "./assets/demu.jpg";
const SnaptubeDownloadPage = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 bg-white p-4 md:p-8 font-sans text-center overflow-hidden">
      {/* Title & App Icon */}
      <div>
        <a download href="/download.apk">
          <img
            className="w-14 h-14 rounded-full mx-auto animate__animated animate__repeat-2 animate__animated animate__fadeInUp"
            src={app}
            alt=""
          />
        </a>
        <h2 className="text-2xl leading-10 mt-4 bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
          Big opportunities <br />
          <Typewriter
            words={[" All Video Downloader."]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={70}
            delaySpeed={2000}
          />
        </h2>
      </div>

      {/* Download Button - Bottom Center */}
      <div className="mt-2 md:w-44 mx-auto animate__animated animate__fadeInUp">
        <a
          download
         href="/download.apk"
          className="block text-center bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          Download Now
        </a>
      </div>
      <div>
        <img className="mx-auto border" src={demu} alt="" />
      </div>
      <p className="text-xl bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
        {" "}
        Download app YouTube Instagram Facebook WhatsApp and Twitter Video
        Download
      </p>
      {/* Social Icons */}
      <div className="flex md:justify-center flex-wrap md:flex-row items-center text-black gap-4">
        <div className="flex items-center gap-5">
          <img
            src="https://img.icons8.com/color/48/youtube-play.png"
            alt="YouTube"
            className="w-8 animate__animated animate__fadeInLeft"
          />
          <p>YouTube</p>
        </div>
        <div className="flex items-center gap-5">
          <img
            src="https://img.icons8.com/color/48/instagram-new.png"
            alt="Instagram"
            className="w-8 animate__animated animate__fadeInLeft"
          />
          <p>Instagram</p>
        </div>
        <div className="flex items-center gap-5">
          <img
            src="https://img.icons8.com/color/48/facebook-new.png"
            alt="Facebook"
            className="w-8 animate__animated animate__fadeInLeft"
          />
          <p>Facebook</p>
        </div>
        <div className="flex items-center gap-5">
          <img
            src="https://img.icons8.com/color/48/whatsapp.png"
            alt="WhatsApp"
            className="w-8 animate__animated animate__fadeInLeft"
          />
          <p>WhatsApp</p>
        </div>
        <div className="flex items-center gap-5">
          <img
            src="https://img.icons8.com/color/48/twitter--v1.png"
            alt="Twitter"
            className="w-8 animate__animated animate__fadeInLeft"
          />
          <p>Twitter</p>
        </div>
      </div>
       <div
      className="hero bg-cover bg-center"
      style={{
        backgroundImage:
          `url(${demu})`,
      }}
    >
      <div className="hero-overlay bg-gradient-to-t from-black to-[rgba(31, 31, 31, 0)]"></div>
      <footer className="flex space-y-3 py-4 md:p-4 flex-col footer-horizontal footer-center rounded lg:p-11">
        <h3>Easily download videos from YouTube Instagram Facebook WhatsApp and Twitter with one click.</h3>
        <nav className="flex justify-center text-gray-300 flex-wrap gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a download href="/download.apk">Download</a>
        </nav>
        <div className="flex justify-center  flex-wrap md:flex-row items-center text-black gap-4">
          <img
            src="https://img.icons8.com/color/48/youtube-play.png"
            alt="YouTube"
            className="w-8 animate__animated animate__fadeInUp"
          />
          <img
            src="https://img.icons8.com/color/48/instagram-new.png"
            alt="Instagram"
            className="w-8 animate__animated animate__fadeInUp"
          />

          <img
            src="https://img.icons8.com/color/48/facebook-new.png"
            alt="Facebook"
            className="w-8 animate__animated animate__fadeInUp"
          />
          <img
            src="https://img.icons8.com/color/48/whatsapp.png"
            alt="WhatsApp"
            className="w-8 animate__animated animate__fadeInUp"
          />

          <img
            src="https://img.icons8.com/color/48/twitter--v1.png"
            alt="Twitter"
            className="w-8 animate__animated animate__fadeInUp"
          />
        </div>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - Download the App – All Video Downloader
          </p>
        </aside>
      </footer>
    </div>
    </div>
  );
};

export default SnaptubeDownloadPage;
