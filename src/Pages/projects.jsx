import { Box, Card, CardContent, Container, Grid, Link, Paper, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BackgroundImage from '../assets/background.jpg';
import Navbar from '../components/navbar';
//GIT_TOKEN
const authToken = process.env.GIT_TOKEN;

const ProjectStats = () => {
    const [userData, setUserData] = useState(null);
    const [userRepos, setUserRepos] = useState([]);

    useEffect(() => {
        axios
            .get('https://api.github.com/users/alensden2')
            .then((response) => {
                setUserData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching GitHub user data:', error);
            });
    }, []);

    useEffect(() => {
        let config = {
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json',
            }
        }
        axios
            .get('https://api.github.com/user/repos', config)
            .then((response) => {
                setUserRepos(response.data);
            })
            .catch((error) => {
                console.error('Error while fetching repos : ', error)
            })
    }, []);

    return (
        <div style={{ overflow: 'auto', height: '100vh' }}>
            <Box
                sx={{
                    backgroundImage: `url(${BackgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100vw',
                    minHeight: '100%',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column', // Display content in a column layout
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Navbar />
                <Container>
                    <Paper elevation={3} sx={{ padding: '20px', background: 'rgba(255, 255, 255, 0.9)', borderRadius: '10px', textAlign: 'center' }}>
                        {userData && (
                            <>
                                <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '20px', color: '#333' }}>
                                    My GitHub Statistics
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                    Username: {userData.login}
                                </Typography>
                                <Typography variant="body1" sx={{ marginBottom: '10px' }}>
                                    Bio: {userData.bio}
                                </Typography>
                                <Typography variant="body1" sx={{ marginBottom: '20px' }}>
                                    Public Repos: {userData.public_repos}
                                </Typography>
                                <Link href={userData.html_url} target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none', color: '#0077B5', fontWeight: 'bold' }}>
                                    View on GitHub
                                </Link>
                            </>
                        )}
                    </Paper>
                </Container>
                <Container mt={3}>
                    <Grid container spacing={3}>
                        {userRepos.map((repo) => (
                            <Grid item xs={12} sm={6} md={4} key={repo.id}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#333' }}>
                                            {repo.name}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            {repo.description}
                                        </Typography>
                                        <Link href={repo.html_url} target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none', color: '#0077B5', fontWeight: 'bold', marginTop: '10px', display: 'block' }}>
                                            View on GitHub
                                        </Link>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default ProjectStats;
