import http, { IncomingMessage, Server, ServerResponse } from 'http';
import config from './config';
import { RouteHandler, routes } from './helpers/RouteHandler';
import './routes/index'; // Import routes to register them
import findDynamicRoute from './helpers/dynamicRouterHandler';

const server: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    console.log("Server received a request.");

    const method = req.method?.toUpperCase() || '';
    const path = req.url || '';

    const methodMap = routes.get(method);
    const handler: RouteHandler | undefined = methodMap?.get(path);

    if (handler) {
      return handler(req, res);
    }
    else if (findDynamicRoute(method, path)) {
      const match = findDynamicRoute(method, path);
      (req as any).params = match?.params;
      match?.handler(req, res);
    }
    else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({
        success: false,
        message: 'Route not found',
        path,
      }));
    }
  }
);

// Start the server
server.listen(config.port, () => {
  console.log(`Server is listening on port ${config.port}`);
});
