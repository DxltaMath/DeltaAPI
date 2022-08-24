import fetch, { Headers } from "node-fetch";

/** Check answer */
export default function post () : void {

    const h : Headers = new Headers()
    h.append("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.102 Safari/537.36");
    h.append(":authority", "www.deltamath.com");
    h.append(":method", "POST");
    h.append(":path", "/api/check_answer");
    h.append(":scheme", "HTTPS");
    h.append("accept", "application/json, text/plain, */*");
    h.append("accept-encoding", "gzip, deflate, br");
    h.append("accept-language", "en-US,en;q=0.9");
    h.append("authorization", "Bearer ")


    fetch("https://www.deltamath.com/api/check_answer", {
        method: "POST",
        headers: h
    });

}