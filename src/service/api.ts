import { NextResponse } from "next/server";
import { accessToken } from "./accestoken";
const tag = "#2YPY9PLUU";
const apiUrl = `https://api.clashofclans.com/v1/clans/${encodeURIComponent(
  tag
)}`;

export async function fetchData() {
    try {
        const res_ip = await fetch("https://api.ipify.org/", {method: "GET"});
        const ip_data = await res_ip.text();
        console.log(ip_data);
        const res = await fetch(apiUrl, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
        });
        console.log(res.status, res.statusText);
        const data = await res.json();
        console.log(data);
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        return NextResponse.json(error);
    }
}
fetchData();