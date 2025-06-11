import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

const newsList = [
  {
    title: "Điểm chuẩn đại học 2024 tăng nhẹ ở nhiều ngành hot",
    img: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80",
    desc: "Theo thống kê, điểm chuẩn các ngành CNTT, Kinh tế, Y dược năm 2024 có xu hướng tăng nhẹ so với năm trước...",
  },
  {
    title: "Bộ GD&ĐT công bố lịch thi tốt nghiệp THPT 2024",
    img: "https://bcp.cdnchinhphu.vn/zoom/600_315/334894974524682240/2023/8/15/367255891-796153398964842-5862594460979808801-n-4771-16920660726201694261827-28-0-1278-2000-crop-1692066169947691723670.jpg",
    desc: "Kỳ thi tốt nghiệp THPT năm 2024 sẽ diễn ra vào cuối tháng 6 với nhiều điểm mới về hình thức xét tuyển...",
  },
  {
    title: "Top ngành học xu hướng năm 2024",
    img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80",
    desc: "Các ngành như Trí tuệ nhân tạo, Khoa học dữ liệu, Logistics tiếp tục thu hút nhiều thí sinh đăng ký...",
  },
  {
    title: "Học phí các trường đại học năm 2024 thay đổi ra sao?",
    img: "https://image3.luatvietnam.vn/uploaded/images/original/2024/05/14/hoc-phi-cac-truong-dai-hoc_1405221207.jpg",
    desc: "Nhiều trường đại học công bố mức học phí mới, có trường tăng nhẹ, có trường giữ ổn định...",
  },
  {
    title: "Cách chọn ngành phù hợp với bản thân",
    img: "https://duhocvic.com/wp-content/uploads/2019/07/hoc-nganh-gi.png",
    desc: "Chọn ngành học phù hợp là yếu tố quan trọng giúp sinh viên phát triển lâu dài...",
  },
  {
    title: "Các trường đại học mở thêm nhiều ngành mới năm 2024",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    desc: "Nhiều trường mở thêm ngành mới như Khoa học dữ liệu, An ninh mạng, Công nghệ sinh học...",
  },
  {
    title: "Xu hướng du học tự túc tăng mạnh sau đại dịch",
    img: "https://aloha.edu.vn/wp-content/uploads/2023/11/Du-hoc-la-gi-_-3.jpg",
    desc: "Nhiều học sinh, sinh viên lựa chọn du học tự túc tại các nước phát triển...",
  },
  {
    title: "Bí quyết ôn thi đại học hiệu quả",
    img: "https://ngoaingucongnghe.vn/wp-content/uploads/2024/04/Thoi-gian-nao-bo-ghi-nho-nhanh-chong-va-hieu-qua-nhat.jpg",
    desc: "Lên kế hoạch học tập, luyện đề, giữ sức khỏe là những bí quyết giúp ôn thi hiệu quả...",
  },
  {
    title: "Các trường đại học top đầu công bố chỉ tiêu tuyển sinh 2024",
    img: "https://westlink.edu.vn/wp-content/uploads/2023/10/truongdaihocquoctetaihanoi.jpg",
    desc: "Nhiều trường top đầu như Bách Khoa, Ngoại Thương, Kinh tế Quốc dân đã công bố chỉ tiêu tuyển sinh...",
  },
  {
    title: "Học bổng du học năm 2024: Cơ hội và thách thức",
    img: "https://cdn-media.sforum.vn/storage/app/media/ctv_seo10/top-10-truong-dai-hoc-tot-nhat-viet-nam-thumb.jpg",
    desc: "Nhiều chương trình học bổng hấp dẫn dành cho sinh viên Việt Nam năm 2024...",
  },
  {
    title: "Tư vấn chọn trường đại học phù hợp năng lực",
    img: "https://yviet.edu.vn/uploads/images/hoc-dai-hoc2.png",
    desc: "Chọn trường phù hợp giúp sinh viên phát huy tối đa năng lực bản thân...",
  },
  {
    title: "Các mốc thời gian quan trọng mùa tuyển sinh 2024",
    img: "https://media.kenhtuyensinh.vn/images/cms/2020/05/tuyen-sinh-2020.jpg",
    desc: "Thí sinh cần lưu ý các mốc thời gian đăng ký, xét tuyển, nhập học năm 2024...",
  },
];

function NewsPage() {
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
        Tin tức tuyển sinh mới nhất
      </Typography>
      <Grid container spacing={3}>
        {newsList.map((news, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card sx={{ borderRadius: 3, boxShadow: 2, height: "100%" }}>
              <CardMedia
                component="img"
                height="180"
                image={news.img}
                alt={news.title}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  fontWeight={700}
                  sx={{ fontFamily: "Be Vietnam Pro, Arial, sans-serif" }}
                >
                  {news.title}
                </Typography>
                <Typography variant="body2" mt={1}>
                  {news.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default NewsPage;
