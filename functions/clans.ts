// functions/clans.ts
import axios, { AxiosResponse } from 'axios';
import { Handler, HandlerEvent } from '@netlify/functions';
import { accessToken } from '../src/service/accestoken';
import { error } from 'console';

const endzone = "#2YPY9PLUU";
const firstzone = "#2YQQ80QGL";
const secondzone = "#2QQPYRRCU";

async function fetchDataFromAPI(): Promise<any> {
  try {
    const response: AxiosResponse = await axios.get(`https://api.clashofclans.com/v1/clans/${encodeURIComponent(endzone)}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Fehler beim Abrufen von Daten von der API:', error);
    throw error;
  }
};

async function handleServerRequest(): Promise<any> {
  try {
    // Rufe die Daten von der API ab
    const apiData = await fetchDataFromAPI();
    console.log('API-Daten:', apiData);    return apiData;
  } catch (error) {
    // Handle Fehler entsprechend
    throw error;
  }
}

// Starte die Server-Anfrage und handle die Antwort
handleServerRequest()
  .then((result) => {
    console.log('Verarbeitete Daten:', result);
  })
  .catch((error) => {
    console.error('Fehler beim Verarbeiten der Daten:', error);
  });