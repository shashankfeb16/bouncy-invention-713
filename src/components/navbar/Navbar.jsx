import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <div className="logo">
          <img
            alt="logo"
            src="https://www.cricket.com/static/cricket.com.svg"
          />
        </div>

        <div className="cont">
          <div className="link">
            <div className="navdiv">
              <img
                alt="Fantasy"
                src="https://www.cricket.com/static/svgs/icons/frc.svg"
              />
              <Link to={`FantasyResearch`}>
                <p>Fantasy Research</p>
              </Link>
            </div>
          </div>

          <div className="link">
            <div className="navdiv">
              <img
                alt="criclytics"
                src="https://www.cricket.com/static/svgs/icons/criclytics-icon.svg"
              />
              <Link to={`/criclytics`}>
                <p>Criclytics</p>
              </Link>
            </div>
          </div>

          <div className="link">
            <div className="navdiv">
              <img
                alt="Schedule"
                src="https://www.cricket.com/static/svgs/icons/schedule-icon.svg"
              />
              <Link to={`/schedule`}>
                <p>Schedule</p>
              </Link>
            </div>
          </div>

          <div className="link">
            <div className="navdiv">
              <img
                alt="Series"
                src="https://www.cricket.com/static/svgs/icons/series-icon.svg"
              />
              <Link to={`/series`}>
                <p>Series</p>
              </Link>
            </div>
          </div>

          <div className="link">
            <div className="navdiv">
              <img
                alt="News"
                src="https://www.cricket.com/static/svgs/icons/news-and-articles-icon.svg"
              />

              <Link to={`/news`}>
                <p>News</p>
              </Link>
            </div>
          </div>

          <div className="link">
            <div className="navdiv">
              <img
                alt="Videos"
                src="https://www.cricket.com/static/svgs/icons/video-icon.svg"
              />
              <Link to={`/videos`}>
                <p>Videos</p>
              </Link>
            </div>
          </div>

          <div className="link">
            <div className="navdiv">
              <img
                alt="Players"
                src="https://www.cricket.com/static/svgs/icons/players-icon.svg"
              />
              <Link to={`/players`}>
                <p>Players</p>
              </Link>
            </div>
          </div>

          <div class="link">
            <div className="navdiv">
              <img
                alt="Teams"
                src="https://www.cricket.com/static/svgs/icons/teams-icon.svg"
              />
              <Link to={`/teams`}>
                <p>Teams</p>
              </Link>
            </div>
          </div>

          <div className="navdiv">
            <img
              alt="profile"
              src="https://www.cricket.com/static/svgs/icons/profile.svg"
            />
            <Link to={`/login`}>
              <p>Profile</p>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
