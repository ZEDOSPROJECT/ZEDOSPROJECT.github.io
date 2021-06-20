import React from "react";
import ScreenShot from "./screenshot.jpg";
import part000 from "./Parteners/000.png";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to ZED OS Project</h1>
      <iframe
        src="https://www.youtube.com/embed/B9dhvyoRLqE"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      <h2>
        Inspired in Windows XP and based on Linux<br></br>Built with Web
        Tecnologies for the Web
      </h2>
      <div className="VMTest">
        <h1>If you want to test</h1>
        <p>
          Currently it is only possible to use from a live cd (without installation)
        </p>
        <p>
          <a
            target="_blank"
            href="https://sourceforge.net/projects/zed-os/files/latest/download"
          >
            <h1>Download</h1>
          </a>
        </p>
      </div>
      {/* <div className="VMTest">
        <h1>Our Partners</h1>
        <p>
          <div className="partener">
            <a href="http://institutomastertrainning.com.br/index.php" target="_blank"> 
              <img className="partLogo" src={part000} width="64" />
              <div className="partTitle">Instituto Master EAD</div>
            </a>
          </div>
        </p>
      </div> */}
      <div className="socialNetworks">
        <p>
          <h1>Social Networks</h1>
          <div>
            <a
              href="https://www.instagram.com/zed_os/"
              title="Instagram"
              target="_blank"
            >
              <img
                className="socialNetworksIcon"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png"
              />
            </a>
            <a
              href="https://www.facebook.com/zedos.project"
              title="Facebook"
              target="_blank"
            >
              <img
                className="socialNetworksIcon"
                src="https://w0.pngwave.com/png/253/503/facebook-computer-icons-social-networking-service-login-facebook-icon-png-clip-art.png"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCfY-nHzr1oiD8fgXDGNXIjw"
              title="Youtube"
              target="_blank"
            >
              <img
                className="socialNetworksIcon"
                src="https://i.pinimg.com/originals/63/d0/8e/63d08e28c42a90dfc2fe2d0b1c7ab00c.png"
              />
            </a>
            <a
              href="https://twitter.com/ZEDOS14"
              title="Twitter"
              target="_blank"
            >
              <img
                className="socialNetworksIcon"
                src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-2-1.png"
              />
            </a>
            <a
              href="https://github.com/ZEDOSPROJECT/ZED-UI-WEB"
              title="Github"
              target="_blank"
            >
              <img
                className="socialNetworksIcon"
                src="https://image.flaticon.com/icons/png/512/25/25231.png"
              />
            </a>
          </div>
        </p>
      </div>
    </div>
  );
}
