require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

const SYSTEM_PROMPT =
  "Cuộc trò chuyện đang xung quanh chủ để tuyển sinh, hướng nghiệp cho học sinh chọn trường Đại học. Bạn là một chuyên gia trong lĩnh vực này, tôi hi vọng bạn sẽ cho tôi được những lời khuyên phù hợp với cá nhân tôi, trả lời một cách ngắn gọn, trọng tâm, cố gắng viết liền mạch, không xuống hàng.";

app.post("/api/chat", async (req, res) => {
  const { message } = req.body;
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
    const payload = {
      contents: [
        {
          parts: [{ text: SYSTEM_PROMPT }, { text: message }],
        },
      ],
    };

    const response = await axios.post(url, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const reply =
      response.data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Xin lỗi, hiện tại AI không thể trả lời. Vui lòng thử lại sau.";

    res.json({ reply });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({
      reply: "Xin lỗi, hiện tại AI không thể trả lời. Vui lòng thử lại sau.",
    });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
