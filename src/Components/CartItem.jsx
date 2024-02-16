import { Box, Typography, Button } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useDispatch } from "react-redux";
// Imports from another files
import { removeItem,increaseItem,decreaseItem } from "../Redux/CartSlice";
const CartItem = (cart) => {
  const dispatch = useDispatch()
  // const {amount} = useSelector(store => store.cart)
  return (
    <Box
      display="flex"
      width="450px"
      justifyContent="space-between"
      alignItems="center"
      marginTop="10px"
    >
      <Box display="flex" justifyContent="center">
        <img style={{ height: "80px" }} src={cart.img} />
        <Box>
          <Typography>{cart.title} </Typography>
          <Typography>${cart.price} </Typography>
          <Button
            sx={{ textTransform: "capitalize" }}
            onClick={() => dispatch(removeItem(cart.id))}
          >
            Remove
          </Button>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column">
        <Button onClick={() => {
          if(cart.amount > 9) return alert("You can't add more than 10 items")
          dispatch(increaseItem(cart.id))}}>
          {" "}
          <KeyboardArrowUpIcon />
        </Button>
        <Typography>{cart.amount} </Typography>
        <Button onClick={() => {if(cart.amount ===1) return dispatch(removeItem(cart.id)) 
          dispatch(decreaseItem(cart.id))}}>
          <KeyboardArrowDownIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default CartItem;
