
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Badge,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { useSelector } from "react-redux";


const Navabar = ()=> {
  const {amount, items} = useSelector((store)=> store.cart)
  console.log(items)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 , cursor:"pointer", userSelect:'none'}}>
            Flipkart
          </Typography>
          <Badge badgeContent={amount} color="secondary">
            <ShoppingCartIcon fontSize="large" color="action" />
          </Badge>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navabar
