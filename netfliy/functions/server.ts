
const client = require("clash-of-clans-node");


interface Clan {
  tag: string;
  name: string;
  badgeUrls: {
    small: string;
    large: string;
    medium: string;
  };
}
const endzone = "#2YPY9PLUU";
const firstzone = "#2YQQ80QGL";
const secondzone = "#2QQPYRRCU";

async function myFunction(): Promise<void> {
  await client.login({ email: 'noah.walz158@gmail.com', password: 'bopba5-fuwryj-nyczEx' });

  await client.login("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImVlNTUxYzMzLWFiMDAtNGZiNC04MGQ2LWMxMDA3YzE1MTI1OCIsImlhdCI6MTcwNDc1NTEzOSwic3ViIjoiZGV2ZWxvcGVyLzllODZjN2U4LTI2ZjctNjRmOC0zOTE4LWQ3MGQ2MzM1Y2FjMyIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjgxLjE2OS4xNDUuMTYzIiwiNjIuMTU3LjY1LjIxMCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.PXrA97dIdLu4_vheurBmDnJoiTjxriFjEg3x0iOwCN9DCCZRj1oNZNuanj1rFIIVKfumsSg9_0bquvFWf9xiMw");
  const clan: Clan = await client.getClan(`${encodeURIComponent(endzone)}`);
  console.log(`${clan.name} (${clan.tag})`);
}
myFunction();