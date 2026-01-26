import path from "path";
import fs from "fs";

const filePath = path.join(__dirname, "../data/users.json");

export function readUsers() {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
}

export type UserType = {
    id: number,
    name: string,
}
export function writeUsers(users: UserType[]) {
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
}