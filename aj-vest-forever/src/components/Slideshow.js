import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

import './shaddow.css';

const image1 = require('./images/Slide1.png');
const image2 = require('./images/Slide2.png');
const image3 = require('./images/Slide3.png');
const image4 = require('./images/Slide4.png');
const items = [
    {
        src: image1,
        altText: 'Youth camp in 1990 young and smiling',
        caption: '1990',
        text: 'Youth Camp'
    },
    {
        src: image2,
        altText: 'older couple smiling arm in arm',
        caption: '2018',
        text: 'First Date'
    },
    {
        src: image3,
        altText: 'Bride and groom facing each other smiling in front of the minister',
        caption: '2019',
        text: 'Wedding'
    },
    {
        src: image4,
        altText: 'As the years move on...',
        caption: '2021-...',
        text: 'As the years move on...'
    }
];

const Slideshow = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img className='D-block w-100' src={item.src} alt={item.altText} />
                <CarouselCaption className='text-warning deepshd ' captionText={item.text} captionHeader={item.caption} />
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
}

export default Slideshow;