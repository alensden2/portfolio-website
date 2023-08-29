import React from 'react';
import Navbar from '../components/navbar';
import BackgroundImage from '../assets/background.jpg';
import ProfileImage from '../assets/Aj.jpeg';
import { Box, Typography } from '@mui/material';
import AngularIcon from '../assets/icons/angular.svg';
import AwsIcon from '../assets/icons/AWS.svg';
import DockerIcon from '../assets/icons/Docker.svg';
import GCPIcon from '../assets/icons/GCP.svg';
import HTMLIcon from '../assets/icons/html.svg';
import JavaIcon from '../assets/icons/java.svg';
import JenkinsIcon from '../assets/icons/jenkins.svg';
import JiraIcon from '../assets/icons/jira.svg';
import JsIcon from '../assets/icons/Js.svg';
import KubernetesIcon from '../assets/icons/kubernetes.svg';
import LinuxIcon from '../assets/icons/linux.svg';
import NoSQLIcon from '../assets/icons/noSQL.svg';
import PythonIcon from '../assets/icons/python.svg';
import ReactIcon from '../assets/icons/react.svg';
import SqlIcon from '../assets/icons/sql-svgrepo-com.svg';
import YamlIcon from '../assets/icons/yaml.png';

export default function Skills() {
    const skills = [
        AngularIcon, SqlIcon, AwsIcon, DockerIcon, GCPIcon, HTMLIcon, JavaIcon,
        JenkinsIcon, JiraIcon, JsIcon, KubernetesIcon, LinuxIcon, NoSQLIcon,
        PythonIcon, ReactIcon, YamlIcon
    ];

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
                <Typography sx={{ fontSize: '7rem', padding: '20px', padding: '40px' }} variant="h3">Skills</Typography>
                <Typography sx={{ fontFamily: "'Victor Mono', monospace", padding: '20px' }} variant="h3">
                    Frameworks
                </Typography>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)', 
                        gap: '20px', 
                        background: 'white',
                        padding: '20px', 
                        borderRadius: '10px', 
                    }}
                >
                    {skills.map((icon, index) => (
                        <img
                            key={index}
                            src={icon}
                            alt={`Skill ${index}`}
                            style={{
                                width: '50px', 
                                height: '50px',
                            }}
                        />
                    ))}
                </div>
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
