import React from "react";
import { Box, Typography, Grid, Link, Divider } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

function Footer() {
  return (
    <Box
      sx={{
        background: "linear-gradient(90deg, #1976d2 60%, #43cea2 100%)",
        color: "#fff",
        mt: 6,
        pt: 4,
        pb: 2,
        fontFamily: "Be Vietnam Pro, Arial, sans-serif",
      }}
    >
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="flex-start"
        sx={{
          maxWidth: 1200,
          mx: "auto",
          fontFamily: "Be Vietnam Pro, Arial, sans-serif",
        }}
      >
        <Grid item xs={12} md={4}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <SchoolIcon sx={{ fontSize: 36, mr: 1 }} />
            <Typography
              fontWeight={900}
              letterSpacing={2}
              sx={{
                fontFamily: "Be Vietnam Pro, Arial, sans-serif",
                fontSize: 28,
              }}
            >
              UniGuide
            </Typography>
          </Box>
          <Typography
            variant="body2"
            sx={{
              opacity: 0.9,
              fontFamily: "Be Vietnam Pro, Arial, sans-serif",
              fontSize: 15,
            }}
          >
            Cổng thông tin tra cứu điểm chuẩn, ngành học, tư vấn tuyển sinh đại
            học Việt Nam. <br></br>
            Phát triển bởi sinh viên Đại học FPT Đà Nẵng.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography
            variant="subtitle1"
            fontWeight={700}
            mb={1}
            sx={{
              fontFamily: "Be Vietnam Pro, Arial, sans-serif",
              fontSize: 18,
            }}
          >
            Liên kết nhanh
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
            <Link
              href="#"
              color="inherit"
              underline="hover"
              sx={{
                fontFamily: "Be Vietnam Pro, Arial, sans-serif",
                fontSize: 15,
              }}
            >
              <Typography
                sx={{
                  opacity: 0.9,
                  fontFamily: "Be Vietnam Pro, Arial, sans-serif",
                  fontSize: 15,
                }}
              >
                Xem đề án tuyển sinh
              </Typography>
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="hover"
              sx={{
                fontFamily: "Be Vietnam Pro, Arial, sans-serif",
                fontSize: 15,
              }}
            >
              <Typography
                sx={{
                  opacity: 0.9,
                  fontFamily: "Be Vietnam Pro, Arial, sans-serif",
                  fontSize: 15,
                }}
              >
                Xem điểm chuẩn Đại học
              </Typography>
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="hover"
              sx={{
                fontFamily: "Be Vietnam Pro, Arial, sans-serif",
                fontSize: 15,
              }}
            >
              <Typography
                sx={{
                  opacity: 0.9,
                  fontFamily: "Be Vietnam Pro, Arial, sans-serif",
                  fontSize: 15,
                }}
              >
                Công cụ tính điểm tốt nghiệp
              </Typography>
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="hover"
              sx={{
                fontFamily: "Be Vietnam Pro, Arial, sans-serif",
                fontSize: 15,
              }}
            >
              <Typography
                sx={{
                  opacity: 0.9,
                  fontFamily: "Be Vietnam Pro, Arial, sans-serif",
                  fontSize: 15,
                }}
              >
                Tư vấn tuyển sinh
              </Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography
            variant="subtitle1"
            fontWeight={700}
            mb={1}
            sx={{
              fontFamily: "Be Vietnam Pro, Arial, sans-serif",
              fontSize: 18,
            }}
          >
            Liên hệ
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Be Vietnam Pro, Arial, sans-serif",
              fontSize: 15,
            }}
          >
            Email: uniguide@fpt.edu.vn
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Be Vietnam Pro, Arial, sans-serif",
              fontSize: 15,
            }}
          >
            Hotline: 1800.1234
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Be Vietnam Pro, Arial, sans-serif",
              fontSize: 15,
            }}
          >
            Văn phòng: Phòng 405, Tầng 4, Tòa nhà Gammar, Đại học FPT Đà Nẵng
          </Typography>
        </Grid>
      </Grid>
      <Divider sx={{ my: 2, borderColor: "rgba(255,255,255,0.2)" }} />
      <Box
        sx={{
          textAlign: "center",
          fontSize: 13,
          opacity: 0.8,
          fontFamily: "Be Vietnam Pro, Arial, sans-serif",
        }}
      >
        © 2024 UniGuide. All rights reserved.
      </Box>
    </Box>
  );
}

export default Footer;
