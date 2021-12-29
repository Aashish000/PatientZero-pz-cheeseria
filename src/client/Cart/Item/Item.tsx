import React from 'react';
import Button from '@material-ui/core/Button';
// Types
import { CartItemType } from '../../App';
// Styles
import { Wrapper } from './Item.styles';
import Dialog from "@material-ui/core/Dialog";
import AlertDialog, { alertDialog } from '../dialog/alertDialog';
import { ContactSupportOutlined } from '@material-ui/icons';

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
  handleClickOpen: (clickedItem: CartItemType)=>void;
  
};

const handleSubmit = () => console.log("Okay!");
const Item: React.FC<Props> = ({ item, handleAddToCart, handleClickOpen}) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <h3>${item.price}</h3>
    </div>
    <div>
    <AlertDialog/>
    {/* <Button 
      onClick={() => AlertDialog()}
      >Open Dialog</Button> */}
      {/* on click view details pass the items data to alertDialog component */}
      <Button 
        onClick ={() =>
          alertDialog(item.title, ""+item.price+"", item.description,
          handleSubmit
          )
        }
        >
          View Details
       </Button>
    </div>
    <Button
      onClick={() => handleAddToCart(item)}
      data-cy={`add-to-cart-${item.id}`}>Add to cart</Button>
  </Wrapper>
);

export default Item;
