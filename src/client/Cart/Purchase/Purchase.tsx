import * as React from 'react';
import { TextField } from '@material-ui/core';
import {Dialog, DialogContent, DialogContentText, DialogTitle, DialogActions, Button, Box, IconButton} from '@material-ui/core';
import { Close, Message } from '@material-ui/icons';
import List from '@material-ui/core';
import CartItem from '../CartItem/CartItem';
import Cart from '../Cart';
import FileSaver from 'file-saver';
import { json } from 'express';

const Purchase = (Cart) =>{
    alert("hellp");
    var purchase = JSON.stringify(Cart);
    var blob = new Blob([purchase], {type: "json"});
    FileSaver.saveAs(blob, "Purchase.json");
    console.log(purchase);
}
 export default Purchase;


