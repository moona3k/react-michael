import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields({ email, setEmail }) {
    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
        >
            <TextField
                label="email"
                variant="filled"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
            />
        </Box>
    );
}
