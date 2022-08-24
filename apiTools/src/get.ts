import fs from "fs";

export default function get (property : string) {

    const fileContents : string = new String(fs.readFileSync("/private.json")).valueOf();
    const json = JSON.parse(fileContents);

    const values = Object.values(json)
    for (let item of values) {
        const x = item as string;
        if (x.startsWith(property)) {
            console.log("x")
            break;
        }
    }

}