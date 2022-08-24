import fetch, { Headers } from "node-fetch";
import { BodyInit } from "node-fetch";
import get from "./get";

/** Check answer */
export default function post () : void {

    const headers : Headers = makeHeaders();
    const body : BodyInit = "{\"messages\":[],\"info\":\"{\\\"ct\\\":\\\"9UmK4Pb5hpgDRNtvB9+ZMhYKnE0COg3HG99LgLItTpJor9/eXFWVw2pwgQQ4MMA2\\\",\\\"iv\\\":\\\"f61e04b5e714ef0b103929ef73e84c1a\\\",\\\"s\\\":\\\"1cc85bc14a21cbf9\\\"}\",\"_id\":1055279,\"original_sk\":\"powerToPower\",\"sk\":\"powerToPower\",\"sid\":252712320,\"yoursolution\":\"9x^{4}y^{6}\",\"ansType\":1,\"student_answers\":[\"9x^{4}y^{6}\"],\"assignment_last_edit\":1661095343,\"version\":405,\"informalTeachercode\":517215}";


    fetch("https://www.deltamath.com/api/check_answer", {
        method: "POST",
        headers: headers,
        body: body
    }).then((res) => {
        console.log(res);
    });

}


function makeHeaders () : Headers {

    const h : Headers = new Headers();

    // h.append(":authority", "www.deltamath.com");
    // h.append(":method", "POST");
    // h.append(":path", "/api/check_answer");
    // h.append(":scheme", "HTTPS");
    h.append("accept", "application/json, text/plain, */*");
    h.append("accept-encoding", "gzip, deflate, br");
    h.append("accept-language", "en-US,en;q=0.9");
    h.append("authorization", get("header-authorization"));
    h.append("cache-control", "no-cache");
    // h.append("content-length", "404");
    h.append("content-type", "application/json");
    h.append(`cookie`, `G_ENABLED_IDPS=google; CloudFront-Signature=; G_AUTHUSER_H=4; refresh_token=${get("refresh_token")}; refresh_token_javascript=${get("refresh_token_javascript")}; AWSALBTG=${get("AWSALBTG")}; AWSALBTGCORS=${get("AWSALBTGCORS")};`);
    h.append("DNT", "1");
    h.append("origin", "https://www.deltamath.com");
    h.append("pragma", "no-cache");
    h.append("referer", get("referer"));
    h.append("sec-fetch-dest", "empty");
    h.append("sec-fetch-mode", "cors");
    h.append("sec-fetch-site", "same-origin");
    h.append("sec-gpc", "1")
    h.append("user-agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.102 Safari/537.36");


    return h;
}