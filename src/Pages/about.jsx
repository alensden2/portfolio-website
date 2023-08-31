import React from 'react';
import { useSpring, animated } from 'react-spring';
import Navbar from '../components/navbar';
import BackgroundImage from '../assets/background.jpg';
import ProfileImage from '../assets/Aj.jpeg';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import Footer from '../components/footer';

export default function About() {
    const contentAnimation = useSpring({
        from: { opacity: 0, transform: 'translateX(-20px)' },
        to: { opacity: 1, transform: 'translateX(0)' },
        config: { duration: 1000 },
    });

    const imageAnimation = useSpring({
        from: { opacity: 0, transform: 'translateX(20px)' },
        to: { opacity: 1, transform: 'translateX(0)' },
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
                <Container>
                    <Grid container spacing={4} alignItems="center" justifyContent="center">
                        <Grid item xs={12} sm={6}>
                            <animated.div style={contentAnimation}>
                                <Paper
                                    sx={{
                                        color: 'white',
                                        padding: '30px',
                                        borderRadius: '15px',
                                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: '3.5rem',
                                            fontWeight: 'bold',
                                            paddingBottom: '20px',
                                            fontFamily: "'Victor Mono', monospace",
                                        }}
                                        variant="h1"
                                    >
                                        Greetings!
                                    </Typography>
                                    <Typography
                                        sx={{ fontFamily: "'Victor Mono', monospace" }}
                                        variant="h5"
                                    >
                                        I am Alen John, pursuing my Master of Applied Computer Science from Dalhousie University, Halifax. With over a year of full-time experience as a full-stack software engineer, I specialize in Angular, SQL Server, and .NET.
                                    </Typography>
                                </Paper>
                            </animated.div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <animated.div style={imageAnimation}>
                                <Box
                                    sx={{
                                        textAlign: 'center',
                                    }}
                                >
                                    <img
                                        src={ProfileImage}
                                        alt="Profile"
                                        style={{
                                            width: '300px',
                                            height: '300px',
                                            borderRadius: '50%',
                                            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
                                        }}
                                    />
                                </Box>
                            </animated.div>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box>
                <Footer />
            </Box>
        </Box>
    );
}
