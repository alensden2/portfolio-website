import { Box, Link, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import GithubLogo from '../assets/github.png';
import LinkedInLogo from '../assets/linkedin.png';

const FooterContainer = styled(Box)({
    textAlign: 'center',
    padding: '20px 0',
    backgroundColor: '#333',
    color: '#fff',
    borderTop: '1px solid #444',
    bottom: 0,
    left: 0,
    width: '100%',
});

const SocialLink = styled(Link)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#fff',
    fontSize: '1.2rem',
    textDecoration: 'none',
    margin: '0 20px',
    transition: 'color 0.3s',
    '&:hover': {
        color: '#0077B5',
    },
});

const Divider = styled(Typography)({
    fontSize: '1.2rem',
    color: '#fff',
    margin: '0 20px',
});

export default function Footer() {
    return (
        <FooterContainer>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <SocialLink
                    href="https://www.linkedin.com/in/yourlinkedinusername"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={LinkedInLogo}
                        alt="LinkedIn"
                        style={{
                            width: '24px',
                            height: '24px',
                            verticalAlign: 'middle',
                        }}
                    />
                    LinkedIn
                </SocialLink>
                <Divider>|</Divider>
                <SocialLink
                    href="https://github.com/yourgithubusername"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={GithubLogo}
                        alt="GitHub"
                        style={{
                            width: '24px',
                            height: '24px',
                            verticalAlign: 'middle',
                        }}
                    />
                    GitHub
                </SocialLink>
            </Box>
        </FooterContainer>
    );
}