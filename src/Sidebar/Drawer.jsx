import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useSelector } from 'react-redux';

function MyDrawer(props) {
  const items = useSelector((state) => state.products.items);
const {open,toggleDrawer,setOpen}=props
  const DrawerList = (
    <Box sx={{ width: 350 }} role="presentation" onClick={() => toggleDrawer(false)}>
      <div className='position-relative h-100 border'>
  <div className='h-100'>
  {items.map((item) => {
    return (
      <div className='m-1' key={item.id}> 
        <img className='rounded-5' style={{width:"70px"}} src={item.image} alt={item.name} /> 
        <span className='mx-1'>
  {item.name.length > 15 ? `${item.name.slice(0, 15)}...` : item.name}
</span>

        <span>Price{item.price} </span>
     
      </div>
    );
  })}
</div>
<button className='position-absolute bottom-0 start-0' style={{width:"100%"}}> totalPrice</button>
</div>
    
    </Box>
  );

  return (
    <div>
     
      <Drawer
        open={open}
        onClose={() => toggleDrawer(false)}
        anchor="right"  
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default MyDrawer;
// import React, { useState } from 'react';
// import { Drawer, Box, Typography, IconButton, List, ListItem, ListItemText, Divider, ListItemAvatar, Avatar, Button, ButtonGroup } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import { useDispatch, useSelector } from 'react-redux';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { decreaseQuantity, increaseQuantity, removeProduct } from '../Slice/Addtocart';


// function MyDrawer(props) {

//   const {open,toggleDrawer,setOpen}=props
//   const items = useSelector((state) => state.products.items);
//   const dispatch = useDispatch();

//   // Calculate the total price
//   const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

//   return (
//     <Drawer anchor="right" open={open} onClose={handleClose}>
//       <Box sx={{ width: 350, display: 'flex', flexDirection: 'column', height: '100%' }} role="presentation">
//         {/* Header Section */}
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', backgroundColor: '#f5f5f5' }}>
//           <Typography variant="h6">Shopping Cart</Typography>
//           <IconButton onClick={handleClose}>
//             <CloseIcon />
//           </IconButton>
//         </Box>

//         <Divider />

//         {/* Cart Items List */}
//         <List sx={{ flexGrow: 1, overflowY: 'auto' }}>
//           {items && items.length > 0 ? (
//             items.map((item, index) => (
//               <ListItem key={index} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px' }}>
//                 <ListItemAvatar>
//                   <Avatar src={item.strMealThumb} alt={item.strMeal} />
//                 </ListItemAvatar>
//                 <ListItemText primary={item.strMeal.length > 10 ? `${item.strMeal.slice(0, 10)}...` : item.strMeal} sx={{ maxWidth: '150px' }} />
                
//                 <ButtonGroup variant="outlined" aria-label="quantity buttons">
//                   <Button onClick={() => dispatch(decreaseQuantity(item))} sx={{ minWidth: '30px' }}>
//                     <RemoveIcon />
//                   </Button>
//                   <Button sx={{ minWidth: '30px' }} disabled>{item.quantity}</Button>
//                   <Button onClick={() => dispatch(increaseQuantity
//                     (item))} sx={{ minWidth: '30px' }}>
//                     <AddIcon />
//                   </Button>
//                 </ButtonGroup>

//                 <IconButton onClick={() => dispatch(removeProduct(item))} color="error" sx={{ marginLeft: '12px' }}>
//                   <DeleteIcon />
//                 </IconButton>
//               </ListItem>
//             ))
//           ) : (
//             <Typography sx={{ padding: '16px', textAlign: 'center', fontStyle: 'italic' }}>Your cart is empty.</Typography>
//           )}
//         </List>

//         <Divider />

//         {/* Total Price Section */}
//         {items.length > 0 && (
//           <Box sx={{ padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//             <Typography variant="h6">Total Price:</Typography>
//             <Typography variant="h6" color="primary">Rs.{totalPrice.toFixed(2)}</Typography>
//           </Box>
//         )}

//         {/* Footer Section */}
//         <Box sx={{ padding: '16px', textAlign: 'center' }}>
//           <Button sx={{ backgroundColor: "#e01b6f" }} fullWidth variant="contained" onClick={handleClose}>
//             Proceed to Checkout
//           </Button>
//         </Box>
//       </Box>
//     </Drawer>
//   );
// }
// export default MyDrawer;