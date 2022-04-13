import * as util from "util";

class Element{
    public field_code;
    public value;
    public units;

    constructor(field_code=null, value=null, units=null) {
        this.field_code = field_code;
        this.value=value;
        this.units=units;
    }

    [util.inspect.custom]() {
        return `${this.value} ${this.units}`;
    }
}