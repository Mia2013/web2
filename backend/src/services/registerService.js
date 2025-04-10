import { dbAll, dbRun } from "../utils/db.js";
import bcrypt from "bcrypt";

const registerService = {
    addUser: async (req) => {
        const { username, password } = req.body;
        if (!username || !password) {
            throw new Error('Az összes mező kitöltése kötelező');
        }

        const existingUser = await dbAll('SELECT * FROM USERS WHERE username = ?', [username]);

        if (existingUser.length > 0) {
            throw new Error('Sajnos ez a felhasznlónév már foglalt, kérlek válassz másikat');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await dbRun(
            'INSERT INTO USERS (username, password) VALUES (?, ?)',
            [username, hashedPassword]
        );

        return {
            id: result.lastID,
            username,
        };
    }
};

export default registerService;
