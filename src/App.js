import React from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import Header from "./components/Header";
import FilterSection from "./components/FilterSection";
import UniversityList from "./components/UniversityList";
import { universitiesData } from "./data/universitiesData";
import Footer from "./components/Footer";

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
          <>
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              align="center"
              sx={{
                mb: 2,
                fontWeight: 900,
                color: "#1976d2",
                letterSpacing: 2,
                fontFamily: "Be Vietnam Pro, Arial, sans-serif",
              }}
            >
              Thống Kê Điểm Thi Đại Học Việt Nam
            </Typography>
            <FilterSection
              filters={filters}
              onFilterChange={handleFilterChange}
            />
            <UniversityList filters={filters} data={universitiesData} />
          </>
        )}
        {page === "news" && (
          <Box sx={{ py: 4 }}>
            <Typography
              variant="h4"
              align="center"
              fontWeight={900}
              color="#1976d2"
              mb={3}
              sx={{ fontFamily: "Be Vietnam Pro, Arial, sans-serif" }}
            >
              Tin tức tuyển sinh mới nhất
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    p: 2,
                    bgcolor: "#e3f0ff",
                    borderRadius: 3,
                    boxShadow: 2,
                  }}
                >
                  <Typography variant="h6" fontWeight={700}>
                    Điểm chuẩn đại học 2024 tăng nhẹ ở nhiều ngành hot
                  </Typography>
                  <Typography variant="body2" mt={1}>
                    Theo thống kê, điểm chuẩn các ngành CNTT, Kinh tế, Y dược
                    năm 2024 có xu hướng tăng nhẹ so với năm trước...
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    p: 2,
                    bgcolor: "#e3f0ff",
                    borderRadius: 3,
                    boxShadow: 2,
                  }}
                >
                  <Typography variant="h6" fontWeight={700}>
                    Bộ GD&ĐT công bố lịch thi tốt nghiệp THPT 2024
                  </Typography>
                  <Typography variant="body2" mt={1}>
                    Kỳ thi tốt nghiệp THPT năm 2024 sẽ diễn ra vào cuối tháng 6
                    với nhiều điểm mới về hình thức xét tuyển...
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    p: 2,
                    bgcolor: "#e3f0ff",
                    borderRadius: 3,
                    boxShadow: 2,
                  }}
                >
                  <Typography variant="h6" fontWeight={700}>
                    Top ngành học xu hướng năm 2024
                  </Typography>
                  <Typography variant="body2" mt={1}>
                    Các ngành như Trí tuệ nhân tạo, Khoa học dữ liệu, Logistics
                    tiếp tục thu hút nhiều thí sinh đăng ký...
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        )}
        {page === "review" && (
          <Box sx={{ py: 4 }}>
            <Typography
              variant="h4"
              align="center"
              fontWeight={900}
              color="#1976d2"
              mb={3}
              sx={{ fontFamily: "Be Vietnam Pro, Arial, sans-serif" }}
            >
              Review các trường đại học nổi bật
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    p: 2,
                    bgcolor: "#f8fcff",
                    borderRadius: 3,
                    boxShadow: 1,
                  }}
                >
                  <Typography variant="h6" fontWeight={700}>
                    Đại học Bách Khoa Hà Nội
                  </Typography>
                  <Typography variant="body2" mt={1}>
                    Trường có truyền thống đào tạo kỹ thuật hàng đầu, cơ sở vật
                    chất hiện đại, môi trường học tập năng động...
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    p: 2,
                    bgcolor: "#f8fcff",
                    borderRadius: 3,
                    boxShadow: 1,
                  }}
                >
                  <Typography variant="h6" fontWeight={700}>
                    Đại học Ngoại thương
                  </Typography>
                  <Typography variant="body2" mt={1}>
                    Nổi bật với các ngành kinh tế, ngoại ngữ, môi trường học tập
                    năng động, nhiều cơ hội giao lưu quốc tế...
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        )}
        {page === "ai" && (
          <Box sx={{ py: 4, textAlign: "center" }}>
            <Typography
              variant="h4"
              fontWeight={900}
              color="#1976d2"
              mb={3}
              sx={{ fontFamily: "Be Vietnam Pro, Arial, sans-serif" }}
            >
              Tư vấn chọn ngành, trường bằng AI
            </Typography>
            <Typography variant="body1" mb={2}>
              Bạn hãy nhập điểm thi, sở thích, khu vực... để nhận gợi ý ngành
              học, trường phù hợp từ UniGuide AI!
            </Typography>
            <Box
              sx={{
                display: "inline-block",
                p: 3,
                bgcolor: "#e3f0ff",
                borderRadius: 3,
                boxShadow: 2,
              }}
            >
              <Typography variant="body2" color="#1976d2">
                (Tính năng demo, nhóm sẽ thể phát triển thêm...)
              </Typography>
            </Box>
          </Box>
        )}
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
