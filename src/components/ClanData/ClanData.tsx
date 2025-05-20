import "./ClanData.scss";
import React, { useState, useEffect } from "react";
import Body from "../Body/Body";

interface ApiClan {
  name: string;
  tag: string;
  badgeUrls: {
    medium: string;
  };
}
interface ClanDataType {
  name: string;
  tag: string;
  badgeUrls: {
    medium: string;
  };
}

const ClanData = ({ tag }: { tag: string }) => {
  const [clanDaten, setClanDaten] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchClanData = async (clanTag: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://endzone-clan.de/clan/endzone`);
      if (!response.ok)
        throw new Error(`HTTP Error! Status: ${response.status}`);

      const data = await response.json();
      console.log("Clan-Daten:", data);
      setClanDaten(data);
    } catch (error: any) {
      console.error("Fehler beim Abrufen der Clan-Daten:", error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (tag) {
      fetchClanData(tag);
    }
  }, [tag]);

  return (
    <div>
      {loading && <p>Lade Clan-Daten...</p>}
      {error && <p style={{ color: "red" }}>Fehler: {error}</p>}
      {clanDaten && <Body clanDaten={clanDaten} />}
      <p> {clanDaten}</p>
    </div>
  );
};

export default ClanData;
