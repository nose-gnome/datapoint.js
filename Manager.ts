import {RegionManager} from "./regions/RegionManager";
const FORECAST_URL = "http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json"
const OBSERVATION_URL = "http://datapoint.metoffice.gov.uk/public/data/val/wxobs/all/json"
const DATE_FORMAT = "%Y-%m-%dZ"
const DATA_DATE_FORMAT = "%Y-%m-%dT%XZ"
const FORECAST_DATE_FORMAT = "%Y-%m-%dT%H:%M:%SZ"


import {ELEMENTS} from "./ELEMENTS.json";

import {WEATHER_CODES} from "./WEATHER_CODES.json";

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


}