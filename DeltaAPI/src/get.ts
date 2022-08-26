import fs from "fs";
import path from "path";

export default function get (item : string) : string {

    const fileContents : string = new String(fs.readFileSync(path.resolve(__dirname, "../private.json"))).valueOf();
    const json = JSON.parse(fileContents);
    return json[item] as string;

}