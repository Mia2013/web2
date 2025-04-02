import { Box, Divider, Typography, BottomNavigation } from '@mui/material'
import React from 'react'

export const Footer = () => {
    return (
        <Box sx={{ backgroundColor: "#1E1F20" }} >
            <BottomNavigation>
                <Divider />
                <Box sx={{ my: 2 }}>
                    <Typography variant='h6' sx={{ textAlign: "center" }}> © Copyright Budavári Pince</Typography>
                </Box>
            </BottomNavigation>

        </Box>
    )
}
