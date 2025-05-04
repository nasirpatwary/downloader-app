import { Typewriter } from "react-simple-typewriter";
import app from "./assets/app.jpg";
import demu from "./assets/demu.jpg";
const SnaptubeDownloadPage = () => {
  return (
    <div 
    className="space-y-8 bg-white p-4 font-sans text-center overflow-hidden">
      {/* Title & App Icon */}
      <div>
        <a download href="/download.app">
          <img
            className="w-14 h-14 rounded-full mx-auto animate__animated animate__repeat-2 animate__animated animate__fadeInUp"
            src={app}
            alt=""
          />
        </a>
        <h2 className="text-2xl leading-10 mt-4 bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">Big opportunities <br /> 
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

        {/* Download Button - Bottom Center */}
        <div className="mt-6 animate__animated animate__fadeInUp">
          <a
            download
            href="/download.app"
            className="text-black bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Download
          </a>
        </div>
      </div>
      <div>
      <img className="" src={demu} alt="" />
      </div>
      <p className="text-xl bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient"> Download app YouTube Instagram Facebook WhatsApp and Twitter </p>
      {/* Social Icons */}
      <div className="flex flex-wrap items-center text-black gap-4">
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
    </div>
  );
};

export default SnaptubeDownloadPage;
