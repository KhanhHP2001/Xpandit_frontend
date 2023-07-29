import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./payment.scss";
import { useNavigate } from "react-router-dom";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { useState } from "react";
import {
  TransactionEntity,
  useSubmitTransaction,
} from "../../data/mutation/payment/payment-mutation";

enum paymentType {
  standard = "499000",
  premium = "999000",
  luxury = "1299000",
}

export default function MediaCard() {
  const navigation = useNavigate();
  const [status, setStatus] = useState("");
  const { mutateAsync: submitMutate } = useSubmitTransaction();
  const handlePaymentParams = (): TransactionEntity => {
    const id = localStorage.getItem("id");
    const parseId = id ? JSON.parse(id) : "";
    console.log("id", id);

    switch (status) {
      case paymentType.standard:
        return {
          name: "Standard",
          price: 499000,
          user: parseId,
          bonus_month: 0,
        };
      case paymentType.premium:
        return {
          name: "Premium",
          price: 999000,
          user: parseId,
          bonus_month: 2,
        };
      case paymentType.luxury:
        return {
          name: "Luxury",
          price: 1299000,
          user: parseId,
          bonus_month: 3,
        };
      default:
        return { name: "", price: 0, user: "", bonus_month: 0 };
    }
  };

  const handleSubmitPayment = async () => {
    try {
      if (status) {
        const response = await submitMutate(handlePaymentParams());
        console.log(response);
        navigation("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="payment">
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Thanh Toán
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ marginBottom: 10 }}
          >
            Quý khách vui lòng chọn gói thanh toán và thanh toán cho chúng tôi
            thông qua dịch vụ momo bằng mã QR dưới đây, xin chân thành cảm ơn
          </Typography>
          <FormControl fullWidth margin="dense">
            <InputLabel id="dropdown-label">Chọn gói dịch vụ</InputLabel>
            <Select
              labelId="dropdown-label"
              id="dropdown"
              value={status}
              onChange={(e) => {
                setStatus(e.target.value);
              }}
              label="Select an status"
            >
              <MenuItem value={paymentType.standard}>
                Standard - 499.000 VNĐ
              </MenuItem>
              <MenuItem value={paymentType.premium}>
                Premium - 999.000 VNĐ
              </MenuItem>
              <MenuItem value={paymentType.luxury}>
                LUX - 1.299.000 VNĐ
              </MenuItem>
            </Select>
          </FormControl>
          {status == paymentType.standard && (
            <div>
              <CardMedia
                sx={{ height: 300 }}
                image="https://homepage.momocdn.net/blogscontents/momo-upload-api-220810110042-637957260425550228.webp"
                title="standard QR"
              />
              <Typography variant="body2" color="text.secondary">
                Gói Standard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Thời hạn: 1 tháng
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Bonus Tháng: 0 tháng
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Giá tiền: 499.000 vnd
              </Typography>
            </div>
          )}
          {status == paymentType.premium && (
            <div>
              <CardMedia
                sx={{ height: 300 }}
                image="https://homepage.momocdn.net/blogscontents/momo-upload-api-220810110042-637957260425550228.webp"
                title="standard QR"
              />
              <Typography variant="body2" color="text.secondary">
                Gói Premium
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Thời hạn: 3 tháng
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Bonus Tháng: 2 tháng
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Giá tiền: 999.000 vnd
              </Typography>
            </div>
          )}
          {status == paymentType.luxury && (
            <div>
              <CardMedia
                sx={{ height: 300 }}
                image="https://homepage.momocdn.net/blogscontents/momo-upload-api-220810110042-637957260425550228.webp"
                title="standard QR"
              />
              <Typography variant="body2" color="text.secondary">
                Gói Luxury
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Thời hạn: 6 tháng
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Bonus Tháng: 3 tháng
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Giá tiền: 1.299.000 vnd
              </Typography>
            </div>
          )}
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => {
              navigation(-1);
            }}
          >
            Quay trở lại
          </Button>
          <Button size="small" onClick={handleSubmitPayment}>
            Xác Nhận Thanh Toán
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
