import { Box } from '@mui/material';
import React from 'react';

const Message = ({ message, type = 'error' }) => {
  let msgColor = '#FF7871'; // Default color for error messages

  if (type === 'success') {
    msgColor = '#76DC76'; // Change color for success messages
  }

  return (
    <Box
      sx={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -400%)',
        padding: '20px',
        backgroundColor: msgColor, // Use determined color directly
        color: 'white',
        borderRadius: '5px',
        zIndex: 9999,
      }}
    >
      {message}
    </Box>
  );
};

export default Message;
