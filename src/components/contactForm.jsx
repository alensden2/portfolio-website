import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';

export default function ContactForm() {
    return (
        <Box
            sx={{
                maxWidth: '400px',
                margin: '0 auto',
                padding: '20px',
                border: '1px solid #ccc',
                borderRadius: '10px',
                backgroundColor: '#f7f7f7',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            }}
        >
            <Typography variant="h5"
                sx={{
                    color: 'black', fontSize: '2.2rem', padding: '10px',
                    fontWeight: 'bold',
                    fontFamily: "'Oswald', sans-serif", marginBottom: '20px'
                }}
            >
                Contact Me
            </Typography>
            <form>
                <TextField
                    label="Subject"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    sx={{ marginBottom: '20px' }}
                />
                <TextField
                    label="Message"
                    fullWidth
                    multiline
                    rows={5}
                    variant="outlined"
                    margin="normal"
                    sx={{ marginBottom: '20px' }}
                />
                <Button
                    sx={{
                        fontFamily: "'Oswald', sans-serif",
                        fontWeight: 'bold',
                        backgroundColor: '#007bff',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: '#0056b3',
                        },
                    }}
                    type="submit"
                    variant="contained"
                >
                    Send
                </Button>
            </form>
        </Box>
    );
}
