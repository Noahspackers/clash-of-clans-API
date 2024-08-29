import "./Body.scss";
import badge from "../../assets/clan_badge.png";
import divider from "../../assets/IMG_3954.png";
import Header from "../Header/Header";
import React, { useState, useEffect, useRef } from "react";
import { accessToken } from "../../service/accestoken";
import join from "../../assets/Join_us.png";
import twitch from "../../assets/twitch_logo.png";
import EndzoneBadge from "../../assets/Endzone_Badge.png";
import SecondzoneBadge from "../../assets/Secondzone_Badge.png";
import FirstzoneBadge from "../../assets/Firstzone_Badge.png";
import ThridzoneBadge from "../../assets/Thirdzone_Badge.png";
import headHunter from "../../assets/6474b3eb08754eaa413ead2db57f54a0.png";
import iceKing from "../../assets/55946d80facb0bc22d0a683281b3c5e7.png";
import merch from "../../assets/black0001-0250.mp4";
import eos from "../../assets/6022c2d380064afae217ae08cfb9af4e.png";
import hogRider from "../../assets/932180afb67b9883a6f3af7010750d3a.png";
import clanwar from "../../assets/859b00250690e39a9955234a99dbcdfa.png";
import raid from "../../assets/ffdb76769ddd14f61d428740888cb695.png";
import firstzone from "../../assets/7f82947a71f1bc7b224b3d304f20dd78.png";
import secondzone from "../../assets/57255027e1b6f5aaf3ea530b0ca50172.png";
import thirdzone from "../../assets/02529904522d87896a74d7ecc589d501.png";
import fourthzone from "../../assets/1f2945d2323b052ee63925bbcce71e83.png";
import cwlzone from "../../assets/ff2cd2a9bccf1407fccdf0ad66eea229.png";
import ghostzone from "../../assets/Ghostzone.png";

interface Body {}
interface ClanMember {
  tag: string;
  name: string;
  // other member properties
}
interface Clan {
  id: number;
  imageSrc: string;
  name: string;
  tag: string;
  description: string;
  levelRequirement: string;
}
const clanData: Clan[] = [
  {
    id: 1,
    imageSrc: EndzoneBadge,
    name: "Endzone",
    tag: "#2YPY9PLUU",
    description: "Hauptclan der Familie für Highlevel Spieler",
    levelRequirement: "Ab Rathaus lvl 16",
  },
  {
    id: 2,
    imageSrc: firstzone,
    name: "Firstzone",
    tag: "#2YQQ80QGL",
    description: "Clan für Clanstadt und Midlevel Spieler und Zweit Accounts",
    levelRequirement: "Ab Rathaus lvl 14",
  },
  {
    id: 3,
    imageSrc: secondzone,
    name: "Secondzone",
    tag: "#2QQPYRRCU",
    description: "Zweitclan der Familie für Highlevel Spieler",
    levelRequirement: "Ab Rathaus lvl 15",
  },
  {
    id: 4,
    imageSrc: thirdzone,
    name: "Thirdzone",
    tag: "#2YPY9PLUU",
    description: "Drittclan der Familie für lower Midlevel Spieler",
    levelRequirement: "Ab Rathaus lvl 12",
  },
  {
    id: 5,
    imageSrc: fourthzone,
    name: "Fourthzone",
    tag: "#2GUOV2VCR",
    description: "Viertclan der Familie für Lowlevel Spieler",
    levelRequirement: "Ab Rathaus lvl 1 – 14",
  },
  {
    id: 6,
    imageSrc: ghostzone,
    name: "Ghostzone",
    tag: "#2QQPYRRCU",
    description: "Gemixter Clankriegs Clan für erfahrene Spieler",
    levelRequirement: "Ab Rathaus lvl 16",
  },
  {
    id: 7,
    imageSrc: EndzoneBadge,
    name: "Endzone Event",
    tag: "#2QQPYRRCU",
    description: "Competitive Turniere und Events",
    levelRequirement: "Rathaus lvl je nach Event",
  },
  {
    id: 8,
    imageSrc: cwlzone,
    name: "Endzone CWL",
    tag: "#2QQPYRRCU",
    description: "CWL-Clan",
    levelRequirement: "Ab Rathaus lvl 16",
  },
];
const Body: React.FC<Body> = () => {
  const endzone = "#2YPY9PLUU";
  const scrollElementRef = useRef<HTMLDivElement>(null);
  async function myFunction() {
    const client = await fetch("/api").then((response) => response.json());
    console.log(client);
  }
  myFunction();
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === clanData.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle previous button click
  const prevItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? clanData.length - 1 : prevIndex - 1
    );
  };

  const clan = "https://link.clashofclans.com/de?action=OpenClanProfile&tag=";
  return (
    <div className="body" ref={scrollElementRef}>
      <Header />

      <div className="containerBody">
        <div className="FirstRow">
          <div className="FirstRow__left">
            <h1>Wir sind der Endzone Clan</h1>
            <p>
              Seit unserer Gründung 2021 sind wir auf über 300 Mitglieder in
              sechs Clans gewachsen.
              <br />
              <br />
              Bei uns findest du eine familiäre Atmosphäre und eine Bleibe für
              jeden Spieler – ob wettbewerbsorientiert oder Hobbyspieler.
              <br />
              <br />
              Das Endzone Team freut sich auf dich!
            </p>
          </div>
          <div className="FirstRow__right">
            <img src={iceKing} alt="iceKing" />
          </div>
        </div>
        <div className="SecondRow">
          <div className="carousel">
            <div className="carousel__content">
              <div className="carousel__item">
                <div className="clanWrapper">
                  <img
                    src={clanData[currentIndex].imageSrc}
                    alt={clanData[currentIndex].name}
                  />
                  <h3>{clanData[currentIndex].name}</h3>
                  <span>{clanData[currentIndex].tag}</span>
                  <p>{clanData[currentIndex].description}</p>
                  <p>{clanData[currentIndex].levelRequirement}</p>
                  <button>
                    <a href={clan + clanData[currentIndex].tag}>Clan Ansehen</a>
                  </button>
                </div>
              </div>
            </div>

            <div className="paginatorWrapper">
              <button className="carousel__button prev" onClick={prevItem}>
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <div className="carousel__pagination">
                {clanData.map((_, index) => (
                  <span
                    key={index}
                    className={`pagination__dot ${
                      index === currentIndex ? "active" : ""
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  ></span>
                ))}
              </div>
              <button className="carousel__button next" onClick={nextItem}>
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>

          <div className="SecondRow__top">
            <h1> Meet the family</h1>
          </div>
          <div className="SecondRow__middle">
            <div className="clanWrapper">
              <img src={EndzoneBadge} />
              <h3>Endzone</h3>
              <span>#2YPY9PLUU</span>
              <p>Hauptclan der Familie für Highlevel Spieler</p>
              <p>Ab Rathaus lvl 16</p>
              <button>Clan Ansehen</button>
            </div>
            <div className="clanWrapper">
              <img src={firstzone} />
              <h3>Firstzone</h3>
              <span>#2YQQ80QGL</span>
              <p>Clan für Clanstadt und Midlevel Spieler und Zweit Accounts</p>
              <p>Ab Rathaus lvl 14</p>
              <button>Clan Ansehen</button>
            </div>
            <div className="clanWrapper">
              <img src={secondzone} />
              <h3>Secondzone</h3>
              <span>#2QQPYRRCU</span>
              <p>Zweitclan der Familie für Highlevel Spieler</p>
              <p>Ab Rathaus lvl 15</p>
              <button>Clan Ansehen</button>
            </div>
            <div className="clanWrapper">
              <img src={thirdzone} />
              <h3>Thirdzone</h3>
              <span>#2YPY9PLUU</span>
              <p>Drittclan der Familie für lower Midlevel Spieler</p>
              <p>Ab Rathaus lvl 12</p>
              <button>Clan Ansehen</button>
            </div>
          </div>
          <div className="SecondRow__bottom">
            <div className="clanWrapper">
              <img src={fourthzone} />
              <h3>Fourthzone</h3>
              <span>#2GUOV2VCR</span>
              <p>Viertclan der Familie für Lowlevel Spieler</p>
              <p>Ab Rathaus lvl 1 – 14</p>
              <button>Clan Ansehen</button>
            </div>
            <div className="clanWrapper">
              <img src={ghostzone} />
              <h3>Ghostzone </h3>
              <span>#2QQPYRRCU</span>
              <p>Gemixter Clankriegs Clan für erfahrene Spieler</p>
              <p>Ab Rathaus lvl 16</p>
              <button>Clan Ansehen</button>
            </div>
            <div className="clanWrapper">
              <img src={EndzoneBadge} />
              <h3>Endzone Event </h3>
              <span>#2QQPYRRCU</span>
              <p>Competitive Turniere und Events</p>
              <p>Rathaus lvl je nach Event</p>
              <button>Clan Ansehen</button>
            </div>
            <div className="clanWrapper">
              <img src={cwlzone} />
              <h3>Endzone CWL </h3>
              <span>#2QQPYRRCU</span>
              <p>CWL-Clan</p>
              <p>Ab Rathaus lvl 16</p>
              <button>Clan Ansehen</button>
            </div>
          </div>
        </div>

        <div className="ThirdRow">
          <div className="ThirdRow__top">
            <img src={hogRider}></img>
            <h1> Regeln</h1>
          </div>
          <div className="ThirdRow__left">
            <img src={clanwar} />
            <h1>Clankrieg</h1>
            <p>
              Jeder der Grün oder an der Umfrage abgestimmt hat nimmt
              Automatisch am CW Teil.
              <br />
              <br />
              Jeder ist verpflichtet seinem Untermann die Clanburg im Krieg zu
              füllen.
              <br />
              <br /> Jeder ist dazu verpflichtet beide Hits zu nutzen um das
              Best mögliche Ergebnis zu erzielen.
            </p>
          </div>
          <div className="ThirdRow__right">
            <img src={raid} />
            <h1>Überfall </h1>
            <p>
              Am Freitag ist es jedem Clanmitglied gestattet in Firstzone die
              Überfallangriffe durchzuführen. <br />
              <br />
              Ab Samstag oder wenn in Firstzone die 50 Plätze erreicht werden
              dürfen die Angriffe in Endzone durchgeführt werden. <br />
              <br />
              Jedes Mitglied sollte hier versuchen so viel Gold wie möglich zu
              erbeuten. Daher empfehlen wir die Super Miner als Truppe zu
              nutzen.
            </p>
          </div>
        </div>

        <div className="FourthRow">
          <div className="FourthRow__left">
            <h1>Join Us</h1>
            <p>
              Schließe dich unserer lebendigen Community auf Discord an und
              erlebe den Endzone Clan hautnah – wir freuen uns auf dich!
            </p>
            <button>
              <a href="https://discord.com/invite/PZtZ4Pu6a4">
                Join unserem discord
              </a>
            </button>
            <button>
              <a href="https://www.twitch.tv/cheppersworld">
                Folg uns auf twitch
              </a>
            </button>
            <button>
              <a href="https://x.com/endzone_clan?lang=de">Folg uns auf X</a>
            </button>
          </div>
          <div className="FourthRow__right">
            <img src={headHunter} alt="headHunter" />
          </div>
        </div>
        <div className="FifthRow">
          <div className="FifthRow__left">
            <h1>Hol dir das Ultimative Clan-Merch</h1>
            <p>
              Zeige deine Zugehörigkeit zum Endzone Clan mit unseren exklusiven
              T-Shirts von unserem Partner N2 Apparel! Hohe Qualität und
              stylische Designs – perfekt für echte Fans und Spieler.
            </p>
            <button>Zu unserem Merch Shop</button>
          </div>
          <div className="FifthRow__right">
            <video src={merch} autoPlay loop muted></video>
          </div>
        </div>
        <div className="SixthRow">
          <div className="SixthRow__left">
            <img src={eos}></img>
          </div>
          <div className="SixthRow__right">
            <h1>Gemeinsam an die Spitze</h1>
            <p>
              Unser Bündnis strebt nach dem Höchsten und arbeitet hart daran,
              jede Season im Leaderboard aufzusteigen. Als Teil und Gründer des
              End of Season Projekts ★Best of EOS★ setzen wir neue Maßstäbe in
              Sachen Teamwork und Erfolg. Mit vereinten Kräften und einem klaren
              Fokus auf Erfolg, erreichen wir unsere Ziele.
            </p>
          </div>
        </div>
        <footer>
          <p>© Endzone Family</p>
          <p>Back to Top</p>
          <div>
            <p>
              <a href="https://discord.com/invite/PZtZ4Pu6a4">Discord</a>
            </p>
            <p>
              <a href="https://x.com/endzone_clan?lang=de">X</a>
            </p>
            <p>
              <a href="https://www.twitch.tv/cheppersworld">Twitch</a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Body;
