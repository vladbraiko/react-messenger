import * as React from 'react';
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Avatar,
  Badge,
} from '@mui/material';
import MessageInput from '../MessageInput/MessageInput';
import MessageDisplay from '../MessageDisplay/MessageDisplay';
import './chat.css';
import logo from '../../assets/logo.png';
function Chat() {
  return (
    <Box className="chat-container">
      <Card className="chat-card">
        <CardHeader
          title={
            <Box className="chat-title">
              <Typography variant="h6" className="chat-title-text">
                Chat
              </Typography>
            </Box>
          }
          action={
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
              color="success"
              sx={{
                '.MuiBadge-dot': {
                  width: 15,
                  height: 15,
                  border: '2.5px solid white',
                },
              }}
            >
              <Avatar className="avatar" src={logo}></Avatar>
            </Badge>
          }
          className="chat-header"
        />
        <CardContent className="card-content">
          <MessageDisplay />
        </CardContent>
        <CardActions>
          <MessageInput />
        </CardActions>
      </Card>
    </Box>
  );
}

export default Chat;
