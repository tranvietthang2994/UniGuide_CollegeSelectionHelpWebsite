import React from "react";
import { AppBar, Toolbar, Typography, Box, Tabs, Tab } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

const pages = [
  { label: "Trang chủ", value: "home" },
  { label: "Tin tức", value: "news" },
  { label: "Review trường", value: "review" },
  { label: "Tư vấn AI", value: "ai" },
];

function Header({ currentPage = "home", onChangePage }) {
  const [tab, setTab] = React.useState(currentPage);
  const handleTabChange = (e, newValue) => {
    setTab(newValue);
    if (onChangePage) onChangePage(newValue);
  };
  return (
    <AppBar
      position="static"
      color="primary"
      elevation={2}
      sx={{
        background: "linear-gradient(90deg, #1976d2 60%, #43cea2 100%)",
        fontFamily: "Montserrat, Arial, sans-serif",
      }}
    >
      <Toolbar sx={{ minHeight: 64 }}>
        <SchoolIcon sx={{ mr: 1, fontSize: 36, color: "#fff" }} />
        <Typography
          variant="h4"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: 900,
            letterSpacing: 2,
            color: "transparent",
            background: "linear-gradient(90deg, #fff 30%, #43cea2 70%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "Montserrat, Arial, sans-serif",
            textShadow: "1px 2px 8px #1976d2",
            animation: "wave 2.5s infinite linear",
            "@keyframes wave": {
              "0%": { letterSpacing: 2, textShadow: "1px 2px 8px #1976d2" },
              "50%": { letterSpacing: 6, textShadow: "0 4px 16px #43cea2" },
              "100%": { letterSpacing: 2, textShadow: "1px 2px 8px #1976d2" },
            },
          }}
        >
          UniGuide
        </Typography>
        <Tabs
          value={tab}
          onChange={handleTabChange}
          textColor="inherit"
          indicatorColor="secondary"
          sx={{
            minHeight: 40,
            "& .MuiTab-root": {
              fontWeight: 600,
              fontSize: 18,
              color: "#fff",
              fontFamily: "Montserrat, Arial, sans-serif",
              transition: "0.2s",
              mx: 1,
            },
            "& .Mui-selected": {
              color: "#43cea2",
              textShadow: "0 2px 8px #fff",
            },
            "& .MuiTabs-indicator": { background: "#fff" },
          }}
        >
          {pages.map((page) => (
            <Tab
              key={page.value}
              label={page.label}
              value={page.value}
              sx={{ minHeight: 40 }}
            />
          ))}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
