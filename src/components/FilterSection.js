import React from "react";
import {
  Paper,
  Grid,
  TextField,
  MenuItem,
  Slider,
  Typography,
  Box,
} from "@mui/material";

const regions = ["Miền Bắc", "Miền Trung", "Miền Nam"];

const years = [2018, 2019, 2020, 2021, 2022, 2023, 2024];

function FilterSection({ filters, onFilterChange }) {
  const handleChange = (field) => (event) => {
    onFilterChange({
      ...filters,
      [field]: event.target.value,
    });
  };

  const handleScoreChange = (field) => (event, newValue) => {
    onFilterChange({
      ...filters,
      [field]: newValue,
    });
  };

  return (
    <Paper sx={{ p: 2, mb: 2 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6} md={2.4}>
          <TextField
            select
            fullWidth
            size="small"
            label="Khu vực"
            value={filters.region}
            onChange={handleChange("region")}
          >
            <MenuItem value="">Tất cả</MenuItem>
            {regions.map((region) => (
              <MenuItem key={region} value={region}>
                {region}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={2.4}>
          <TextField
            fullWidth
            size="small"
            label="Tên trường"
            value={filters.university}
            onChange={handleChange("university")}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2.4}>
          <TextField
            fullWidth
            size="small"
            label="Ngành học"
            value={filters.major}
            onChange={handleChange("major")}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2.4}>
          <TextField
            select
            fullWidth
            size="small"
            label="Năm"
            value={filters.year}
            onChange={handleChange("year")}
          >
            {years.map((year) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={2.4}>
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Typography variant="body2">Điểm</Typography>
            <Slider
              value={[filters.minScore, filters.maxScore]}
              onChange={(e, newValue) =>
                onFilterChange({
                  ...filters,
                  minScore: newValue[0],
                  maxScore: newValue[1],
                })
              }
              min={0}
              max={30}
              step={0.01}
              valueLabelDisplay="auto"
              sx={{ width: "100%" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default FilterSection;
