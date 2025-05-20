import "./Body.scss";
import badge from "../../assets/clan_badge.png";
import divider from "../../assets/IMG_3954.png";
import Header from "../Header/Header";
import React, { useState, useEffect, useRef } from "react";
import { accessToken } from "../../service/accestoken";
import join from "../../assets/Join_us.png";
import twitch from "../../assets/twitch_logo.png";
import EndzoneBadge from "../../assets/Endzone_Badge.png";
import headHunter from "../../assets/6474b3eb08754eaa413ead2db57f54a0.png";
import iceKing from "../../assets/55946d80facb0bc22d0a683281b3c5e7.png";
import merch from "../../assets/black0001-0250.mp4";
import eos from "../../assets/Best_of_EOS_FInal.png";
import hogRider from "../../assets/932180afb67b9883a6f3af7010750d3a.png";
import clanwar from "../../assets/859b00250690e39a9955234a99dbcdfa.png";
import raids from "../../assets/ffdb76769ddd14f61d428740888cb695.png";
import firstzone from "../../assets/7f82947a71f1bc7b224b3d304f20dd78.png";
import secondzone from "../../assets/57255027e1b6f5aaf3ea530b0ca50172.png";
import thirdzone from "../../assets/02529904522d87896a74d7ecc589d501.png";
import fourthzone from "../../assets/1f2945d2323b052ee63925bbcce71e83.png";
import cwlzone from "../../assets/ff2cd2a9bccf1407fccdf0ad66eea229.png";
import ghostzone from "../../assets/Ghostzone.png";
import alphazone from "../../assets/Alphazone.png";
import betazone from "../../assets/Betazone.png";
import sigmazone from "../../assets/Sigmazone.png";
import f2p from "../../assets/Endzone_F2P.png";
import axios from "axios";
import { response } from "express";
import ClanData from "../ClanData/ClanData";
import {
  fetchPosts,
  fetchClans,
  fetchGeneralClanInfo,
  Post,
  ClanContent,
  GeneralClanInfo,
} from "../../sanityApi";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

const API_KEY = process.env.REACT_APP_COC_API_KEY;

interface Body {}
interface ApiClan {
  tag: string;
  name: string;
  type: string;
  description: string;
  location: {
    id: number;
    name: string;
    isCountry: boolean;
    countryCode: string;
  };
  isFamilyFriendly: boolean;
  badgeUrls: {
    small: string;
    medium: string;
    large: string;
  };
}
interface RaidData {
  items: RaidItem[];
}

interface RaidItem {
  state: string;
  startTime: string; // ISO-8601 format
  endTime: string; // ISO-8601 format
  capitalTotalLoot: number;
  raidsCompleted: number;
  totalAttacks: number;
  enemyDistrictsDestroyed: number;
  offensiveReward: number;
  defensiveReward: number;
  members: RaidMember[];
}

interface RaidMember {
  tag: string;
  name: string;
  attacks: number;
  attackLimit: number;
  bonusAttackLimit: number;
  capitalResourcesLooted: number;
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
    id: 0,
    imageSrc: EndzoneBadge,
    name: "Endzone",
    tag: "#2YPY9PLUU",
    description: "Hauptclan der Familie für Highlevel Spieler",
    levelRequirement: "",
  },
  {
    id: 1,
    imageSrc: firstzone,
    name: "Firstzone",
    tag: "#2YQQ80QGL",
    description: "Clan für Clanstadt und Midlevel Spieler und Zweit Accounts",
    levelRequirement: "Ab Rathaus lvl 14",
  },
  {
    id: 2,
    imageSrc: secondzone,
    name: "Secondzone",
    tag: "#2QQPYRRCU",
    description: "Zweitclan der Familie für Highlevel Spieler",
    levelRequirement: "Ab Rathaus lvl 15",
  },
  {
    id: 3,
    imageSrc: thirdzone,
    name: "Thirdzone",
    tag: "#2GCQLVPR9",
    description: "Drittclan der Familie für lower Midlevel Spieler",
    levelRequirement: "Ab Rathaus lvl 12",
  },
  {
    id: 4,
    imageSrc: fourthzone,
    name: "Fourthzone",
    tag: "#2GUOV2VCR",
    description: "Viertclan der Familie für Lowlevel Spieler",
    levelRequirement: "Ab Rathaus lvl 1 – 14",
  },
  {
    id: 5,
    imageSrc: ghostzone,
    name: "Ghostzone",
    tag: "#JPLG8V2C",
    description: "Gemixter Clankriegs Clan für erfahrene Spieler",
    levelRequirement: "Ab Rathaus lvl 16",
  },
  {
    id: 6,
    imageSrc: cwlzone,
    name: "Endzone CWL",
    tag: "#2QYJVOCJ2",
    description: "Kompetitiver CWL-Clan",
    levelRequirement: "Ab Rathaus lvl 16",
  },
  {
    id: 7,
    imageSrc: f2p,
    name: "Endzone CWL",
    tag: "#2QYJVOCJ2",
    description: "Kompetitiver CWL-Clan",
    levelRequirement: "Ab Rathaus lvl 16",
  },
  {
    id: 8,
    imageSrc: alphazone,
    name: "Endzone CWL",
    tag: "#2QYJVOCJ2",
    description: "Kompetitiver CWL-Clan",
    levelRequirement: "Ab Rathaus lvl 16",
  },
  {
    id: 9,
    imageSrc: betazone,
    name: "Endzone CWL",
    tag: "#2QYJVOCJ2",
    description: "Kompetitiver CWL-Clan",
    levelRequirement: "Ab Rathaus lvl 16",
  },

  {
    id: 10,
    imageSrc: sigmazone,
    name: "Endzone Event",
    tag: "#2LUUV9UUP",
    description: "Kompetitive Turniere und Events",
    levelRequirement: "Rathaus lvl je nach Event",
  },
  {
    id: 11,
    imageSrc: EndzoneBadge,
    name: "Endzone Event",
    tag: "#2LUUV9UUP",
    description: "Kompetitive Turniere und Events",
    levelRequirement: "Rathaus lvl je nach Event",
  },
];
interface ClanInfoProps {
  tag: string; // Tag ist vom Typ string
}
const Body = ({}: { clanDaten: any }) => {
  const scrollElementRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const [endzone, setEndzone] = useState<ApiClan | null>(null);
  const [firstzone, setFirstzone] = useState<ApiClan | null>(null);
  const [secondzone, setSecondzone] = useState<ApiClan | null>(null);
  const [thirdzone, setThirdzone] = useState<ApiClan | null>(null);
  const [fourthzone, setFourthzone] = useState<ApiClan | null>(null);
  const [ghostzone, setGhostzone] = useState<ApiClan | null>(null);
  const [endzoneEvent, setEndzoneEvent] = useState<ApiClan | null>(null);
  const [endzoneCWL, setEndzoneCWL] = useState<ApiClan | null>(null);
  const [endzoneF2P, setEndzoneF2P] = useState<ApiClan | null>(null);
  const [alphazone, setAlphazone] = useState<ApiClan | null>(null);
  const [betazone, setBetazone] = useState<ApiClan | null>(null);
  const [sigmazone, setSigmazone] = useState<ApiClan | null>(null);

  const [endzoneRaid, setEndzoneRaid] = useState<RaidData | null>(null);
  const [firstzoneRaid, setFirstzoneRaid] = useState<RaidData | null>(null);
  const [secondzoneRaid, setSecondzoneRaid] = useState<RaidData | null>(null);
  const [thirdzoneRaid, setThirdzoneRaid] = useState<RaidData | null>(null);
  const [ghostzoneRaid, setGhostzoneRaid] = useState<RaidData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchClanData = async (action: string, clanTag: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://endzone-clan.de/${action}/${clanTag}`
      );
      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
      if (action === "clan" && clanTag === "endzone") {
        const data: ApiClan = await response.json();

        setEndzone(data);
      } else if (action === "clan" && clanTag === "firstzone") {
        const data: ApiClan = await response.json();

        setFirstzone(data);
      } else if (action === "clan" && clanTag === "secondzone") {
        const data: ApiClan = await response.json();

        setSecondzone(data);
      } else if (action === "clan" && clanTag === "thirdzone") {
        const data: ApiClan = await response.json();
        setThirdzone(data);
      } else if (action === "clan" && clanTag === "fourthzone") {
        const data: ApiClan = await response.json();
        console.log("Clan-Daten:", data);
        setFourthzone(data);
      } else if (action === "clan" && clanTag === "ghostzone") {
        const data: ApiClan = await response.json();

        setGhostzone(data);
      } else if (action === "clan" && clanTag === "endzoneEvent") {
        const data: ApiClan = await response.json();

        setEndzoneEvent(data);
      } else if (action === "clan" && clanTag === "endzoneCWL") {
        const data: ApiClan = await response.json();

        setEndzoneCWL(data);
      } else if (action === "clan" && clanTag === "endzoneF2P") {
        const data: ApiClan = await response.json();

        setEndzoneF2P(data);
      } else if (action === "clan" && clanTag === "alphazone") {
        const data: ApiClan = await response.json();

        setAlphazone(data);
      } else if (action === "clan" && clanTag === "betazone") {
        const data: ApiClan = await response.json();

        setBetazone(data);
      } else if (action === "clan" && clanTag === "sigmazone") {
        const data: ApiClan = await response.json();

        setSigmazone(data);
      } else if (action === "raid" && clanTag === "endzone") {
        const raid: RaidData = await response.json();

        setEndzoneRaid(raid);
      } else if (action === "raid" && clanTag === "firstzone") {
        const raid: RaidData = await response.json();

        setFirstzoneRaid(raid);
      } else if (action === "raid" && clanTag === "secondzone") {
        const raid: RaidData = await response.json();

        setSecondzoneRaid(raid);
      } else if (action === "raid" && clanTag === "thirdzone") {
        const raid: RaidData = await response.json();

        setThirdzoneRaid(raid);
      } else if (action === "raid" && clanTag === "ghostzone") {
        const raid: RaidData = await response.json();

        setGhostzoneRaid(raid);
      }
    } catch (error: any) {
      console.error("Fehler beim Abrufen der Clan-Daten:", error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchClanData("raid", "secondzone");
  }, []);
  useEffect(() => {
    fetchClanData("clan", "endzone");
  }, []);
  useEffect(() => {
    fetchClanData("clan", "firstzone");
  }, []);
  useEffect(() => {
    fetchClanData("clan", "secondzone");
  }, []);
  useEffect(() => {
    fetchClanData("clan", "thirdzone");
  }, []);
  useEffect(() => {
    fetchClanData("clan", "fourthzone");
  }, []);
  useEffect(() => {
    fetchClanData("clan", "ghostzone");
  }, []);
  useEffect(() => {
    fetchClanData("clan", "endzoneEvent");
  }, []);
  useEffect(() => {
    fetchClanData("clan", "endzoneCWL");
  }, []);
  useEffect(() => {
    fetchClanData("clan", "alphazone");
  }, []);
  useEffect(() => {
    fetchClanData("clan", "betazone");
  }, []);
  useEffect(() => {
    fetchClanData("clan", "sigmazone");
  }, []);
  useEffect(() => {
    fetchClanData("clan", "endzoneF2P");
  }, []);
  useEffect(() => {
    fetchClanData("raid", "endzone");
  }, []);
  useEffect(() => {
    fetchClanData("raid", "firstzone");
  }, []);
  useEffect(() => {
    fetchClanData("raid", "thirdzone");
  }, []);
  useEffect(() => {
    fetchClanData("raid", "ghostzone");
  }, []);

  const [posts, setPosts] = useState<Post[]>([]);
  const [clanContents, setClanContents] = useState<ClanContent[]>([]);
  const [clanInfos, setClanInfos] = useState<GeneralClanInfo[]>([]);

  useEffect(() => {
    fetchPosts().then(setPosts);
  }, []);

  useEffect(() => {
    fetchClans().then(setClanContents);
  }, []);

  useEffect(() => {
    fetchGeneralClanInfo().then(setClanInfos);
  }, []);
  const nextItem = () => {
    setCurrentIndex((prev) =>
      prev === clanContents.length - 1 ? 0 : prev + 1
    );
  };

  const prevItem = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? clanContents.length - 1 : prev - 1
    );
  };

  const currentClan = clanContents[currentIndex];

  const order = [
    "Endzone",
    "Firstzone",
    "Secondzone",
    "Thirdzone",
    "Fourthzone",
    "Ghostzone",
    "Endzone CWL",
    "Endzone F2P",
    "Alphazone",
    "Betazone",
    "Sigmazone",
    "Endzone Event",
  ];

  const sortedClans = clanContents.sort((a, b) => {
    return order.indexOf(a.name) - order.indexOf(b.name);
  });

  const clan = "https://link.clashofclans.com/de?action=OpenClanProfile&tag=";
  return (
    <div className="body" ref={scrollElementRef}>
      <Header />

      <div className="containerBody">
        <div id="about-us" className="FirstRow">
          <div className="FirstRow__left">
            <h1>Wir sind der Endzone Clan</h1>
            {clanInfos && clanInfos.length > 0 && (
              <PortableText value={clanInfos[2].description} />
            )}
          </div>
          <div className="FirstRow__right">
            <img src={iceKing} alt="iceKing" />
          </div>
        </div>
        <div id="clans" className="SecondRow">
          <div className="carousel">
            <div className="carousel__content">
              <div className="carousel__item"></div>
            </div>

            <div className="clanWrapper">
              {clanContents && clanContents.length > 0 && (
                <>
                  <img
                    src={clanData[currentIndex].imageSrc}
                    alt={clanData[currentIndex].name}
                  />
                  <h3>{clanContents[currentIndex].name}</h3>
                  <span>{clanContents[currentIndex].clanTag}</span>
                  <PortableText
                    value={clanContents[currentIndex].description}
                  />
                  <p>{clanContents[currentIndex].levelRequirement}</p>

                  <div className="paginatorWrapper">
                    <button
                      className="carousel__button prev"
                      onClick={prevItem}
                    >
                      <i className="fa-solid fa-chevron-left"></i>
                    </button>

                    <div className="carousel__pagination">
                      {clanContents.map((_, index) => (
                        <span
                          key={index}
                          className={`pagination__dot ${
                            index === currentIndex ? "active" : ""
                          }`}
                          onClick={() => setCurrentIndex(index)}
                        ></span>
                      ))}
                    </div>

                    <button
                      className="carousel__button next"
                      onClick={nextItem}
                    >
                      <i className="fa-solid fa-chevron-right"></i>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="SecondRow__top">
            <h1> Meet the family</h1>
          </div>
          <div className="SecondRow__middle">
            <div className="clanWrapper">
              <img src={clanData[0].imageSrc} alt={""} />

              <img
                className="clan-badge"
                src={endzone?.badgeUrls.medium}
                alt="Clan Badge"
              />
              {clanContents && clanContents.length > 0 && (
                <>
                  <h3>{clanContents[0].name}</h3>
                  <span>{clanContents[0].clanTag}</span>
                  <PortableText value={clanContents[0].description} />
                  <p>{clanContents[0].levelRequirement}</p>
                  <button>
                    <a href={clan + clanContents[0].clanTag} target="_blank">
                      Clan Ansehen
                    </a>
                  </button>
                </>
              )}
            </div>
            <div className="clanWrapper">
              <img src={clanData[1].imageSrc} alt={clanData[1].name} />
              <img
                className="clan-badge"
                src={firstzone?.badgeUrls.medium}
                alt="Clan Badge"
              />
              {clanContents && clanContents.length > 0 && (
                <>
                  <h3>{clanContents[1].name}</h3>
                  <span>{clanContents[1].clanTag}</span>
                  <PortableText value={clanContents[1].description} />
                  <p>{clanContents[1].levelRequirement}</p>
                  <button>
                    <a href={clan + clanContents[1].clanTag} target="_blank">
                      Clan Ansehen
                    </a>
                  </button>
                </>
              )}
            </div>
            <div className="clanWrapper">
              <img src={clanData[2].imageSrc} alt={clanData[2].name} />

              <img
                className="clan-badge"
                src={secondzone?.badgeUrls.medium}
                alt="Clan Badge"
              />
              {clanContents && clanContents.length > 0 && (
                <>
                  <h3>{clanContents[2].name}</h3>
                  <span>{clanContents[2].clanTag}</span>
                  <PortableText value={clanContents[2].description} />
                  <p>{clanContents[2].levelRequirement}</p>
                  <button>
                    <a href={clan + clanContents[2].clanTag} target="_blank">
                      Clan Ansehen
                    </a>
                  </button>
                </>
              )}
            </div>
            <div className="clanWrapper">
              <img src={clanData[3].imageSrc} alt={clanData[3].name} />
              <img
                className="clan-badge"
                src={thirdzone?.badgeUrls.medium}
                alt="Clan Badge"
              />
              {clanContents && clanContents.length > 0 && (
                <>
                  <h3>{clanContents[3].name}</h3>
                  <span>{clanContents[3].clanTag}</span>
                  <PortableText value={clanContents[3].description} />
                  <p>{clanContents[3].levelRequirement}</p>
                  <button>
                    <a href={clan + clanContents[3].clanTag} target="_blank">
                      Clan Ansehen
                    </a>
                  </button>
                </>
              )}
            </div>
          </div>
          <div className="SecondRow__bottom">
            <div className="clanWrapper">
              <img src={clanData[4].imageSrc} alt={clanData[4].name} />
              <img
                className="clan-badge"
                src={fourthzone?.badgeUrls.medium}
                alt="Clan Badge"
              />
              {clanContents && clanContents.length > 0 && (
                <>
                  <h3>{clanContents[4].name}</h3>
                  <span>{clanContents[4].clanTag}</span>
                  <PortableText value={clanContents[4].description} />
                  <p>{clanContents[4].levelRequirement}</p>
                  <button>
                    <a href={clan + clanContents[4].clanTag} target="_blank">
                      Clan Ansehen
                    </a>
                  </button>
                </>
              )}
            </div>
            <div className="clanWrapper">
              <img src={clanData[5].imageSrc} alt={clanData[5].name} />
              <img
                className="clan-badge"
                src={ghostzone?.badgeUrls.medium}
                alt="Clan Badge"
              />
              {clanContents && clanContents.length > 0 && (
                <>
                  <h3>{clanContents[5].name}</h3>
                  <span>{clanContents[5].clanTag}</span>
                  <PortableText value={clanContents[5].description} />
                  <p>{clanContents[5].levelRequirement}</p>
                  <button>
                    <a href={clan + clanContents[5].clanTag} target="_blank">
                      Clan Ansehen
                    </a>
                  </button>
                </>
              )}
            </div>
            <div className="clanWrapper">
              <img src={clanData[6].imageSrc} alt={clanData[6].name} />
              <img
                className="clan-badge"
                src={endzoneCWL?.badgeUrls.medium}
                alt="Clan Badge"
              />
              {clanContents && clanContents.length > 0 && (
                <>
                  <h3>{clanContents[6].name}</h3>
                  <span>{clanContents[6].clanTag}</span>
                  <PortableText value={clanContents[6].description} />
                  <p>{clanContents[6].levelRequirement}</p>
                  <button>
                    <a href={clan + clanContents[6].clanTag} target="_blank">
                      Clan Ansehen
                    </a>
                  </button>
                </>
              )}
            </div>
            <div className="clanWrapper">
              <img src={clanData[7].imageSrc} alt={clanData[7].name} />
              <img
                className="clan-badge"
                src={endzoneF2P?.badgeUrls.medium}
                alt="Clan Badge"
              />
              {clanContents && clanContents.length > 0 && (
                <>
                  <h3>{clanContents[7].name}</h3>
                  <span>{clanContents[7].clanTag}</span>
                  <PortableText value={clanContents[7].description} />
                  <p>{clanContents[7].levelRequirement}</p>
                  <button>
                    <a href={clan + clanContents[5].clanTag} target="_blank">
                      Clan Ansehen
                    </a>
                  </button>
                </>
              )}
            </div>
          </div>
          <div className="SecondRow__under-bottom">
            <div className="clanWrapper">
              <img src={clanData[8].imageSrc} alt={clanData[8].name} />
              <img
                className="clan-badge"
                src={alphazone?.badgeUrls.medium}
                alt="Clan Badge"
              />
              {clanContents && clanContents.length > 0 && (
                <>
                  <h3>{clanContents[8].name}</h3>
                  <span>{clanContents[8].clanTag}</span>
                  <PortableText value={clanContents[8].description} />
                  <p>{clanContents[8].levelRequirement}</p>
                  <button>
                    <a href={clan + clanContents[8].clanTag} target="_blank">
                      Clan Ansehen
                    </a>
                  </button>
                </>
              )}
            </div>
            <div className="clanWrapper">
              <img src={clanData[9].imageSrc} alt={clanData[9].name} />
              <img
                className="clan-badge"
                src={betazone?.badgeUrls.medium}
                alt="Clan Badge"
              />
              {clanContents && clanContents.length > 0 && (
                <>
                  <h3>{clanContents[9].name}</h3>
                  <span>{clanContents[9].clanTag}</span>
                  <PortableText value={clanContents[9].description} />
                  <p>{clanContents[9].levelRequirement}</p>
                  <button>
                    <a href={clan + clanContents[9].clanTag} target="_blank">
                      Clan Ansehen
                    </a>
                  </button>
                </>
              )}
            </div>
            <div className="clanWrapper">
              <img src={clanData[10].imageSrc} alt={clanData[10].name} />
              <img
                className="clan-badge"
                src={endzoneCWL?.badgeUrls.medium}
                alt="Clan Badge"
              />
              {clanContents && clanContents.length > 0 && (
                <>
                  <h3>{clanContents[10].name}</h3>
                  <span>{clanContents[10].clanTag}</span>
                  <PortableText value={clanContents[10].description} />
                  <p>{clanContents[10].levelRequirement}</p>
                  <button>
                    <a href={clan + clanContents[10].clanTag} target="_blank">
                      Clan Ansehen
                    </a>
                  </button>
                </>
              )}
            </div>
            <div className="clanWrapper">
              <img src={clanData[11].imageSrc} alt={clanData[11].name} />
              <img
                className="clan-badge"
                src={endzoneEvent?.badgeUrls.medium}
                alt="Clan Badge"
              />
              {clanContents && clanContents.length > 0 && (
                <>
                  <h3>{clanContents[11].name}</h3>
                  <span>{clanContents[11].clanTag}</span>
                  <PortableText value={clanContents[11].description} />
                  <p>{clanContents[11].levelRequirement}</p>
                  <button>
                    <a href={clan + clanContents[11].clanTag} target="_blank">
                      Clan Ansehen
                    </a>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
        <div id="raid-weekend">
          <h1>Raid-Weekend Übersicht</h1>
          <div className="raid-wrapper">
            <div className="clanWrapper">
              <img src={clanData[0].imageSrc} alt={clanData[0].name} />

              <h3>{endzone?.name}</h3>
              <span>{endzone?.tag}</span>
              <p
                style={{
                  color:
                    (endzoneRaid?.items?.[0]?.members?.length &&
                      endzoneRaid.items[0].members.length >= 50) ||
                    endzoneRaid?.items?.[0]?.totalAttacks === 0
                      ? "red"
                      : "green",
                }}
              >
                {endzoneRaid?.items?.[0] ? (
                  endzoneRaid.items[0].totalAttacks === 0 ? (
                    <span style={{ color: "red" }}>Raid ist nicht aktiv</span>
                  ) : endzoneRaid.items[0].members?.length >= 50 ? (
                    <span style={{ color: "red" }}>Voll</span>
                  ) : (
                    <>
                      {endzoneRaid.items[0].members?.length} / 50{" "}
                      <span>Plätze belegt</span>
                    </>
                  )
                ) : (
                  <span style={{ color: "red" }}>Raid ist nicht aktiv</span>
                )}
              </p>

              <button>
                <a href={clan + endzone?.tag} target="_blank">
                  Jetzt angreifen
                </a>
              </button>
            </div>
            <div className="clanWrapper">
              <img src={clanData[1].imageSrc} alt={clanData[1].name} />
              <h3>{firstzone?.name}</h3>
              <span>{firstzone?.tag}</span>
              <p
                style={{
                  color:
                    (firstzoneRaid?.items?.[0]?.members?.length &&
                      firstzoneRaid.items[0].members.length >= 50) ||
                    firstzoneRaid?.items?.[0]?.totalAttacks === 0
                      ? "red"
                      : "green",
                }}
              >
                {firstzoneRaid?.items?.[0] ? (
                  firstzoneRaid.items[0].totalAttacks === 0 ? (
                    <span style={{ color: "red" }}>Raid ist nicht aktiv</span>
                  ) : firstzoneRaid.items[0].members?.length >= 50 ? (
                    <span style={{ color: "red" }}>Voll</span>
                  ) : (
                    <>
                      {firstzoneRaid.items[0].members?.length} / 50{" "}
                      <span>Plätze belegt</span>
                    </>
                  )
                ) : (
                  <span style={{ color: "red" }}>Raid ist nicht aktiv</span>
                )}
              </p>

              <button>
                <a href={clan + firstzone?.tag} target="_blank">
                  Jetzt angreifen
                </a>
              </button>
            </div>
            <div className="clanWrapper">
              <img src={clanData[2].imageSrc} alt={clanData[2].name} />

              <h3>{secondzone?.name}</h3>
              <span>{secondzone?.tag}</span>
              <p
                style={{
                  color:
                    (secondzoneRaid?.items?.[0]?.members?.length &&
                      secondzoneRaid.items[0].members.length >= 50) ||
                    secondzoneRaid?.items?.[0]?.totalAttacks === 0
                      ? "red"
                      : "green",
                }}
              >
                {secondzoneRaid?.items?.[0] ? (
                  secondzoneRaid.items[0].totalAttacks === 0 ? (
                    <span style={{ color: "red" }}>Raid ist nicht aktiv</span>
                  ) : secondzoneRaid.items[0].members?.length >= 50 ? (
                    <span style={{ color: "red" }}>Voll</span>
                  ) : (
                    <>
                      {secondzoneRaid.items[0].members?.length} / 50{" "}
                      <span>Plätze belegt</span>
                    </>
                  )
                ) : (
                  <span style={{ color: "red" }}>Raid ist nicht aktiv</span>
                )}
              </p>

              <button>
                <a href={clan + secondzone?.tag} target="_blank">
                  Jetzt angreifen
                </a>
              </button>
            </div>
            <div className="clanWrapper">
              <img src={clanData[3].imageSrc} alt={clanData[3].name} />

              <h3>{thirdzone?.name}</h3>
              <span>{thirdzone?.tag}</span>
              <p
                style={{
                  color:
                    (thirdzoneRaid?.items?.[0]?.members?.length &&
                      thirdzoneRaid.items[0].members.length >= 50) ||
                    thirdzoneRaid?.items?.[0]?.totalAttacks === 0
                      ? "red"
                      : "green",
                }}
              >
                {thirdzoneRaid?.items?.[0] ? (
                  thirdzoneRaid.items[0].totalAttacks === 0 ? (
                    <span style={{ color: "red" }}>Raid ist nicht aktiv</span>
                  ) : thirdzoneRaid.items[0].members?.length >= 50 ? (
                    <span style={{ color: "red" }}>Voll</span>
                  ) : (
                    <>
                      {thirdzoneRaid.items[0].members?.length} / 50{" "}
                      <span>Plätze belegt</span>
                    </>
                  )
                ) : (
                  <span style={{ color: "red" }}>Raid ist nicht aktiv</span>
                )}
              </p>

              <button>
                <a href={clan + thirdzone?.tag} target="_blank">
                  Jetzt angreifen
                </a>
              </button>
            </div>
            <div className="clanWrapper">
              <img src={clanData[5].imageSrc} alt={clanData[5].name} />

              <h3>{ghostzone?.name}</h3>
              <span>{ghostzone?.tag}</span>
              <p
                style={{
                  color:
                    (ghostzoneRaid?.items?.[0]?.members?.length &&
                      ghostzoneRaid.items[0].members.length >= 50) ||
                    ghostzoneRaid?.items?.[0]?.totalAttacks === 0
                      ? "red"
                      : "green",
                }}
              >
                {ghostzoneRaid?.items?.[0] ? (
                  ghostzoneRaid.items[0].totalAttacks === 0 ? (
                    <span style={{ color: "red" }}>Raid ist nicht aktiv</span>
                  ) : ghostzoneRaid.items[0].members?.length >= 50 ? (
                    <span style={{ color: "red" }}>Voll</span>
                  ) : (
                    <>
                      {ghostzoneRaid.items[0].members?.length} / 50{" "}
                      <span>Plätze belegt</span>
                    </>
                  )
                ) : (
                  <span style={{ color: "red" }}>Raid ist nicht aktiv</span>
                )}
              </p>

              <button>
                <a href={clan + ghostzone?.tag} target="_blank">
                  Jetzt angreifen
                </a>
              </button>
            </div>
          </div>
        </div>
        <div id="rules" className="ThirdRow">
          <div className="ThirdRow__top">
            <img src={hogRider}></img>
            <h1> Regeln</h1>
          </div>
          <div className="ThirdRow__left">
            <img src={clanwar} />
            <h1>Clankrieg</h1>
            <p>
              {clanInfos && clanInfos.length > 0 && (
                <PortableText value={clanInfos[0].description} />
              )}
            </p>
          </div>
          <div className="ThirdRow__right">
            <img src={raids} />
            <h1>Überfall </h1>
            <p>
              {clanInfos && clanInfos.length > 0 && (
                <PortableText value={clanInfos[1].description} />
              )}
            </p>
          </div>
        </div>

        <div id="join-us" className="FourthRow">
          <div className="FourthRow__left">
            <h1>Join Us</h1>
            <p>
              Schließe dich unserer lebendigen Community auf Discord an und
              erlebe den Endzone Clan hautnah – wir freuen uns auf dich!
            </p>
            <button>
              <a href="https://discord.com/invite/PZtZ4Pu6a4" target="_blank">
                Join unserem discord
              </a>
            </button>
            <button>
              <a href="https://www.twitch.tv/cheppersworld" target="_blank">
                Folg uns auf twitch
              </a>
            </button>
            <button>
              <a href="https://x.com/endzone_clan?lang=de" target="_blank">
                Folg uns auf X
              </a>
            </button>
          </div>
          <div className="FourthRow__right">
            <img src={headHunter} alt="headHunter" />
          </div>
        </div>
        <div id="merch" className="FifthRow">
          <div className="FifthRow__left">
            <h1>Hol dir das Ultimative Clan-Merch</h1>
            <p>
              Zeige deine Zugehörigkeit zum Endzone Clan mit unseren exklusiven
              T-Shirts von unserem Partner Spreadshop! Hohe Qualität und
              stylische Designs – perfekt für echte Fans und Spieler.
            </p>
            <button>
              <a href="https://endzone.myspreadshop.de" target="_blank">
                Zu unserem Merch Shop
              </a>
            </button>
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
            {clanInfos && clanInfos.length > 0 && (
              <PortableText value={clanInfos[3].description} />
            )}
          </div>
        </div>
        <div className="wallpaper-wrapper">
          <button className="wallpaper-btn">
            <a
              target="_blank"
              href="https://clasharmy.net/endzone/wallpaper.html"
            >
              Download Wallpapers
            </a>
          </button>
        </div>

        <footer>
          <p>© Endzone Family</p>
          <p> Back to Top</p>
          <div>
            <p>
              <a href="https://discord.com/invite/PZtZ4Pu6a4" target="_blank">
                Discord
              </a>
            </p>
            <p>
              <a href="https://x.com/endzone_clan?lang=de" target="_blank">
                X
              </a>
            </p>
            <p>
              <a href="https://www.twitch.tv/cheppersworld" target="_blank">
                Twitch
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Body;
