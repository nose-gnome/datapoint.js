
const FORECAST_URL = "http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json"
const OBSERVATION_URL = "http://datapoint.metoffice.gov.uk/public/data/val/wxobs/all/json"
const DATE_FORMAT = "%Y-%m-%dZ"
const DATA_DATE_FORMAT = "%Y-%m-%dT%XZ"
const FORECAST_DATE_FORMAT = "%Y-%m-%dT%H:%M:%SZ"


const ELEMENTS = {
    "Day":
        {"U":"U", "V":"V", "W":"W", "T":"Dm", "S":"S", "Pp":"PPd",
            "H":"Hn", "G":"Gn", "F":"FDm", "D":"D"},
    "Night":
        {"V":"V", "W":"W", "T":"Nm", "S":"S", "Pp":"PPn",
            "H":"Hm", "G":"Gm", "F":"FNm", "D":"D"},
    "Default":
        {"V":"V", "W":"W", "T":"T", "S":"S", "Pp":"Pp",
            "H":"H", "G":"G", "F":"F", "D":"D", "U":"U"},
    "Observation":
        {"T":"T", "V":"V", "D":"D", "S":"S",
            "W":"W", "P":"P", "Pt":"Pt", "Dp":"Dp", "H":"H"}
}

const WEATHER_CODES = {
    "0":"Clear night",
    "1":"Sunny day",
    "2":"Partly cloudy",
    "3":"Partly cloudy",
    "4":"Not used",
    "5":"Mist",
    "6":"Fog",
    "7":"Cloudy",
    "8":"Overcast",
    "9":"Light rain shower",
    "10":"Light rain shower",
    "11":"Drizzle",
    "12":"Light rain",
    "13":"Heavy rain shower",
    "14":"Heavy rain shower",
    "15":"Heavy rain",
    "16":"Sleet shower",
    "17":"Sleet shower",
    "18":"Sleet",
    "19":"Hail shower",
    "20":"Hail shower",
    "21":"Hail",
    "22":"Light snow shower",
    "23":"Light snow shower",
    "24":"Light snow",
    "25":"Heavy snow shower",
    "26":"Heavy snow shower",
    "27":"Heavy snow",
    "28":"Thunder shower",
    "29":"Thunder shower",
    "30":"Thunder"
}

/**
 * Datapoint Manager object
 */
export class Manager{
    public api_key: string;
    public call_response;
    public forecast_sites_last_update = 0;
    public forecast_sites_last_request = null;
    public forecast_sites_update_time = 3600;

    public observation_sites_last_update = 0;
    public observation_sites_last_request = null;
    public observation_sites_update_time = 3600;



    constructor(api_key=""){
        this.api_key = api_key
        this.call_response = null
        this.
    }

}