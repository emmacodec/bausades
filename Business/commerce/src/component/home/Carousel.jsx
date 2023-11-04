import React from 'react';
import {Box, IconButton, Typography, useMediaQuery} from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { style } from '../../Theme';

// creating a function that imports all my images
const bringAll = (a) =>
a.keys().reduce((acc, item) => {
    acc[item.replace("./", "")] = a(item);
    return acc;
}, {});

export const importTexture = bringAll(
    require.context("../../assets", false, /\.(png|jpe?g|svg)$/)
);

const MainCarousel = () => {

const NotMobile = useMediaQuery("(min-width: 600px)");

  return (
    <Carousel
    infiniteLoop={true}
    showThumbs={false}
    showIndicators={false}
    showStatus={false}
    renderArrowPrev={(onclickHandler, hasPrev, label) => (
        <IconButton
        onClick={onclickHandler}
        sx={{
            position: "absolute",
            top: "50%",
            left: "0",
            color: "white",
            padding: "5px",
            zIndex: "10"
        }}
        >
            <NavigateBeforeIcon sx={{fontSize: 40}} />
        </IconButton>
    )}

    renderArrowNext={(onclickHandler, hasNext, label) => (
        <IconButton
        onClick={onclickHandler}
        sx={{
            position: "absolute",
            top: "50%",
            right: "0",
            color: "white",
            padding: "5px",
            zIndex: "10"
        }}
        >
            <NavigateNextIcon sx={{fontSize: 40}} />
        </IconButton>
    )}
    
    >
        {Object.values(importTexture).map((texture, index) => (
            <Box key={`carousel-image-${index}`}>
                <img 
                src={texture} 
                alt={`carousel-${index}`}
                style={{width: "100%", height: "700px", objectFit: "cover", backgroundAttachment: "fixed"}}
                />
                 
                 {/*text-container*/}
                <Box
                color="white"
                padding="20px"
                borderRadius="1px"
                textAlign="left"
                backgroundColor= "rgba(0, 0, 0, 0.6)"
                position="absolute"
                top="46%"
                left={NotMobile ? "10%" : "0"}
                right={NotMobile ? undefined : "0"}
                margin={NotMobile ? undefined : "0 auto"}
                maxWidth={NotMobile ? undefined : "240px"}
                >
                    <Typography color={style.secondary[200]}
                    >
                        New Items
                    </Typography>
                    <Typography
                    variant='h1'
                    >
                        Latest Sales
                    </Typography>
                    <Typography
                    fontWeight="bold"
                    color={style.secondary[300]}
                    sx={{textDecoration: "underline"}}
                    >
                        Discover More
                        </Typography>
                </Box>
            </Box>
        ))}
    </Carousel>
  )
};

export default MainCarousel;