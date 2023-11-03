import { useState } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Box, useTheme, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { style } from "../Theme";
import { addToCart } from "../State";
import { useNavigate } from "react-router-dom";

const Item = ({item, width}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [count, setCount] = useState(1); // represent the number of items that will be added to the cart
    const [isHover, setIsHover] = useState(false); // shows if the user has hovered the item
    const {palette: {amber}} = useTheme();

    // doing some destructuring
    const {category, price, name, image} = item.attributes;
    const {
        data: {
            attributes: {
                formats: {
                    medium: {url},
                }
            }
        }
    } = image;

    return (
        <Box
        width={width}
        >
            <Box
            position="relative"
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
            >
                <img
                alt={item.name}
                width="300px"
                height="400px"
                src={`http://localhost:1337${url}`}
                onClick={() => navigate(`/item/${item.id}`)}
                style={{cursor: 'pointer'}}
                />
                <Box
                display={isHover? "block" : 'none'}
                position="absolute"
                bottom="10%"
                left="0"
                width="100%"
                padding="0 5%"
                >
                    <Box
                    display="flex"
                    justifyContent="space-between"
                    >
                        <Box
                        display="flex"
                        alignItems="center"
                        backgroundColor={style.amber[200]}
                        borderRadius="3px"
                        >
                             <IconButton
                             onClick={() => setCount(Math.max(count - 1, 1))}
                              >
                                <RemoveIcon />
                                </IconButton>

                                {/*display the amount*/}
                                <Typography color={style.primary[300]}>{count}</Typography>
                                    <IconButton
                                        onClick={() => setCount(count + 1)}
                                            >
                                                 <AddIcon />
                                                </IconButton>
                        </Box>

                        {/*button*/}
                        <Button
                        onClick={() => {dispatch(addToCart({item: {...item, count}}))}}
                        sx={{backgroundColor: style.primary[300], color: "white"}}
                        >
                            Add To Cart
                         </Button>
                    </Box>
                </Box>
            </Box>

            <Box mt="3px">
                <Typography
                variant="subtitle2" 
                color={amber.dark}
                >
                    {category.replace(/([A-Z])/g, "$1").replace(/^ ./, (str) => str.toUpperCase())}
                </Typography>
                <Typography>{name}</Typography>
                <Typography fontWeight="bold">${price}</Typography>
            </Box>
        </Box>
    )
};

export default Item;