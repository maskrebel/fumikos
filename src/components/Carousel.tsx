import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css'
import settings from "./Settings.tsx";


const CustomCarousel: React.FC = () => {
    const images = settings.imageCarousel;
    return (
        <Carousel>
            {images.map((URL, index) => (
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        alt={URL}
                        src={URL}
                        key={index}
                    />
                    <Carousel.Caption>
                        <h3>Slide {index}</h3>
                        <p>Description for the slide {index}.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default CustomCarousel;
