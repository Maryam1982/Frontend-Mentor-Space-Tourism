import { useState } from "react";
import Navbar from "./Navbar";

function Destination() {
  const [activeTab, setActiveTab] = useState("tab-moon");

  function handleTabClick(e) {
    setActiveTab(e.target.id);
  }
  return (
    <div className="destination">
      <Navbar />
      <div className="destination__content">
        <h2 className="destination__intro-heading">
          <span>01</span>PICK YOUR DESTINATION
        </h2>
        <img
          src={`assets/destination/image-${activeTab.split("-").at(1)}.png`}
          className="destination__intro-img"
        />

        <div className="destination__tab-control">
          <nav className="destination__tab-nav" role="tablist">
            <a
              href="#tab"
              aria-controls="destination-moon"
              id="tab-moon"
              role="tab"
              className={`destination__tab-nav-item ${
                activeTab === "tab-moon"
                  ? "destination__tab-nav-item--active"
                  : ""
              }`}
              onClick={handleTabClick}
            >
              MOON
            </a>
            <a
              href="#tab"
              aria-controls="destination-mars"
              id="tab-mars"
              role="tab"
              className={`destination__tab-nav-item ${
                activeTab === "tab-mars"
                  ? "destination__tab-nav-item--active"
                  : ""
              }`}
              onClick={handleTabClick}
            >
              MARS
            </a>
            <a
              href="#tab"
              aria-controls="destination-europa"
              id="tab-europa"
              role="tab"
              className={`destination__tab-nav-item ${
                activeTab === "tab-europa"
                  ? "destination__tab-nav-item--active"
                  : ""
              }`}
              onClick={handleTabClick}
            >
              EUROPA
            </a>
            <a
              href="#tab"
              aria-controls="destination-titan"
              id="tab-titan"
              role="tab"
              className={`destination__tab-nav-item ${
                activeTab === "tab-titan"
                  ? "destination__tab-nav-item--active"
                  : ""
              }`}
              onClick={handleTabClick}
            >
              TITAN
            </a>
          </nav>
          <section
            id="content"
            className="destination__tabpanels-container"
            aria-live="polite"
            role="region"
          >
            <article
              id="destination-moon"
              role="tabpanel"
              className={`destination__tabpanel ${
                activeTab === "tab-moon" ? "destination__tabpanel--active" : ""
              }`}
            >
              <h2 className="destination__tab-heading">Moon</h2>
              <p className="destination__tab-body">
                See our planet as you’ve never seen it before. A perfect
                relaxing trip away to help regain perspective and come back
                refreshed. While you’re there, take in some history by visiting
                the Luna 2 and Apollo 11 landing sites.
              </p>
              <hr className="destination__separator" />
              <div className="destination__info">
                <div className="destination__info-item">
                  <h3 className="destination__info-item-heading">
                    AVG. DISTANCE
                  </h3>
                  <p className="destination__info-item-body">384,400 km</p>
                </div>
                <div className="destination__info-item">
                  <h3 className="destination__info-item-heading">
                    Est. travel time
                  </h3>
                  <p className="destination__info-item-body">3 days</p>
                </div>
              </div>
            </article>
            <article
              id="destination-mars"
              role="tabpanel"
              className={`destination__tabpanel ${
                activeTab === "tab-mars" ? "destination__tabpanel--active" : ""
              }`}
            >
              <h2 className="destination__tab-heading">Mars</h2>
              <p className="destination__tab-body">
                Don’t forget to pack your hiking boots. You’ll need them to
                tackle Olympus Mons, the tallest planetary mountain in our solar
                system. It’s two and a half times the size of Everest!
              </p>
              <hr className="destination__separator" />
              <div className="destination__info">
                <div className="destination__info-item">
                  <h3 className="destination__info-item-heading">
                    AVG. DISTANCE
                  </h3>
                  <p className="destination__info-item-body">225 MIL. km</p>
                </div>
                <div className="destination__info-item">
                  <h3 className="destination__info-item-heading">
                    Est. travel time
                  </h3>
                  <p className="destination__info-item-body">9 months</p>
                </div>
              </div>
            </article>
            <article
              id="destination-europa"
              role="tabpanel"
              className={`destination__tabpanel ${
                activeTab === "tab-europa"
                  ? "destination__tabpanel--active"
                  : ""
              }`}
            >
              <h2 className="destination__tab-heading">EUROPA</h2>
              <p className="destination__tab-body">
                The smallest of the four Galilean moons orbiting Jupiter, Europa
                is a winter lover’s dream. With an icy surface, it’s perfect for
                a bit of ice skating, curling, hockey, or simple relaxation in
                your snug wintery cabin.
              </p>
              <hr className="destination__separator" />
              <div className="destination__info">
                <div className="destination__info-item">
                  <h3 className="destination__info-item-heading">
                    AVG. DISTANCE
                  </h3>
                  <p className="destination__info-item-body">628 MIL. km</p>
                </div>
                <div className="destination__info-item">
                  <h3 className="destination__info-item-heading">
                    Est. travel time
                  </h3>
                  <p className="destination__info-item-body">3 years</p>
                </div>
              </div>
            </article>
            <article
              id="destination-titan"
              role="tabpanel"
              className={`destination__tabpanel ${
                activeTab === "tab-titan" ? "destination__tabpanel--active" : ""
              }`}
            >
              <h2 className="destination__tab-heading">TITAN</h2>
              <p className="destination__tab-body">
                The only moon known to have a dense atmosphere other than Earth,
                Titan is a home away from home (just a few hundred degrees
                colder!). As a bonus, you get striking views of the Rings of
                Saturn.
              </p>
              <hr className="destination__separator" />
              <div className="destination__info">
                <div className="destination__info-item">
                  <h3 className="destination__info-item-heading">
                    AVG. DISTANCE
                  </h3>
                  <p className="destination__info-item-body">1.6 BIL. km</p>
                </div>
                <div className="destination__info-item">
                  <h3 className="destination__info-item-heading">
                    Est. travel time
                  </h3>
                  <p className="destination__info-item-body">7 years</p>
                </div>
              </div>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Destination;
