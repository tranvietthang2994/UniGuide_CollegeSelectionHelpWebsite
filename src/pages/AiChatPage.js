import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Typography,
  Paper,
  TextField,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Avatar,
  CircularProgress,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import axios from "axios";

function AiChatPage() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Xin chào! Tôi là UniGuide AI. Bạn cần tư vấn gì về ngành học, trường đại học?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() === "") return;
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/chat", {
        message: "Hãy trả lời ngắn gọn, tối đa 3-4 câu. " + input,
      });
      const reply = response.data.reply.trim();
      setMessages((msgs) => [...msgs, { sender: "bot", text: reply }]);
    } catch (err) {
      setMessages((msgs) => [
        ...msgs,
        {
          sender: "bot",
          text: "Xin lỗi, hiện tại AI không thể trả lời. Vui lòng thử lại sau.",
        },
      ]);
    }
    setLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        fontWeight={900}
        color="#1976d2"
        mb={3}
        sx={{ fontFamily: "Be Vietnam Pro, Arial, sans-serif" }}
      >
        Tư vấn chọn ngành, trường bằng AI
      </Typography>
      <Paper
        sx={{
          width: "100%",
          maxWidth: 800,
          minHeight: 500,
          p: 2,
          mb: 2,
          display: "flex",
          flexDirection: "column",
          bgcolor: "#f8fcff",
          borderRadius: 3,
          boxShadow: 2,
        }}
      >
        <List sx={{ flex: 1, overflowY: "auto", mb: 1 }}>
          {messages.map((msg, idx) => (
            <ListItem
              key={idx}
              sx={{
                justifyContent:
                  msg.sender === "user" ? "flex-end" : "flex-start",
              }}
            >
              {msg.sender === "bot" && (
                <Avatar sx={{ bgcolor: "#1976d2", mr: 1 }}>
                  <SmartToyIcon />
                </Avatar>
              )}
              <ListItemText
                primary={msg.text}
                sx={{
                  maxWidth: 520,
                  bgcolor: msg.sender === "user" ? "#43cea2" : "#e3f0ff",
                  color: msg.sender === "user" ? "#fff" : "#1976d2",
                  borderRadius: 2,
                  px: 2,
                  py: 1,
                  textAlign: msg.sender === "user" ? "right" : "left",
                  fontFamily: "Be Vietnam Pro, Arial, sans-serif",
                }}
              />
              {msg.sender === "user" && (
                <Avatar sx={{ bgcolor: "#43cea2", ml: 1 }}>U</Avatar>
              )}
            </ListItem>
          ))}
          <div ref={chatEndRef} />
        </List>
        <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
          <TextField
            fullWidth
            size="small"
            placeholder="Nhập câu hỏi..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            sx={{ fontFamily: "Be Vietnam Pro, Arial, sans-serif" }}
            disabled={loading}
          />
          <IconButton
            color="primary"
            onClick={handleSend}
            sx={{ ml: 1 }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : <SendIcon />}
          </IconButton>
        </Box>
      </Paper>
      <Typography variant="body2" color="#1976d2">
        (AI thực thụ, hỗ trợ tư vấn ngành học, trường đại học phù hợp!)
      </Typography>
    </Box>
  );
}

export default AiChatPage;
