import http, { IncomingMessage, Server, ServerResponse } from 'http';
import config from './config';
import addRoutes, { RouteHandler, routes } from './helpers/RouteHandler';

addRoutes('GET', '/', (req, res) => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({
        message: 'Hello, NodeJS!!',
        path: req.url
      }));

});

const server: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    console.log("Server received a request.");

    const method = req.method?.toUpperCase() || '';
    const path = req.url || '';

    const methodMap = routes.get(method);
    const handler: RouteHandler | undefined = methodMap?.get(path);

    if(handler){
        return handler(req, res);
    }else{
        res.writeHead(404, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({
          success: false,
          message: 'Route not found',
          path,
        }));
    }

    // ======================
    // ROOT ROUTE
    // ======================
    // if (req.url === '/' && req.method === 'GET') {
    //   res.writeHead(200, { 'Content-Type': 'application/json' });
    //   return res.end(JSON.stringify({
    //     message: 'Hello, NodeJS!!',
    //     path: req.url
    //   }));
    // }

    // ======================
    // HEALTH ROUTE
    // ======================
  //   if (req.url === '/api' && req.method === 'GET') {
  //     res.writeHead(200, { 'Content-Type': 'application/json' });
  //     return res.end(JSON.stringify({
  //       message: 'Health Status: OK',
  //       path: req.url
  //     }));
  //   }

  //   // ======================
  //   // USER ROUTE
  //   // ======================
  //   if (req.url === '/api/users' && req.method === 'POST') {
  //     let body = '';

  //     // Listen for incoming data
  //     req.on('data', chunk => {
  //       body += chunk.toString();
  //     });

  //     // When data is fully received
  //     req.on('end', () => {
  //       try{
  //        const parsedBody = JSON.parse(body);
  //        console.log('Received user data:', parsedBody);
            
  //        res.writeHead(200, { 'Content-Type': 'application/json' });
  //        res.end(JSON.stringify({
  //        message: 'User data received successfully!!',
  //        data: parsedBody
  //       }));

  //       }catch(err: any){
  //           console.log(err?.message);
  //     }
  //     }
  //   );

  //     return;
  //   }

  //   // ======================
  //   // NOT FOUND ROUTE
  //   // ======================
  //   res.writeHead(404, { 'Content-Type': 'application/json' });
  //   res.end(JSON.stringify({ message: 'Route not found' }));
  }
);

// ======================
// START SERVER
// ======================
server.listen(config.port, () => {
  console.log(`Server is listening on port ${config.port}`);
});
