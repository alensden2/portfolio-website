import { Box, Typography } from '@mui/material';
import React from 'react';
import { animated, useTrail } from 'react-spring';
import BackgroundImage from '../assets/background.jpg';
import AwsIcon from '../assets/icons/AWS.svg';
import DockerIcon from '../assets/icons/Docker.svg';
import GCPIcon from '../assets/icons/GCP.svg';
import JsIcon from '../assets/icons/Js.svg';
import AngularIcon from '../assets/icons/angular.svg';
import HTMLIcon from '../assets/icons/html.svg';
import JavaIcon from '../assets/icons/java.svg';
import JenkinsIcon from '../assets/icons/jenkins.svg';
import JiraIcon from '../assets/icons/jira.svg';
import KubernetesIcon from '../assets/icons/kubernetes.svg';
import LinuxIcon from '../assets/icons/linux.svg';
import NoSQLIcon from '../assets/icons/noSQL.svg';
import PythonIcon from '../assets/icons/python.svg';
import ReactIcon from '../assets/icons/react.svg';
import SqlIcon from '../assets/icons/sql-svgrepo-com.svg';
import YamlIcon from '../assets/icons/yaml.png';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

export default function Skills() {
    const skills = [
        AngularIcon, SqlIcon, AwsIcon, DockerIcon, GCPIcon, HTMLIcon, JavaIcon,
        JenkinsIcon, JiraIcon, JsIcon, KubernetesIcon, LinuxIcon, NoSQLIcon,
        PythonIcon, ReactIcon, YamlIcon
    ];

    const trail = useTrail(skills.length, {
        from: { opacity: 0, transform: 'scale(0.8)' },
        to: { opacity: 1, transform: 'scale(1)' },
        config: { mass: 1, tension: 300, friction: 40 },
    });

    return (
        <Box>
            <Box
                style={{
                    backgroundImage: `url(${BackgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100vw',
                    minHeight: '100vh',
                    overflow: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Navbar />
                <Box
                    sx={{
                        color: 'white',
                        textAlign: 'center',
                        paddingTop: '80px',
                        fontFamily: "'Oswald', sans-serif",
                    }}
                >
                    <Typography
                        sx={{ fontSize: '4rem', paddingBottom: '20px', fontWeight: 'bold' }}
                        variant="h3"
                    >
                        Some of My Skills
                    </Typography>

                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 1fr)',
                            gap: '40px',
                            padding: '20px',
                        }}
                    >
                        {trail.map((props, index) => (
                            <animated.div
                                key={index}
                                style={{
                                    ...props,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width: '150px',
                                    height: '160px',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: 'rgba(255, 255, 255, 0.9)',
                                    borderRadius: '10px',
                                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                                    cursor: 'pointer',
                                    transition: 'transform 0.3s, box-shadow 0.3s',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.2)',
                                    },
                                }}
                            >
                                <img
                                    src={skills[index]}
                                    alt={`Skill ${index}`}
                                    style={{
                                        width: '100px',
                                        height: '90px',
                                        borderRadius: '10px',
                                    }}
                                />
                            </animated.div>
                        ))}
                    </div>
                </Box>
            </Box>
            <Box>
                <Footer />
            </Box>
        </Box>
    );
}