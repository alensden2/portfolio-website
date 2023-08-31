import React from 'react';
import BackgroundImage from '../assets/background.jpg';
import Navbar from '../components/navbar';
import { Box, Typography, Container } from '@mui/material';
import DalLogo from '../assets/logo-macs.png';
import { useSpring, animated } from 'react-spring';

export default function Home() {
    const fadeIn = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 1000 },
    });

    return (
        <Box>
            <Box
                sx={{
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
                <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box
                        sx={{
                            color: 'white',
                            textAlign: 'center',
                            padding: '50px',
                            fontFamily: "'Oswald', sans-serif",
                            flex: 1,
                        }}
                    >
                        <animated.div style={fadeIn}>
                            <Typography
                                sx={{ fontFamily: "'Victor Mono', monospace", fontSize: '2rem', marginBottom: '20px' }}
                                variant="h4"
                            >
                                Hi, I am
                            </Typography>
                            <Typography
                                sx={{ fontSize: '5rem', fontWeight: 'bold', marginBottom: '30px' }}
                                variant="h1"
                            >
                                Alen John
                            </Typography>
                            <Typography
                                variant="h5"
                                sx={{ fontFamily: "'Victor Mono', monospace", marginBottom: '50px' }}
                            >
                                Pursuing my Master of Applied Computer Science from Dalhousie University. I am interested
                                in Cloud development using AWS and Google Cloud, MERN, MEAN, IaC with AWS Cloud Formation,
                                IaC with Terraform, Kubernetes and agile methodologies.
                            </Typography>
                        </animated.div>
                    </Box>
                    <Box
                        sx={{
                            flex: 1,
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <img
                            src={DalLogo}
                            alt="Dalhousie University Logo"
                            style={{
                                width: '300px',
                                height: 'auto',
                            }}
                        />
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}
