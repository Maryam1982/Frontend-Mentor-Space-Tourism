import { useState, useRef, useEffect } from "react";
import Navbar from "./Navbar";

function Crew() {
  const [activeTab, setActiveTab] = useState("tab-douglas-hurley");
  const [hasScroll, setHasScroll] = useState(false);
  const verticalScroll = useRef(null);

  useEffect(() => {
    setHasScroll(
      !(
        verticalScroll.current.scrollHeight ===
        verticalScroll.current.clientHeight
      )
    );
  }, []);

  function handleTabClick(e) {
    setActiveTab(e.target.id);
  }

  return (
    <div
      className={`crew ${!hasScroll ? "heightFull" : ""}`}
      ref={verticalScroll}
    >
      <Navbar />
      <div className="crew__content">
        <h2 className="crew__intro-heading">
          <span>02</span>MEET YOUR CREW
        </h2>

        <img
          src={`assets/crew/image-${activeTab.split("-").at(1)}-${activeTab
            .split("-")
            .at(2)}.webp`}
          className="crew__intro-img"
        />

        <div className="crew__tab-control">
          <nav className="crew__tab-nav" role="tablist">
            <a
              href="#tab"
              aria-controls="crew-douglas-hurley"
              // id="tab-douglas-hurley"
              role="tab"
              className={`crew__tab-nav-item ${
                activeTab === "tab-douglas-hurley"
                  ? "crew__tab-nav-item--active"
                  : ""
              }`}
              onClick={handleTabClick}
            >
              <span id="tab-douglas-hurley"></span>
            </a>
            <a
              href="#tab"
              aria-controls="crew-mark-shuttleworth"
              // id="tab-mark-shuttleworth"
              role="tab"
              className={`crew__tab-nav-item ${
                activeTab === "tab-mark-shuttleworth"
                  ? "crew__tab-nav-item--active"
                  : ""
              }`}
              onClick={handleTabClick}
            >
              <span id="tab-mark-shuttleworth"></span>
            </a>
            <a
              href="#tab"
              aria-controls="crew-victor-glover"
              // id="tab-victor-glover"
              role="tab"
              className={`crew__tab-nav-item ${
                activeTab === "tab-victor-glover"
                  ? "crew__tab-nav-item--active"
                  : ""
              }`}
              onClick={handleTabClick}
            >
              <span id="tab-victor-glover"></span>
            </a>
            <a
              href="#tab"
              aria-controls="crew-anousheh-ansari"
              // id="tab-anousheh-ansari"
              role="tab"
              className={`crew__tab-nav-item ${
                activeTab === "tab-anousheh-ansari"
                  ? "crew__tab-nav-item--active"
                  : ""
              }`}
              onClick={handleTabClick}
            >
              <span id="tab-anousheh-ansari"></span>
            </a>
          </nav>
          <section
            id="content"
            className="crew__tabpanels-container"
            aria-live="polite"
            role="region"
          >
            <article
              id="crew-douglas-hurley"
              role="tabpanel"
              className={`crew__tabpanel ${
                activeTab === "tab-douglas-hurley"
                  ? "crew__tabpanel--active"
                  : ""
              }`}
            >
              <h3 className="crew__tab-sub-heading">Commander</h3>
              <h2 className="crew__tab-heading">Douglas Hurley</h2>
              <p className="crew__tab-body">
                Douglas Gerald Hurley is an American engineer, former Marine
                Corps pilot and former NASA astronaut. He launched into space
                for the third time as commander of Crew Dragon Demo-2.
              </p>
            </article>
            <article
              id="crew-mark-shuttleworth"
              role="tabpanel"
              className={`crew__tabpanel ${
                activeTab === "tab-mark-shuttleworth"
                  ? "crew__tabpanel--active"
                  : ""
              }`}
            >
              <h3 className="crew__tab-sub-heading">Mission Specialist </h3>
              <h2 className="crew__tab-heading">MARK SHUTTLEWORTH</h2>
              <p className="crew__tab-body">
                Mark Richard Shuttleworth is the founder and CEO of Canonical,
                the company behind the Linux-based Ubuntu operating system.
                Shuttleworth became the first South African to travel to space
                as a space tourist.
              </p>
            </article>
            <article
              id="crew-victor-glover"
              role="tabpanel"
              className={`crew__tabpanel ${
                activeTab === "tab-victor-glover"
                  ? "crew__tabpanel--active"
                  : ""
              }`}
            >
              <h3 className="crew__tab-sub-heading">PILOT </h3>
              <h2 className="crew__tab-heading">Victor Glover</h2>
              <p className="crew__tab-body">
                Pilot on the first operational flight of the SpaceX Crew Dragon
                to the International Space Station. Glover is a commander in the
                U.S. Navy where he pilots an F/A-18.He was a crew member of
                Expedition 64, and served as a station systems flight engineer.
              </p>
            </article>
            <article
              id="crew-anousheh-ansari"
              role="tabpanel"
              className={`crew__tabpanel ${
                activeTab === "tab-anousheh-ansari"
                  ? "crew__tabpanel--active"
                  : ""
              }`}
            >
              <h3 className="crew__tab-sub-heading">Flight Engineer </h3>
              <h2 className="crew__tab-heading">Anousheh Ansari</h2>
              <p className="crew__tab-body">
                Anousheh Ansari is an Iranian American engineer and co-founder
                of Prodea Systems. Ansari was the fourth self-funded space
                tourist, the first self-funded woman to fly to the ISS, and the
                first Iranian in space.
              </p>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Crew;
