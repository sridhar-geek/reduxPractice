import { Box, Divider, Button, Typography, styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

// imports from another files
import CartItem from "./CartItem";
import { openDialog } from "../Redux/DialogSlice";
//component Styles
const Container = styled(Box)`
  background-color: #9fb7cc;
  margin: 30px auto;
  text-align: center;
  width: 500px;
  min-height: 400px;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 10px 10px 10px hsla(0, 0%, 0%, 0.5);
`;
const CartContainer = () => {
  const dispatch = useDispatch();
  const { items, total,amount } = useSelector((store) => store.cart);

  if (amount < 1) {
    return (
      <Container>
        <Typography variant="h4" fontFamily="monospace">
          Your Cart is Empty
        </Typography>
        <Typography marginTop="30px" variant="h6">
          Please add some Products{" "}
        </Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" fontFamily="monospace">
        Your Bag
      </Typography>
      {items.map((item) => (
        <CartItem key={item.id}  {...item} />
      ))}
      <Divider />
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        margin="10px auto"
        width="400px"
      >
        <Typography>Total</Typography>
        <Typography>${total.toFixed(2)}</Typography>
      </Box>
      <Button
        variant="contained"
        sx={{ textTransform: "capitalize", bgcolor:'#e2133c'}}
        onClick={() => dispatch(openDialog())}
      >
        Clear Cart{" "}
      </Button>
    </Container>
  );
};

export default CartContainer;
