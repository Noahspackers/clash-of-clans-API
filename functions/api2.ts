import fetch, { Headers } from "node-fetch";
import os from "os";
import { accessToken } from "../src/service/accestoken";
const endzone = "#2YPY9PLUU";
const firstzone = "#2YQQ80QGL";
const secondzone = "#2QQPYRRCU";


// Get the network interfaces
const networkInterfaces = os.networkInterfaces();

// Check if networkInterfaces is defined and not null
if (networkInterfaces) {
  // Extract the IPv4 addresses from all network interfaces
  const ipv4Addresses = Object.values(networkInterfaces)
    .flat()
    .filter((info) => info?.family === 'IPv4')
    .map((info) => info?.address)
    .filter((address) => address !== undefined);

  if (ipv4Addresses.length > 0) {
    console.log(`IPv4 Addresses: ${ipv4Addresses.join(', ')}`);
  } else {
    console.log('No IPv4 addresses found');
  }
} else {
  console.log('Network interfaces not available');
}

const API = "https://api.clashofclans.com/v1";

module.exports.handler = async function (event, context) {
  console.log('Incoming request to /api from Netlify:', event.path);
  const clans = `${API}/clans/${encodeURIComponent(endzone)}`;
  const headers = new Headers();
  headers.set("Authorization", `Bearer ${accessToken}`);
  const response = await fetch(clans, { headers });
  const data = await response.json();
  console.log()
  return {
    statusCode: 200,
    body: JSON.stringify({
      data
    }),
  };
}
