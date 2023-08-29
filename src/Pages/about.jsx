import React from 'react';
import Navbar from '../components/navbar';
import BackgroundImage from '../assets/background.jpg';
import ProfileImage from '../assets/Aj.jpeg';
import { Box, Typography } from '@mui/material';

export default function About() {
    return (
        <Box
            style={{
                backgroundImage: `url(${BackgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100vw',
                height: '100vh',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Navbar />
            <Box
                sx={{
                    color: 'white',
                    textAlign: 'left',
                    paddingLeft: '100px',
                    fontFamily: "'Oswald', sans-serif",
                    flex: 1,
                    alignItems: 'center',
                }}
            >
                <Typography sx={{ fontSize: '9rem', padding : '20px', padding: '40px'}} variant="h1">Greetings!</Typography>
                <Typography sx={{ fontFamily: "'Victor Mono', monospace" }} variant="h5">
                    I am Alen John, pursuing my Master of Applied Computer Science from Dalhousie University, Halifax. With over a year of full-time experience as a full-stack software engineer, I specialize in Angular, SQL Server, and .NET.
                </Typography>
            </Box>
            <Box
                sx={{
                    flex: 1,
                    textAlign: 'center',
                    paddingTop: '50px',
                }}
            >
                <img
                    src={ProfileImage}
                    alt="Profile"
                    style={{
                        width: '200px',
                        height: '200px',
                        borderRadius: '50%',
                    }}
                />
            </Box>
        </Box>
    );
}
