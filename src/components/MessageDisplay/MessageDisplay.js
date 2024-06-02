import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeMessage } from '../../redux/messagesSlice';
import { List, ListItem, ListItemText } from '@mui/material';
import './messageDisplay.css';

function MessageDisplay() {
  const dispatch = useDispatch();
  const messages = useSelector(state => state.messages);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    messages.forEach(message => {
      setTimeout(() => {
        dispatch(removeMessage(message.id));
      }, 5000);
    });
    scrollToBottom();
  }, [messages, dispatch]);

  return (
    <List className="list">
      {messages.map((message, index) => (
        <ListItem key={message.id} className="list-item">
          <div className="message-content">
            <ListItemText primary={message.text} />
          </div>
        </ListItem>
      ))}
      <div ref={messagesEndRef} />
    </List>
  );
}

export default MessageDisplay;
