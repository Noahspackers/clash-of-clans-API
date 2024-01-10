import "./Body.scss";
import badge from "../../assets/clan_badge.png";
import divider from "../../assets/IMG_3954.png";
import Header from "../Header/Header";
import React, { useState, useEffect, useRef } from "react";
import { accessToken } from "../../service/proxy";
import join from "../../assets/Join_us.png";
import twitch from "../../assets/twitch_logo.png";

interface Body {}
interface ClanMember {
  tag: string;
  name: string;
  // other member properties
}

interface ClanData {
  tag: string;
  name: string;
  badgeUrls: {
    small: string;
    large: string;
    medium: string;
  };
  // other clan properties
  memberList: ClanMember[];
}
const Body: React.FC<Body> = () => {
  const scrollElementRef = useRef<HTMLDivElement>(null);
  const [data, setClansData] = useState<any>(null);
  const [data2, setClansData2] = useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api-endzone-clan.netlify.app/clans/endzone",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json", // Set your desired Content-Type here
              // Add any other headers if needed
              "Access-Control-Allow-Origin": "*",
            },
          }
        );
        const data = await response.json();

        setClansData(data);
      } catch (error) {
        console.error("Error fetching data from server:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData3 = async () => {
      try {
        const response = await fetch(
          "https://api-endzone-clan.netlify.app/clans/secondzone",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json", // Set your desired Content-Type here
              // Add any other headers if needed
              "Access-Control-Allow-Origin":
                "https://endzone-clan.de, https://main--api-endzone-clan.netlify.app/",
            },
          }
        );
        const data2 = await response.json();

        setClansData2(data2);
      } catch (error) {
        console.error("Error fetching data from server:", error);
      }
    };

    fetchData3();
  }, []);
  return (
    <div className="body" ref={scrollElementRef}>
      <Header />
      {data ? (
        data.map(() => (
          <div className="containerBody">
            <div className="wrapperDiscord" id="server">
              <a href="https://discord.gg/PZtZ4Pu6a4">
                <img src={join} alt="Join Us!" />
              </a>
              <a href="https://twitch.tv/cheppersworld">
                <img src={twitch} />
              </a>
            </div>

            <div className="container-clan">
              <div className="mainclan">
                {data && (
                  <>
                    <div className="clan_order" id="whereToGo">
                      <a
                        className="clan_name"
                        href={`https://link.clashofclans.com/de?action=OpenClanProfile&tag=${data.tag}`}
                      >
                        <p>{data.name}</p>
                      </a>
                      <a
                        className="clan_id"
                        href={`https://link.clashofclans.com/de?action=OpenClanProfile&tag=${data.tag}`}
                      >
                        <p>{data.tag}</p>
                      </a>

                      <img
                        src={data.badgeUrls.large}
                        className="badge"
                        alt="Logo"
                      />
                    </div>
                    <span className="madeFor">
                      <ul>
                        <li>Rathaus 16+ </li>
                        <li>Erfahrene und geistig reife Spieler</li>
                        <li>Freundliche und respektvolle Spieler</li>
                        <li>Täglich aktive Spieler und Spender</li>
                      </ul>
                    </span>
                  </>
                )}
              </div>
            </div>
            <div className="container-clan">
              <div className="firstzone">
                {data2 && (
                  <>
                    <div className="clan_order">
                      <a
                        className="clan_name"
                        href={`https://link.clashofclans.com/de?action=OpenClanProfile&tag=${data2.tag}`}
                      >
                        <p>{data2.name}</p>
                      </a>
                      <a
                        className="clan_id"
                        href={`https://link.clashofclans.com/de?action=OpenClanProfile&tag=${data2.tag}`}
                      >
                        <p>{data2.tag}</p>
                      </a>
                      <img
                        src={data2.badgeUrls.large}
                        className="badge"
                        alt="Logo"
                      />
                    </div>
                    <span className="madeFor">
                      <ul>
                        <li>Rathaus 12+ </li>
                        <li>Erfahrene und geistig reife Spieler</li>
                        <li>Freundliche und respektvolle Spieler</li>
                        <li>Täglich aktive Spieler und Spender</li>
                      </ul>
                    </span>
                  </>
                )}
              </div>
            </div>
            <div className="container-clan">
              <div className="secondclan">
                <div className="clan_order">
                  <a
                    className="clan_name"
                    href="https://link.clashofclans.com/de?action=OpenClanProfile&tag=2QQPYRRCU"
                  >
                    <p>Secondzone:</p>
                  </a>
                  <a
                    className="clan_id"
                    href="https://link.clashofclans.com/de?action=OpenClanProfile&tag=2QQPYRRCU"
                  >
                    <p>#2QQPYRRCU</p>
                  </a>
                  <img src={badge} className="badge" alt="Logo" />
                </div>

                <span className="madeFor">
                  <ul>
                    <li>Rathaus 12+ </li>
                    <li>Fortgeschrittene und geistig reife Spieler</li>
                    <li>Clankriegs und CWL begeisterte</li>
                    <li>Täglich aktive Spieler und Spender</li>
                    <li>Freundliche und respektvolle Spieler</li>
                  </ul>
                </span>
              </div>
            </div>
            <div className="container-clan">
              <div className="thirdzone">
                <div className="clan_order">
                  <a
                    className="clan_name"
                    href="https://link.clashofclans.com/de?action=OpenClanProfile&tag=2GCQLVPR9"
                  >
                    <p>Thirdzone:</p>
                  </a>
                  <a
                    className="clan_id"
                    href="https://link.clashofclans.com/de?action=OpenClanProfile&tag=2GCQLVPR9"
                  >
                    <p>#2GCQLVPR9</p>
                  </a>
                  <img src={badge} className="badge" alt="Logo" />
                </div>
                <span className="madeFor">
                  <ul>
                    <li>Rathaus 10+ </li>
                    <li>Fortgeschrittene und geistig reife Spieler</li>
                    <li>Clankriegs- und CWL-begeisterte</li>
                    <li>Täglich aktive Spieler und Spender</li>
                    <li>Freundliche und respektvolle Spieler</li>
                  </ul>
                </span>
              </div>
            </div>
            <div className="container-clan">
              <div className="fourthzone">
                <div className="clan_order">
                  <a
                    className="clan_name"
                    href="https://link.clashofclans.com/de?action=OpenClanProfile&tag=2GU0V2VCR"
                  >
                    <p>Fourthzone:</p>
                  </a>
                  <a
                    className="clan_id"
                    href="https://link.clashofclans.com/de?action=OpenClanProfile&tag=2GU0V2VCR"
                  >
                    <p>#2GU0V2VCR</p>
                  </a>
                  <img src={badge} className="badge" alt="Logo" />
                </div>
                <span className="madeFor">
                  <ul>
                    <li>Rathaus 8+ </li>
                    <li>Fortgeschrittene und geistig reife Spieler</li>
                    <li>Täglich aktive Spieler und Spender</li>
                    <li>Freundliche und respektvolle Spieler</li>
                  </ul>
                </span>
              </div>
            </div>
            <div className="container-clan">
              <div className="endzoneCWL">
                <div className="clan_order">
                  <a
                    className="clan_name"
                    href="https://link.clashofclans.com/de?action=OpenClanProfile&tag=2QYJVOCJ2"
                  >
                    <p>Endzone CWL:</p>
                  </a>
                  <a
                    className="clan_id"
                    href="https://link.clashofclans.com/de?action=OpenClanProfile&tag=2QYJVOCJ2"
                  >
                    <p>#2QYJVOCJ2</p>
                  </a>
                  <img src={badge} className="badge" alt="Logo" />
                </div>

                <span className="madeFor">
                  <ul>
                    <li>Rathaus 16 </li>
                    <li>Wettkampfsorientierte Clankriegsliga-Spieler</li>
                  </ul>
                </span>
              </div>
            </div>
            <div className="container-clan">
              <div className="eventzone">
                <div className="clan_order">
                  <a
                    className="clan_name"
                    href="https://link.clashofclans.com/de?action=OpenClanProfile&tag=2LPRVJUPL"
                  >
                    <p>Eventzone:</p>
                  </a>
                  <a
                    className="clan_id"
                    href="https://link.clashofclans.com/de?action=OpenClanProfile&tag=2LPRVJUPL"
                  >
                    <p>#2LPRVJUPL</p>
                  </a>
                  <img src={badge} className="badge" alt="Logo" />
                </div>

                <span className="madeFor">
                  <ul>
                    <li>Turniere</li>
                    <li>Community Events</li>
                  </ul>
                </span>
              </div>
            </div>
            <div className="logo">
              <img src={divider} alt="Logo" />
            </div>
            <div className="clan_desc_wrapper">
              <div className="clan_desc" id="who">
                <h2>Wer wir sind</h2>
                <p>
                  Wir sind der Endzone Clan.
                  <br /> Gegründet haben wir uns 2021 und sind seitdem stetig am
                  Wachsen. Inzwischen sind wir eine Clanfamilie aus insgesamt 5
                  Clans. Uns zeichnet eine familiäre Atmosphäre und unser
                  freundlicher und herzlicher Umgang mit einander aus. Wir
                  versuchen stets Zufriedenheit zu gewährleisten. <br /> <br />
                  Wir bieten eine Bleibe für jede Art von Spieler, ob Wettkampf
                  orientiert oder Hobbyspieler, hier kann sich jeder wie Zuhause
                  fühlen. Das Endzone Team freut sich auf dich!
                </p>
              </div>
            </div>
            <div className="wrapper">
              <div className="clan_rules" id="how">
                <h2>Regeln</h2>
                <span>
                  <ul>
                    <li>Respektvoller Umgang miteinander und untereinander!</li>
                    <li>
                      Keine Beleidigungen, Keine Diskriminierung, Keine
                      Rassismus, Keine Sexismus!{" "}
                      <p>Wer dagegen verstößt, wird gekickt!</p>
                    </li>
                    <li>
                      Aktiv sein & bleiben: Wenn du für längere Zeit nicht aktiv
                      bist, müssen wir dich leider aus dem Clan kicken.
                    </li>
                    <li>
                      Regeln für Clankriege beachten: Stelle dich auf
                      <span id="red"> Rot</span>, wenn du nicht im Clankrieg mit
                      spielen möchtest!
                    </li>
                    <li>
                      Wenn du deinen Status für Clankriege auf
                      <span id="green"> Grün </span> gesetzt hast, erwarten wir
                      auch das du deine Angriffe machst
                    </li>
                    <li>
                      Aktive Beteiligung: Clash of Clans ist ein Spiel, das erst
                      in Gruppen so richtig Spaß macht. Beteilige dich aktiv,
                      spende, chatte und hab Spaß mit deinen Clan-Mitgliedern!
                    </li>
                    <li>
                      Wenn du einen Angriff in der Clanstadt auf ein Dorf
                      gestartet hast, dann schließe alle deine Angriffe ohne
                      Zeitverzug ab – niemand soll warten müssen.
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div
          style={{
            color: "white",
            margin: "35vh 0",
            textAlign: "center",
          }}
        >
          "Wir sind grade offline! Besuche uns später einfach nochmal!"
        </div>
      )}
    </div>
  );
};

export default Body;
