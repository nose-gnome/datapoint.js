import {APIException} from 'Exceptions'

class Forecast{
    public frequency;
    public data_date = null;
    public continent = null;
    public country = null;
    public name = null;
    public longitude = null;
    public latitude = null;
    public location_id = null;
    public elevation = null;
    public days = [];

    constructor(frequency="") {
        this.frequency = frequency;
    }

    public timedelta_total_seconds(timedelta){
        return (
            timedelta.microseconds + 0.0 +
            (timedelta.seconds + timedelta.days * 24 * 3600) * 10 ** 6) / 10 ** 6;
    }

    /**
     * Return the timestep closest to the target datetime
     * @param target
     */
    public at_datetime(target){
        // Convert target to ffset aware datetime
    }
}