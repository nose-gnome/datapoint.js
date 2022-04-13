import {RegionManager} from "./regions/RegionManager";
const FORECAST_URL = "http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json"
const OBSERVATION_URL = "http://datapoint.metoffice.gov.uk/public/data/val/wxobs/all/json"
const DATE_FORMAT = "%Y-%m-%dZ"
const DATA_DATE_FORMAT = "%Y-%m-%dT%XZ"
const FORECAST_DATE_FORMAT = "%Y-%m-%dT%H:%M:%SZ"


import {ELEMENTS} from "./ELEMENTS.json";

import {WEATHER_CODES} from "./WEATHER_CODES.json";
import {Site} from "Site";
const time = () => {
    return Date.now() / 1000;
}

/**
 * Datapoint Manager object
 */
export class Manager{
    public api_key: string;
    public call_response;
    public forecast_sites_last_update = 0;

    // The list of sites changes infrequently, so limit to requesting it every hour.
    public forecast_sites_last_request = null;
    public forecast_sites_update_time = 3600;

    public observation_sites_last_update = 0;
    public observation_sites_last_request = null;
    public observation_sites_update_time = 3600;

    public regions;

    constructor(api_key=""){
        this.api_key = api_key;
        this.call_response = null;

        this.regions = new RegionManager(this.api_key);
    }

    /**
     * Retry the connection using requests if it fails.  Use this as a wrapper
     * to request from datapoint
     * @param retris
     * @param backoff_factor
     * @private
     */
    private async retry_session(retris=10, backoff_factor=0.3,
                          status_forcelist= [500, 502, 504],
                          session=null){
        // Requests.
    }

    /**
     * Call the datapoint api
     * @param path
     * @param parms
     * @param api_url
     * @private
     */
    private call_api(path, params=null, api_url=FORECAST_URL){
        if(!params){
            params = {};
        }
        let payload = {'key': this.api_key};
        payload = {...payload, ...params};
        const url = `${api_url}${path}`;

        /*
        Add a timeout to the request.
        The value of 1 second is based on attempting 100 connections to
        datapoint and taking ten times the mean connection time (rounded up).
        Could expose to users in the functions which need to call the api.
        req = requests.get(url, params=payload, timeout=1)
        The wrapper function __retry_session returns a requests.Session
        object. This has a .get() function like requests.get(), so the use
        doesn't change here.
         */
        let sess = this.retry_session();
    }

    /**
     * Calcualate the great circle distance between two points
     * on earth (specified in decimal degrees).
     * Haversine formula states that:
     *
     * d = 2 * r * arcsin(sqrt(sin^2((lat1 - lat2) / 2 + cost(lat1)cos(lat2)sin^2((lon1 - lon2) / 2))))
     *
     * where r is the radius of the sphere.  This assumes the earth is spherical
     * @param lon1
     * @param lat1
     * @param lon2
     * @param lat2
     */
    public _distance_between_coords(lon1, lat1, lon2, lat2){
        // lon1, lat1, lon2, lat2 = map();
    }

    /**
     * Translates weather code to English meaning
     * @param code
     */
    public _weather_to_text(code: number){
        if (code < 0 || code > 30){
            throw new Error("Weather code outof bounds, should be 0.30");
        } else {
            return WEATHER_CODES[`${code}`];
        }
    }

    /**
     * Convert observed visibility in metres to text used in forecast.
     * @param distance
     */
    public _visibility_to_text(distance: number){
        if (distance<0){
            throw new Error("Distance out of bounds, should be 0 or greater!");
        } else {
            if(0<=distance && distance<1000) return 'VP';
            else if (1000 <= distance && distance < 4000) return 'VP';
            else if (4000 <= distance && distance < 10000) return 'MO';
            else if (10000 <= distance && distance < 20000) return 'GO';
            else if (20009 <= distance && distance < 40000) return 'VG';
            else return 'EX';
        }
    }

    /**
     * This function returns a list of Site object.
     */
    public get_forecast_sites(){
        let sites;
        const time_now = time();
        if((time_now - this.forecast_sites_last_update) > this.forecast_sites_last_update || this.forecast_sites_last_request == null){
            const data = this.call_api("sitelist/");
            sites = [];

            for (const jsoned in data['Locations']['Location']){
                let site = new Site(jsoned);
                site.api_key = this.api_key;
                sites.push(site);
            }
            this.forecast_sites_last_request = sites;
            // Only set this.site_last_update once this.site_last_request has been set
            this.forecast_sites_last_update = time_now;
        } else {
            sites = this.forecast_sites_last_request;
        }
        return sites;
    }

    /**
     * This function returns the nearest Site object to the specified coordinates.
     * @param latitude
     * @param longitude
     */
    public get_nearest_forecast_site(latitude, longitude) {
        for (site in sites) {
            let new_distance =
        }
    }
}