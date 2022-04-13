class Observation{
    public data_date = null;
    public continent = null;
    public country = null;
    public name = null;
    public longitude = null;
    public latitude = null;
    public location_id = null;
    public elevation = null;
    // Stores a list of observations in days
    public days = [];

    constructor() {
    }
    public now(){
        return this.days[-1].timestamp[-1];
    }
}