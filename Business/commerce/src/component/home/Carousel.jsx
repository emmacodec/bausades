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
  return (
    <div>Carousel</div>
  )
};

export default MainCarousel;