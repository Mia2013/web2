import React from 'react';
import { jwtDecode } from "jwt-decode";
import { useAuth } from '../provider/AuthProvider';
import {
    Box,
    Avatar,
    Typography,
    Stack,
    Button,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

const UserData = () => {
    const { token, logOut } = useAuth();
    const decodedToken = jwtDecode(token);

    const username = decodedToken.username || "Felhasználó";
    const loggedInDate = new Date(decodedToken?.iat * 1000).toLocaleDateString();

    return (
        <Stack sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", alignItems: "center" }}>
            <Stack direction="row" spacing={3} sx={{ my: 5, alignItems: "center" }} data-aos="fade-right" >
                <Avatar sx={{
                    bgcolor: 'primary.main', width: 64, height: 64, "&:hover": {
                        background: 'white',
                        color: "#a97142",
                    }
                }}>
                    <AccountCircleIcon sx={{ fontSize: 40 }} />
                </Avatar>
                <Box>
                    <Typography variant="h6">Felhasználónév: {username}</Typography>
                    <Typography variant="body1" sx={{ opacity: 0.6, my: 1 }}>
                        Bejelentkezés dátuma: {loggedInDate}
                    </Typography>
                </Box>
            </Stack>
            <Button
                onClick={logOut}
                endIcon={<LogoutIcon />}
                variant='contained'
                sx={{
                    py: 2,
                    "&:hover": {
                        background: 'white',
                        color: "#a97142",
                    }
                }}
                data-aos="fade-left"
            >Kijelentkezés</Button>
        </Stack>

    );
};

export default UserData;
