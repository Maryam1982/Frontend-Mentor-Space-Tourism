import { useState } from "react";
import Navbar from "./Navbar";

function Technology() {
  const [activeTab, setActiveTab] = useState("tab-launch-vehicle");
  let imgUrl;

  const mediaLandscape = window.matchMedia("(max-width: 62.125em)");
  if (mediaLandscape.matches)
    imgUrl = `assets/technology/image-${activeTab.split("-").at(1)}-${activeTab
      .split("-")
      .at(2)}-landscape.jpg`;
  else
    imgUrl = `assets/technology/image-${activeTab.split("-").at(1)}-${activeTab
      .split("-")
      .at(2)}-portrait.jpg`;

  function handleTabClick(e) {
    setActiveTab(e.target.id);
  }
  return (
    <div className="technology">
      <Navbar />
      <div className="technology__content">
        <h2 className="technology__intro-heading">
          <span>03</span>SPACE LAUNCH 101
        </h2>

        <img src={imgUrl} className="technology__intro-img" />

        <div className="technology__tab-control">
          <nav className="technology__tab-nav" role="tablist">
            <a
              href="#tab"
              aria-controls="technology-launch-vehicle"
              role="tab"
              className={`technology__tab-nav-item ${
                activeTab === "tab-launch-vehicle"
                  ? "technology__tab-nav-item--active"
                  : ""
              }`}
              onClick={handleTabClick}
            >
              <span id="tab-launch-vehicle">1</span>
            </a>
            <a
              href="#tab"
              aria-controls="technology-space-capsule"
              role="tab"
              className={`technology__tab-nav-item ${
                activeTab === "tab-space-capsule"
                  ? "technology__tab-nav-item--active"
                  : ""
              }`}
              onClick={handleTabClick}
            >
              <span id="tab-space-capsule">2</span>
            </a>
            <a
              href="#tab"
              aria-controls="technology-space-port"
              role="tab"
              className={`technology__tab-nav-item ${
                activeTab === "tab-space-port"
                  ? "technology__tab-nav-item--active"
                  : ""
              }`}
              onClick={handleTabClick}
            >
              <span id="tab-space-port">3</span>
            </a>
          </nav>
          <section
            id="content"
            className="technology__tabpanels-container"
            aria-live="polite"
            role="region"
          >
            <article
              id="technology-launch-vehicle"
              role="tabpanel"
              className={`technology__tabpanel ${
                activeTab === "tab-launch-vehicle"
                  ? "technology__tabpanel--active"
                  : ""
              }`}
            >
              <h3 className="technology__tab-sub-heading">THE TERMINOLOGY…</h3>
              <h2 className="technology__tab-heading">LAUNCH VEHICLE</h2>
              <p className="technology__tab-body">
                A launch vehicle or carrier rocket is a rocket-propelled vehicle
                used to carry a payload from Earth&apos;s surface to space,
                usually to Earth orbit or beyond. Our WEB-X carrier rocket is
                the most powerful in operation. Standing 150 metres tall,
                it&apos;s quite an awe-inspiring sight on the launch pad!
              </p>
            </article>
            <article
              id="technology-space-capsule"
              role="tabpanel"
              className={`technology__tabpanel ${
                activeTab === "tab-space-capsule"
                  ? "technology__tabpanel--active"
                  : ""
              }`}
            >
              <h3 className="technology__tab-sub-heading">THE TERMINOLOGY…</h3>
              <h2 className="technology__tab-heading">SPACEPORT</h2>
              <p className="technology__tab-body">
                A spaceport or cosmodrome is a site for launching (or receiving)
                spacecraft, by analogy to the seaport for ships or airport for
                aircraft. Based in the famous Cape Canaveral, our spaceport is
                ideally situated to take advantage of the Earth’s rotation for
                launch.
              </p>
            </article>
            <article
              id="technology-space-port"
              role="tabpanel"
              className={`technology__tabpanel ${
                activeTab === "tab-space-port"
                  ? "technology__tabpanel--active"
                  : ""
              }`}
            >
              <h3 className="technology__tab-sub-heading">THE TERMINOLOGY… </h3>
              <h2 className="technology__tab-heading">SPACE CAPSULE</h2>
              <p className="technology__tab-body">
                A space capsule is an often-crewed spacecraft that uses a
                blunt-body reentry capsule to reenter the Earth&apos;s
                atmosphere without wings. Our capsule is where you&apos;ll spend
                your time during the flight. It includes a space gym, cinema,
                and plenty of other activities to keep you entertained.
              </p>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Technology;
