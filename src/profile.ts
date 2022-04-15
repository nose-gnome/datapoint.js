import * as os from "os";

const path = require("path");
const fso = new ActiveXObject('Scripting.FileSystemObject');
const {mkdirSync} = require("fs");
import appdirs from 'appdirs'

/**
 * Get the API key profile filename.
 * @param profile_name
 */
const API_profile_fname = (profile_name='default') => {
    return path.join(appdirs.usr_data_dir('DataPointJS'),
        profile_name + '.key');
}

/**
 * Put the given API key into the given profile name.
 * @param api_key
 * @param profile_name
 */
const install_API_key = (api_key, profile_name='default') => {
    const fname = API_profile_fname(profile_name);
    if(fso.FolderExists(path.dirname(fname))){
        mkdirSync(fname, {recursive:true})
    }
}

export {API_profile_fname, install_API_key};