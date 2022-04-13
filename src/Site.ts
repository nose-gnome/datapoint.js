import * as util from "util";


export class Site{
    public name = null;
    public location_id = null;
    public elevation = null;
    public latitude = null;
    public longitude = null;
    public nationalPark = null;
    public region = null;
    public unitaryAuthArea = null;

    public api_key;

    constructor(kwargs?) {
        for (const item in this){
            if (item in kwargs){
                this[item] = kwargs[item];
            } else {
                this[item] = null;
            }
        }
    }

    [util.inspect.custom]() {
        let site_string = '';

        for (const value in this){
            site_string += value + ": " + this[value] + "\n";
        }
        return site_string;
    }

}