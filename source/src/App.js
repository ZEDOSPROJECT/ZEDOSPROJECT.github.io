import React from "react";
import ScreenShot from "./screenshot.jpg";
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
          Currently it is only possible to test within a pre-built virtual
          machine (VirtualBox with VTx Enabled in BIOS/UEFI)
        </p>
        <p>
          <b>Username:</b> zed
        </p>
        <p>
          <b>Password:</b> zed
        </p>
        <p>
          <a
            target="_blank"
            href="https://mega.nz/file/1s8VEKzS#8RkEyzViz7we5p3EYJpOjC0VyY5FKRbo-cHEXO46Q0I"
          >
            <h1>Download</h1>
          </a>
        </p>
      </div>
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
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/YouTube_icon.png/320px-YouTube_icon.png"
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
