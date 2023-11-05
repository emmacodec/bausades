import React, {useEffect, useState} from 'react';
import {Box,Typography, Tab, Tabs, useMediaQuery} from '@mui/material';
import Item from '../../component/item';
import { useSelector, useDispatch } from 'react-redux';
import { setItems } from '../../State';

const ShoppingList = () => {

const dispatch = useDispatch();
const [value, setValue] = useState("all");
const items = useSelector((state) => state.cart.items);
const NotMobile = useMediaQuery("(min-width: 600px)");
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
const mostRatedItems = items.filter(
    (item) => item.attributes.category === "topRated"
);

const newArrivalsItems = items.filter(
    (item) => item.attributes.category === "newArrivals"
);

const mostSellersItems = items.filter(
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
        <Tab label="ALL" value="all" />
        <Tab label="NEW ARRIVALS" value="newArrivals" />
        <Tab label="BEST SELLERS" value="bestSellers" />
        <Tab label="TOP RATED" value="topRated" />
      </Tabs>

      <Box
      margin="0 auto"
      display="grid"
      gridTemplateColumns="repeat(auto-fill, 300px)"
      justifyContent="space-around"
      rowGap="25px"
      columnGap="1.33%"
      >
        {value === "all" && items.map((item) => (
          <Item item={item} key={`${item.name}-${item.id}`} />
        ))}
        {value === "newArrivals" && newArrivalsItems.map((item) => (
          <Item item={item} key={`${item.name}-${item.id}`} />
        ))}
        {value === "bestSellers" && mostSellersItems.map((item) => (
          <Item item={item} key={`${item.name}-${item.id}`} />
        ))}
        {value === "topRated" && mostRatedItems.map((item) => (
          <Item item={item} key={`${item.name}-${item.id}`} />
        ))}
      </Box>
    </Box>
  )
};

export default ShoppingList;
