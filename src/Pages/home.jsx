import React from 'react';
import BackgroundImage from '../assets/background.jpg';
import Navbar from '../components/navbar';
import { Box, Typography } from '@mui/material';
import DalLogo from '../assets/logo-macs.png'

export default function Home() {
    return (
        <Box>
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
                        padding: '100px',
                        fontFamily: "'Oswald', sans-serif",
                        flex: 1,
                    }}
                >
                    <Typography sx={{ fontFamily: "'Victor Mono', monospace" }} variant="h4">
                        Hi, I am
                    </Typography>
                    <Typography sx={{ fontSize: '13rem' }} variant="h1">Alen John</Typography>
                    <Typography variant="h5" sx={{ fontFamily: "'Victor Mono', monospace" }}>
                        pursuing my Master of Applied Computer Science from Dalhousie University. I am interested in Cloud development using AWS and Google Cloud, MERN, MEAN, IaC with AWS Cloud Formation, IaC with Terraform, Kubernetes and agile methodologies.
                    </Typography>
                </Box>
                <Box
                    sx={{
                        color: 'white',
                        textAlign: 'left',
                        padding: '100px',
                        fontFamily: "'Oswald', sans-serif",
                        flex: 1,
                    }}
                >
                    <img
                        src={DalLogo}
                        alt="Profile"
                        style={{
                            width: '650px',
                            height: '200px',
                        }}
                    />
                </Box>

            </Box>
        </Box>

    );
}
