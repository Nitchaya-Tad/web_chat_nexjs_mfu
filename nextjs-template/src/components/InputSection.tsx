'use client';

import { Box, TextField, Button, Paper, Typography } from '@mui/material';
import { Send, Delete } from '@mui/icons-material';

export default function InputSection() {
  return (
    <Paper elevation={0} sx={{ p: 4, borderRadius: 4, border: '1px solid', borderColor: 'divider', background: 'white' }}>
        <Typography variant="h6" gutterBottom sx={{ color: 'text.primary', fontWeight: 600 }}>
            Material Design Input
        </Typography>
      <Box component="form" noValidate autoComplete="off" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <TextField 
          label="Your Input" 
          variant="outlined" 
          fullWidth 
          placeholder="Type something..."
        />
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="contained" size="large" endIcon={<Send />} disableElevation>
            Submit
          </Button>
           <Button variant="outlined" size="large" startIcon={<Delete />} color="error">
            Clear
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
