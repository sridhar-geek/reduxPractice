import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
// Imports from another files
import CartContainer from "./Components/CartContainer"
import Navabar from "./Components/Navabar"
import { calculateTotal } from "./Redux/CartSlice"
import DialogBox from "./Components/DialogBox"


function App() {
  const {items} = useSelector((store)=> store.cart)
  const {isOpen} = useSelector((store)=> store.dialog)
  const dispatch = useDispatch()
  

  useEffect(()=> {
    dispatch(calculateTotal())
  },[items])

  return (
    <>
    <Navabar />
     {isOpen && < DialogBox />}
     <h2>this is redux practice</h2>
     <CartContainer />
    </>
  )
}

export default App
