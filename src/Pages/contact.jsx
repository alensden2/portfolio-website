import React from 'react';
import { Box, Container } from '@mui/material';
import { useSpring, animated } from 'react-spring';
import BackgroundImage from '../assets/background.jpg';
import ContactForm from '../components/contactForm';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

export default function Contact() {
    const backgroundSpring = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 1000 },
    });

    const formSpring = useSpring({
        from: { opacity: 0, transform: 'translateY(100px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 1000, delay: 300 },
    });

    return (
        <Box>
            <animated.div
                style={{
                    ...backgroundSpring,
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
                <Container
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                    }}
                >
                    <animated.div
                        style={{
                            ...formSpring,
                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                            padding: '30px',
                            borderRadius: '10px',
                            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
                            width: '100%',
                            maxWidth: '400px',
                            textAlign: 'center',
                        }}
                    >
                        <ContactForm />
                    </animated.div>
                </Container>
            </animated.div>
            <Box>
                <Footer />
            </Box>
        </Box>
    );
}
