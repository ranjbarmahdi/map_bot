import fetch from 'node-fetch';

export async function api(url) {
    const options = {
        method: 'GET',
        headers: {
            'api-key': 'service.bfed7ab099104b4f933d2f10679f1f53',
            'Content-Type': 'text/plain',
            'redirect': 'follow'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json(); // If the response is JSON, parse it
        const { distance, duration } = data.routes[0].legs[0];
        const dis = distance.text;
        const dur = duration.text;

        return [
            dis,
            dur
        ]
    } catch (error) {
        console.log("Error in api", error);
        return [0, 0]
    }
}

const url = "https://api.neshan.org/v4/direction?type=car&origin=35.78075629028602,51.44888051620569&destination=35.869888530883756,50.87017376021197&avoidTrafficZone=false&avoidOddEvenZone=false&alternative=false&bearing=";

