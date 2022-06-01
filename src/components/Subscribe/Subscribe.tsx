import { Button } from "react-bootstrap";
import appstore from "../../assets/img/appstore.svg";
import playstore from "../../assets/img/playstore.webp";
import netflix from "../../assets/img/netflix.png";
import hulu from "../../assets/img/hulu.png";
import vimeo from "../../assets/img/vimeo.png";
import hbo from "../../assets/img/hbo.png";
import plex from "../../assets/img/plex.png";
import showtime from "../../assets/img/showtime.png";

const Subscribe = ({ compType }: any) => {
  const streamPlts = [netflix, hulu, plex, vimeo, hbo, showtime];

  return (
    <>
    {compType !== 'platform' ? (
      <div className="container-fluid main-subs p-0">
        <div className="container ms-inner  d-flex justify-content-between align-items-center">
          <div className="w-50">
            {compType === "discover" && (
              <h4 className="mb-3">
                Get recommendations from all your favorite streaming services in
                one place
              </h4>
            )}
            {compType === "platform" && (
              <h4 className="mb-3">
                Browse, search, and watch TV & Movies from over 150 services,
                Netflix, Hulu, HBO, Disney+, Prime Video, Free Services and
                more!
              </h4>
            )}
            {compType === "device" && (
              <h4 className="mb-3">
                Keep track of all the TV shows and movies you want to watch in
                one list across all your devices
              </h4>
            )}
          </div>
          <div className="vr"></div>
          {compType === "discover" && (
            <div className="w-25">
              <Button size="lg">Discover latest movies</Button>
            </div>
          )}
          {compType === "device" && (
            <div className="w-25">
              <div className="d-flex justify-content-center align-item-center">
                <div className="w-50">
                  <img src={appstore} alt="appstore" />
                </div>
                <div className="w-50">
                  <img src={playstore} alt="playstore" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    ): (
        <div className="main-subs container-fluid p-0">
        <div className="container ms-inner d-flex justify-content-center align-items-center">
          {streamPlts.map((plt, index) => (
            <div className="w-50" key={index}>
              <img src={plt} alt="streamingplatform" className="msin-img"/>
            </div>
          ))}
        </div>
      </div>
    )}
      
    </>
  );
};

export default Subscribe;
