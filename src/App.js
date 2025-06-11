import React from "react";
import { Container, Box } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { universitiesData } from "./data/universitiesData";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import ReviewPage from "./pages/ReviewPage";
import AiChatPage from "./pages/AiChatPage";

function App() {
  const [filters, setFilters] = React.useState({
    region: "",
    university: "",
    major: "",
    year: 2024,
    minScore: 0,
    maxScore: 30,
  });
  const [page, setPage] = React.useState("home");

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header currentPage={page} onChangePage={handleChangePage} />
      <Container maxWidth="lg" sx={{ py: 2, flex: 1 }}>
        {page === "home" && (
          <HomePage
            filters={filters}
            onFilterChange={handleFilterChange}
            universitiesData={universitiesData}
          />
        )}
        {page === "news" && <NewsPage />}
        {page === "review" && <ReviewPage />}
        {page === "ai" && <AiChatPage />}
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
