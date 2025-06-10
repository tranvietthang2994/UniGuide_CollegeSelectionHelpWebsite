import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

const reviewList = [
  {
    school: "Đại học Bách Khoa Hà Nội",
    img: "https://cdn-images.vtv.vn/zoom/640_400/2020/4/15/bach-khoa-15869492239691046997344.jpg",
    desc: "Trường kỹ thuật hàng đầu, cơ sở vật chất hiện đại, môi trường học tập năng động.",
  },
  {
    school: "Đại học Ngoại thương",
    img: "https://file.qdnd.vn/data/images/0/2020/05/05/thuha/050520h1.png?dpi=150&quality=100&w=575",
    desc: "Nổi bật với các ngành kinh tế, ngoại ngữ, nhiều cơ hội giao lưu quốc tế.",
  },
  {
    school: "Đại học Kinh tế Quốc dân",
    img: "https://cdn-i.vtcnews.vn/upload/2025/01/03/screen-shot-2025-01-03-at-65403-pm-18545744.png",
    desc: "Trường đào tạo kinh tế hàng đầu, hoạt động ngoại khóa sôi nổi.",
  },
  {
    school: "Đại học FPT",
    img: "https://daihoc.fpt.edu.vn/wp-content/uploads/2024/03/dai-hoc-fpt-da-nang-2.jpeg",
    desc: "Cơ sở vật chất hiện đại, chương trình đào tạo sát thực tế, nhiều hoạt động sáng tạo.",
  },
  {
    school: "Đại học Y Hà Nội",
    img: "https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2024/1/15/b-17053351032821357626068.jpg",
    desc: "Trường đào tạo y khoa uy tín, đội ngũ giảng viên giàu kinh nghiệm.",
  },
  {
    school: "Đại học Bách Khoa TP.HCM",
    img: "https://eduhub.vn/wp-content/uploads/2025/05/dai-hoc-bach-khoa-tphcm-1.jpg",
    desc: "Trường kỹ thuật lớn nhất phía Nam, nhiều hoạt động nghiên cứu khoa học.",
  },
  {
    school: "Đại học Khoa học Tự nhiên TP.HCM",
    img: "https://vcdn1-vnexpress.vnecdn.net/2023/08/22/KHTN-Co-so-2-650x450-3610-1692695643.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=82Ugp7RHCzNefJav19PXfw",
    desc: "Môi trường học tập năng động, nhiều câu lạc bộ học thuật.",
  },
  {
    school: "Đại học Cần Thơ",
    img: "https://dntt.mediacdn.vn/197608888129458176/2024/5/31/picture1-17171710449401461828110.png",
    desc: "Trường đại học trọng điểm vùng Đồng bằng sông Cửu Long, nhiều hoạt động cộng đồng.",
  },
  {
    school: "Đại học Sư phạm Hà Nội",
    img: "https://congdoangdvn.org.vn/Uploaded/images/CT%20n%C6%B0%E1%BB%9Bc%20trao%20HCL%C4%90%20h%E1%BA%A1ng%20Nh%E1%BA%A5t%20cho%20tr%C6%B0%E1%BB%9Dng.JPG",
    desc: "Trường đào tạo giáo viên uy tín, môi trường thân thiện.",
  },
  {
    school: "Đại học Luật TP.HCM",
    img: "https://cdn.tgdd.vn/Files/2016/06/17/843101/hcmulaw-2_1280x720-800-resize.jpg",
    desc: "Chương trình đào tạo thực tiễn, nhiều cơ hội thực tập tại các tổ chức pháp lý.",
  },
  {
    school: "Đại học Kinh tế TP.HCM",
    img: "https://cdnphoto.dantri.com.vn/vaRgIJCyMHmkweAYmu_rvrmqLvU=/thumb_w/1020/2024/08/17/dai-hoc-kinh-te-tphcm-huyen-nguyen-crop-1723902197412.jpeg",
    desc: "Trường kinh tế hàng đầu phía Nam, nhiều hoạt động ngoại khóa.",
  },
  {
    school: "Đại học Đà Nẵng",
    img: "https://cdn.nhandan.vn/images/d233c8299c7755bbf317d96e7a85fcf7cb570f46b50ef8651dd5f937f3d6c804c95e50e23f862ec401477bb5ca30a04d5cfacd5ee898d181029010948d9846a0/1A-1644123894035.jpg",
    desc: "Trường đại học đa ngành lớn nhất miền Trung, môi trường học tập hiện đại.",
  },
];

function ReviewPage() {
  return (
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
        {reviewList.map((review, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card sx={{ borderRadius: 3, boxShadow: 2, height: "100%" }}>
              <CardMedia
                component="img"
                height="180"
                image={review.img}
                alt={review.school}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  fontWeight={700}
                  sx={{ fontFamily: "Be Vietnam Pro, Arial, sans-serif" }}
                >
                  {review.school}
                </Typography>
                <Typography variant="body2" mt={1}>
                  {review.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ReviewPage;
