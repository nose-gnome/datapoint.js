import {REGION_NAMES} from './region_names.json';
import {StatusCodes} from "http-status-codes";
import {Site} from "src/Site"
import {time} from "src/time";

const REGIONS_BASE_URL = 'http://datapoint.metoffice.gov.uk/public/data/txt/wxfcs/regionalforecast/json'
/**
 * Datapoint Manager for national and regional text forecasts
 */
export class RegionManager{
    public api_key: string;

    public all_regions_path = '/sitelist';
    public base_url: string;
    public regions_last_update =0;
    public regions_last_request = null;
    public regions_update_time = 3600;

    constructor(api_key, base_url=null, kwargs?) {
        this.api_key = api_key;
        if (!base_url){
            this.base_url = REGIONS_BASE_URL;
        }
    }

    /**
     * Call datapoint api
     */
    async call_api(path: string, kwargs?: { [x: string]: string; }){
        if(!('key' in kwargs)){
            kwargs['key'] = this.api_key;
        }
        let response = await fetch(`${this.base_url} ${path}`)
        if (response.ok){
            throw new Error(`${response.statusText}`)
        } else {
            return response.json();
        }
    }


    /**
     * Request a list of regions from Datapoint.  Returns each Region
     * as a Site objet.  Regions rarely change, so we cache the response
     * for one hour to minimise requests to API.
     */
    get_all_regions() {
        if (time() - this.regions_last_update < this.regions_update_time){
            return this.regions_last_request;
        }

        let response = this.call_api(this.all_regions_path);
        let regions = [];

        for (const location of response['Locations']['Location']){
            let region = new Site({
                location_id: location['@id'],
                region: location['@name'],
                name: REGION_NAMES[location['@name']]
            });
            regions.push(region);
        }
        this.regions_last_update = time();
        this.regions_last_request = regions;
        return regions;
    }

    /**
     * Request unformatted forecast for a specific region_id
     * @param region_id
     */
    get_raw_forecast(region_id){
        return this.call_api(`${region_id}`);
    }
}