import client, { getClan } from "clash-of-clans-node";
import { accessToken } from "../src/service/accestoken";

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

    await client.login(`Bearer ${accessToken}`);
    const clan = await client.getClan("#2YPY9PLUU");
    console.log(clan);
    console.log();
}
myFunction(
);