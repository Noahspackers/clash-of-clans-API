const { response } = require('express');
const { accessToken } = require('../../src/service/accestoken');
const client = require("clash-of-clans-node");
const fetch = require("node-fetch");

const endzone = "#2YPY9PLUU";
const firstzone = "#2YQQ80QGL";
const secondzone = "#2QQPYRRCU";
const API = "https://pokeapi.co/api/v2/pokedex/kanto";


exports.handler = async function (event, context) {
const clans = `${API}`;

const response = await fetch(clans)
const data = await response.json()
return {
  statusCode: 200,
  body: JSON.stringify({
    data
  }),
};
}
