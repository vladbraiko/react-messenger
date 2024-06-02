import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMessage } from '../../redux/messagesSlice';
import { TextField, Button, Box } from '@mui/material';
import './messageInput.css';

function MessageInput() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (!message) return;
    dispatch(addMessage(message));
    setMessage('');
  };

  return (
    <Box className="input-container">
      <TextField
        value={message}
        onChange={e => setMessage(e.target.value)}
        variant="outlined"
        label="Type a message"
        size="small"
        className="input-field"
      />
      <Button
        onClick={handleSubmit}
        variant="contained"
        className="send-button"
      >
        Send
      </Button>
    </Box>
  );
}

export default MessageInput;
