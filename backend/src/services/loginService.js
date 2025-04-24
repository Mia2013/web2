import { dbGet } from "../utils/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const loginService = {
    verifyUser: async (req) => {
        const { username, password } = req.body;
        if (!username || !password) {
            throw new Error('Az összes mező kitöltése kötelező');
        }

        const user = await dbGet('SELECT * FROM USERS WHERE username = ?', [username]);
        if (!user) {
            throw new Error('A felhasználó nem található az adatbázisban!');
        }

        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            throw new Error('Nem megfelelő felhasználónév vagy jelszó!');
        }


        const token = jwt.sign(
            {
                userid: user.id,
                username: user.username,
            },
            "szuperTitkosKulcsATokenhez"
        );
        return { token };
    }
};

export default loginService;
