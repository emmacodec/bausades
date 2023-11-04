import React, {useEffect, useState} from 'react';
import {Box,Typography, Tab, Tabs, useMediaQuery} from '@mui/material';
import Item from '../../component/item';
import { useSelector, useDispatch } from 'react-redux';
import { setItems } from '../../State';

const ShoppingList = () => {

const dispatch = useDispatch();
const [value, setValue] = useState("all");
const items = useSelector((state) => state.cart.items);
const NotMobile = useMediaQuery("(min-width: 600px");
console.log("items", items);

// function that handles all our tabs
const handleChange = (e, newValue) => {
    setValue(newValue);
};

// a get item function that call backend
async function getItems() {
    const items = await fetch(
        "http://localhost:1337/api/items?populate=image",
        {method: "GET"}
    );
    const itemsJson = await items.json();
    dispatch(setItems(itemsJson.data));
}

useEffect(() => {
    getItems();
}, []);

// a function that handles all the filter
const mostRated = items.filter(
    (item) => item.attributes.category === "topRated"
);

const newArrivals = items.filter(
    (item) => item.attributes.category === "newArrivals"
);

const mostSellers = items.filter(
    (item) => item.attributes.category === "bestSellers"
);

  return (
    <Box
    width="80%"
    margin="80px auto"
    >
      <Typography
      variant='h3'
      textAlign="center"
      >
        Our Featured <b>Products</b>
      </Typography>
      <Tabs
      textColor='primary'
      indicatorColor='primary'
      value={value}
      onChange={handleChange}
      centered
      TabIndicatorProps={{sx: {display: NotMobile ? "block" : "none"}}}
      sx={{
        m: "25px",
        "& .MuiTabs-flexContainer": {
            flexWrap: "wrap"
        }
      }}
      >
        <Tab></Tab>
      </Tabs>
    </Box>
  )
};

export default ShoppingList;
