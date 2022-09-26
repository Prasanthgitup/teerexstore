import React from "react";
import { Button, Card } from "react-bootstrap";
import { useThemeHook } from "../GlobalComponents/ThemeProvider";
import { useCart } from "react-use-cart";
import { BsCartPlus } from "react-icons/bs";

const ProductCard = (props) => {
  let { imageURL, price, name } = props.data;
  const [theme] = useThemeHook();
  const { addItem } = useCart();

  const addToCart = () => {
    addItem(props.data);
  };
  return (
    <Card
      style={{ width: "18rem", height: "auto" }}
      className={`${
        theme ? "bg-light-black text-light" : "bg-lihgt text-black"
      } text-center p-0 overflow-hidden shadow mx-auto mb-4`}
    >
      
      <div
        style={{
          background: "white",
          height: "15rem",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "inherit",
        }}
      >
        <div style={{ width: "9rem" }}>
          <Card.Img variant="top" src={imageURL} className="img-fluid" />
        </div>
      </div>
      <Card.Body>
        <Card.Title
          style={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
            text: "top",
          }}
        >
          {name}
        </Card.Title>
        <Card.Title>
          Rs. <span className="h3">{price}</span>
        </Card.Title>
        <Button
          onClick={() => addToCart()}
          className={`${
            theme ? "bg-light-black text-light" : "bg-light-black text-light"
          } d-flex align-item-right m-auto border-0`}
        >
          <BsCartPlus size="1.8rem" />
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
