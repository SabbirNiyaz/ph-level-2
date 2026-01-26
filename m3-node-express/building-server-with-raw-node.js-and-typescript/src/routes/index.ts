import addRoutes from "../helpers/RouteHandler";
import sendJson from "../helpers/sendJson";
import parseBody from "../helpers/parseBody";
import { readUsers, writeUsers } from "../helpers/fileDb";

addRoutes('GET', '/', (req, res) => {
    sendJson(res, 200, {
        message: 'Hello, NodeJS!!',
        path: req.url
    });
});
addRoutes('GET', '/api', (req, res) => {
    sendJson(res, 200, {
        message: 'Health Status: OK',
        path: req.url
    });
});
addRoutes('POST', '/api/users', async (req, res) => {
    const body = await parseBody(req);

    const users = readUsers();
    const newUser = {
        id: users.length + 1,
        name: body.name,
    };

    users.push(newUser);
    writeUsers(users);

    console.log('Received user data:', body);
    sendJson(res, 201, {
        success: true,
        data: body
    });
});

addRoutes('PUT', '/api/users/:id', async (req, res) => {
    const { id } = (req as any).params;
    const body = await parseBody(req);

    const users = readUsers();
    const userIndex = users.findIndex((u: any) => u.id === parseInt(id));
    if (userIndex === -1) {
        sendJson(res, 404, {
            success: false,
            message: 'User not found'
        });
    }
    users[userIndex].name = body.name;
    writeUsers(users);
    sendJson(res, 202, {
        success: true,
        data: `User with id ${id} updated the name: "${body.name}" successfully.`
    });
});