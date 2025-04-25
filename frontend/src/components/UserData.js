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
    const registered = decodedToken.iat
        ? new Date(decodedToken.iat * 1000).toLocaleDateString()
        : "Ismeretlen";

    return (
        <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Stack direction="row" spacing={3} alignItems="center" sx={{ my: 5 }} data-aos="fade-down" >
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
                        Regisztráció: {registered}
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
            >Kijelentkezés</Button>
        </Stack>

    );
};

export default UserData;
