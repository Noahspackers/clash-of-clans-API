import React, { useEffect } from "react";
import "./Stats.scss";
import { useClanStore } from "../../store/useClanStore";
const Stats: React.FC = () => {
  const tag = "#2YPY9PLUU"; // Musst du dann durch den Tag ersetzen oder halt über die Props übergeben

  const clan = useClanStore((state) => state.getClan(tag))
  const fetchClan = useClanStore((state) => state.fetchClan)
  const error = useClanStore((state) => state.errorTags.has(tag))
  const loading = useClanStore((state) => state.loadingTags.has(tag))

  useEffect(() => {
    fetchClan(tag)
  }, [tag, fetchClan])

  if (loading) return <p>Lade Clan...</p>
  if (error) return <p>Fehler: {error}</p>
  if (!clan) return <p>Clan nicht gefunden</p>

  return (
    <div>
      <h2>{clan.name}</h2>
      <p>Tag: {clan.tag}</p>
      <p>Mitglieder: {clan.members.length}</p>
    </div>
  )
};

export default Stats;
