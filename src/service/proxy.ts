// pages/api/proxy.ts
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
export const accessToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImVlNTUxYzMzLWFiMDAtNGZiNC04MGQ2LWMxMDA3YzE1MTI1OCIsImlhdCI6MTcwNDc1NTEzOSwic3ViIjoiZGV2ZWxvcGVyLzllODZjN2U4LTI2ZjctNjRmOC0zOTE4LWQ3MGQ2MzM1Y2FjMyIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjgxLjE2OS4xNDUuMTYzIiwiNjIuMTU3LjY1LjIxMCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.PXrA97dIdLu4_vheurBmDnJoiTjxriFjEg3x0iOwCN9DCCZRj1oNZNuanj1rFIIVKfumsSg9_0bquvFWf9xiMw";
export  const clan_tag = "#2YPY9PLUU";
  
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get(`https://api.clashofclans.com/v1/clans/${encodeURIComponent(clan_tag)}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  
    res.status(response.status).json(response.data);
} catch (error) {
  console.error('Proxy API Call Error:', error);
  res.status(500).json({ error: 'Internal Server Error' });
}
}