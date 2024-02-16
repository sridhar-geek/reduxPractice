import { Dialog, Button,styled, DialogActions, DialogTitle } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
//Imports from another files
import {clearCart} from '../Redux/CartSlice'
import { closeDialog } from "../Redux/DialogSlice";

//component styles
const Btn = styled(Button)`
    text-transform: capitalize;
    margin-bottom: 10px;
    &:hover{
        background-color: #76c72a;
    }
`
const DialogBox = () => {
const dispatch = useDispatch()
const {isOpen} = useSelector((store)=> store.dialog)

  return (
    <Dialog open={open} onClose={isOpen}>
      <DialogTitle>Do you really want to clear the Cart ?</DialogTitle>
      <DialogActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0px 30px",
        }}
      >
        <Btn
          variant="contained"
          sx={{ bgcolor: "#d61c57" }}
          onClick={()=> {dispatch(clearCart()), dispatch(closeDialog())}}
        >
          Clear the Cart
        </Btn>
        <Btn
          variant="contained"
          sx={{ bgcolor: "green" }}
          onClick={()=> dispatch(closeDialog())}
          autoFocus
        >
          Close
        </Btn>
      </DialogActions>
    </Dialog>
  );
};

export default DialogBox;
