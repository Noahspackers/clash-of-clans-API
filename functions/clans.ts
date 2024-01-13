
import axios, { AxiosResponse } from 'axios';
import { Handler, HandlerEvent } from '@netlify/functions';
import { accessToken } from '../src/service/accestoken';
import { error } from 'console';
import React, { useEffect, useState } from 'react';


const endzone = "#2YPY9PLUU";
const firstzone = "#2YQQ80QGL";
const secondzone = "#2QQPYRRCU";
const serverURL = `https://api-endzone-clan.netlify.app/clans/${encodeURIComponent(endzone)}`;
const [clanData, setClanData] = useState([]);

const fetchData = async () => {
  try {
    const response = await fetch('https://api.clashofclans.com/v1/clans/%232YPY9PLUU', {
      headers: {  
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    },
    );
    const data = await response.json();
    setClanData(data);
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
const fetch = require('node-fetch');

exports.handler = async function (event, context) {
  try {
    const response = await fetch('https://api.clashofclans.com/v1/clans/%232YPY9PLUU', {
      headers: {  
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    },
    );
    const data = await response.json();
    setClanData(data); 
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };   
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
fetchData();