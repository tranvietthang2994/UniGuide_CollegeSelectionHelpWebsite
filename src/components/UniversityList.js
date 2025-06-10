import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
  Chip,
} from "@mui/material";

function UniversityList({ filters, data }) {
  // Lọc ngành và điểm trước, gom lại các ngành phù hợp
  const rows = [];
  data.forEach((university) => {
    university.majors.forEach((major) => {
      const score = major.scores[filters.year];
      const matchRegion =
        !filters.region || university.region === filters.region;
      const matchUniversity =
        !filters.university ||
        university.name
          .toLowerCase()
          .includes(filters.university.toLowerCase());
      const matchMajor =
        !filters.major ||
        major.name.toLowerCase().includes(filters.major.toLowerCase());
      const matchScore =
        score !== null &&
        score !== undefined &&
        score >= filters.minScore &&
        score <= filters.maxScore;
      if (matchRegion && matchUniversity && matchMajor && matchScore) {
        rows.push({
          universityId: university.id,
          universityName: university.name,
          region: university.region,
          majorName: major.name,
          score,
          quota: major.quota,
        });
      }
    });
  });

  if (rows.length === 0) {
    return (
      <Box sx={{ textAlign: "center", py: 4 }}>
        <Typography variant="h6" color="text.secondary">
          Không tìm thấy kết quả phù hợp
        </Typography>
      </Box>
    );
  }

  return (
    <TableContainer
      component={Paper}
      sx={{ mt: 2, width: "100%", minWidth: 900, maxWidth: "100%" }}
    >
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Tên trường</TableCell>
            <TableCell>Khu vực</TableCell>
            <TableCell>Ngành học</TableCell>
            <TableCell>Điểm chuẩn ({filters.year})</TableCell>
            <TableCell>Chỉ tiêu</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => (
            <TableRow key={row.universityId + "-" + row.majorName}>
              <TableCell>{row.universityName}</TableCell>
              <TableCell>
                <Chip
                  label={row.region}
                  color="primary"
                  variant="outlined"
                  size="small"
                />
              </TableCell>
              <TableCell>{row.majorName}</TableCell>
              <TableCell>{row.score}</TableCell>
              <TableCell>{row.quota}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UniversityList;
