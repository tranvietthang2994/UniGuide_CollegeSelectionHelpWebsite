import React from "react";
import { Typography } from "@mui/material";
import FilterSection from "../components/FilterSection";
import UniversityList from "../components/UniversityList";

function HomePage({ filters, onFilterChange, universitiesData }) {
  return (
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
      <FilterSection filters={filters} onFilterChange={onFilterChange} />
      <UniversityList filters={filters} data={universitiesData} />
    </>
  );
}

export default HomePage;
