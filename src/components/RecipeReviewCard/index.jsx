import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { Button } from "@mui/material";
import "./RecipeReviewCard.css";

export default function RecipeReviewCard({ producto }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const onAddProduct = (product) => {
    if (producto.find((item) => item.id === product.id)) {
      const products = producto.map((item) =>
        item.id === product.id ? { ...item, cantidad: item.cantidad + 1 } : item
      );

      setTotal(total + product.precio * product.cantidad);
      setCountProducts(countProducts + product.cantidad);
      return setAllProducts([...products]);
    }

    setTotal(total + product.precio * product.cantidad);
    setCountProducts(countProducts + product.cantidad);
    setAllProducts([...producto, product]);
  };

  const onDeleteProduct = (product) => {
    const results = producto.filter((item) => item.id !== product.id);

    setTotal(total - product.precio * product.cantdad);
    setCountProducts(countProducts - product.cantidad);
    setAllProducts(results);
  };

  return (
    <Card sx={{ maxWidth: 450 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {producto.marca}
          </Avatar>
        }
        title={producto.nombre}
        subheader={producto.precio}
      />
      <CardMedia
        component="img"
        height="400"
        width="400"
        image={producto.img}
        alt="MPCIT"
      />
      <Button
        onClick={() => onDeleteProduct(producto.cantidad)}
        variant="outlined"
        startIcon={<DeleteIcon />}
      >
        Sacar
      </Button>
      <Button
        variant="contained"
        onClick={() => onAddProduct(producto.cantidad)}
        endIcon={<SendIcon />}
      >
        Agregar
      </Button>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {producto.marca}
        </Typography>
      </CardContent>
    </Card>
  );
}
