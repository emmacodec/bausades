import {Box, Button, Divider, IconButton, Typography} from '@mui/material';
import {useSelector, useDispatch} from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from '@emotion/styled';
import { style } from '../../Theme';
import { decreaseCount, removeFromCart, increaseCount, setCartOpen } from '../../State';
import { useNavigate } from 'react-router-dom';


// creating a stye component using template strings

const FlexText = styled(Box)`
display: Flex;
justify-content: space-between;
align-items: center;
`;

const CartMenu = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart);
    const isCartOpen = useSelector((state) => state.cart.isCartOpen);



    const totalPrice = cart.reduce((total, item) => {  // calculate total price after iterating
        return total + item.count * item.attribute.price;
    }, 0);

    return (
        <Box
        display={isCartOpen ? "block" : "none"}
        backgroundColor= "rgba(0, 0, 0, 0.4)"
        position="fixed"
        zIndex={10}
        width="100%"
        height="100%"
        left="0"
        top="0"
        overflow="auto"
        >
            <Box></Box>
        </Box>
    )
}



export default CartMenu;