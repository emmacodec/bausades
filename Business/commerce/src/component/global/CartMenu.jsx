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
            {/*overlay*/}
            <Box
            position="fixed"
            right="0"
            bottom="0"
            width="max(400px, 30%)"
            height="100%"
            backgroundColo="white"
            >
                <Box
                padding="30px"
                overflow="auto"
                height="100%"
                >
                    {/*header-section*/}
                    <FlexText
                    mb="15px"
                    >
                        <Typography
                        variant='h3'
                        >
                            Shopping Bag({cart.length})
                        </Typography>
                        <IconButton onClick={() => dispatch(setCartOpen({}))}>
                            <CloseIcon  />
                        </IconButton>
                    </FlexText>

                    {/*cart-list*/}
                    <Box>
                        {cart.map((item) => (
                            <Box key={`${item.attribute.name}-${item.id}`}>
                                <FlexText
                                p="15px 0"
                                >
                                    <Box
                                    flex="1 1 40%"
                                    >
                                        <img 
                                        alt={item?.name} 
                                        width="123px" 
                                        height="164px" 
                                        src={`http://localhost:1337${item?.attribute?.image?.data?.attribute?.formats?.medium?.url}`} />
                                    </Box>
                                    <Box
                                    flex="1 1 60%"
                                    >

                                        {/*item-name*/}
                                        <FlexText
                                        mb="5px"
                                        >
                                            <Typography
                                            fontWeight="bold"
                                            >
                                                {item.attribute.name}
                                            </Typography>
                                            <IconButton
                                            onClick={() => dispatch(removeFromCart({id: item.id}))}
                                            >
                                                <CloseIcon />
                                            </IconButton>
                                        </FlexText>
                                        <Typography>{item.attribute.shortDescription}</Typography>

                                        {/*amount*/}
                                        <FlexText
                                        m="15px 0"
                                        >
                                            <Box
                                            display="flex"
                                            alignItems="center"
                                            border={`1.5px solid${style.amber[500]}`}
                                            >
                                                <IconButton
                                                onClick={() => dispatch(decreaseCount({id: item.id}))}
                                                >
                                                    <RemoveIcon />
                                                </IconButton>

                                                {/*display the amount*/}
                                                <Typography>{item.count}</Typography>
                                                <IconButton
                                                onClick={() => dispatch(increaseCount({id: item.id}))}
                                                >
                                                    <AddIcon />
                                                </IconButton>
                                            </Box>
                                                        {/*prices*/}
                                        <Typography fontWeight="bold"
                                        >
                                            ${item.attribute.price}
                                            </Typography>

                                        </FlexText>

                            
                                    </Box>
                                </FlexText>
                                <Divider />
                            </Box>
                        ))}
                    </Box>

                    {/*Actions*/}
                    {/*subtitle,price,checkbox*/}
                    <Box
                    m="20px 0"
                    >
                        <FlexText
                        m="20px 0"
                        >
                            <Typography
                            fontWeight="bold"
                            >
                                Sub-Total
                            </Typography>
                            <Typography
                            fontWeight="bold"
                            >
                                ${totalPrice}
                            </Typography>
                        </FlexText>
                        <Button
                        sx={{
                            backgroundColor: style.primary[400],
                            color: "white",
                            borderRadius: 0,
                            minWidth: '100%',
                            padding: "20px 40px",
                            m: "20px 0",
                        }}
                        onClick={() => {
                            navigate("/Checkout");
                            dispatch(setCartOpen({}));
                        }}
                        >Check-Out</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};



export default CartMenu;