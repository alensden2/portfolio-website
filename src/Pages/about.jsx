import React from 'react';
import { useSpring, animated } from 'react-spring';
import Navbar from '../components/navbar';
import BackgroundImage from '../assets/background.jpg';
import ProfileImage from '../assets/Aj.jpeg';
import { Box, Typography, Container, Grid, Paper, Avatar, IconButton } from '@mui/material';
import Footer from '../components/footer';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

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
                                            fontFamily: 'Playfair Display, serif', // Updated font
                                        }}
                                        variant="h1"
                                    >
                                        Greetings!
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontFamily: 'Raleway, sans-serif', // Updated font
                                        }}
                                        variant="h5"
                                    >
                                        I'm Alen John, a passionate software engineer based in Halifax, Nova Scotia. I'm currently pursuing my Master of Applied Computer Science at Dalhousie University. With over a year of full-time experience, I specialize in Angular, SQL Server, and .NET.
                                    </Typography>
                                    <Box mt={3}>
                                        <IconButton href="https://www.linkedin.com/in/your-linkedin-profile/" target="_blank" rel="noopener noreferrer" color="primary">
                                            <LinkedInIcon fontSize="large" />
                                        </IconButton>
                                        <IconButton href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer" color="primary">
                                            <GitHubIcon fontSize="large" />
                                        </IconButton>
                                    </Box>
                                </Paper>
                            </animated.div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <animated.div style={imageAnimation}>
                                <Box
                                    sx={{
                                        textAlign: 'center',
                                        borderRadius: '50%',
                                        overflow: 'hidden',
                                        width: '250px',
                                        height: '250px',
                                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                                    }}
                                >
                                    <Avatar
                                        alt="Profile"
                                        src={ProfileImage}
                                        sx={{
                                            width: '100%',
                                            height: '100%',
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
