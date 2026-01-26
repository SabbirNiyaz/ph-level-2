import { IncomingMessage } from "http";

async function parseBody(req: IncomingMessage): Promise<any> {
    return new Promise((resolve, reject) => {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString(); // convert Buffer to string
        });

        req.on('end', () => {
            try {
                const parsedBody = JSON.parse(body);
                resolve(parsedBody);
            } catch (err: any) {
                reject(err);
            }
        });
        
        req.on('error', reject)
    });
}

export default parseBody;