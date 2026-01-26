import { ServerResponse } from "node:http";

function sendJson(res: ServerResponse, statusCode: number, data: any){
    res.writeHead(statusCode, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(data));
}

export default sendJson;