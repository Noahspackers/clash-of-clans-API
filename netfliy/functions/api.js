const { accessToken } = require('../../src/service/accestoken');
const client = require("clash-of-clans-node");

const endzone = "#2YPY9PLUU";
const firstzone = "#2YQQ80QGL";
const secondzone = "#2QQPYRRCU";

async function myFunction() {
  await client.login({ email: 'noah.walz158@gmail.com', password: 'bopba5-fuwryj-nyczEx' });

  await client.login(`${accessToken}`);
  const clan = await client.getClan(`${encodeURIComponent(endzone)}`);
  console.log(`${clan.name} (${clan.tag})`);
}

myFunction();