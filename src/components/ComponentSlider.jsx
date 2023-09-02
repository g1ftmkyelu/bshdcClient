import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container } from 'react-bootstrap';
import { FaCircleChevronLeft, FaCircleChevronRight } from 'react-icons/fa6';

function ComponentSlider({ title, items, renderItem }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Display 4 slides at a time on larger screens
    slidesToScroll: 1,
    prevArrow: <FaCircleChevronLeft color='lightblue' />,
    nextArrow: <FaCircleChevronRight color='lightblue' />,
    responsive: [
      {
        breakpoint: 1024, // Tablets and smaller desktops
        settings: {
          slidesToShow: 2, // Display 3 slides on medium-sized screens
        }
      },
      {
        breakpoint: 480, // Mobile devices
        settings: {
          slidesToShow: 1, // Display 1 slide on smaller screens
        }
      }
    ]
  };

  return (
    <Container fluid className='py-5'>
      <h2 className="fw-bold text-primary py-5">{title}</h2>
      <div className="slider-container">
        <Slider {...settings}>
          {items.map((item, index) => (
            <div className='' key={index}>
              {renderItem(item)}
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
}

export default ComponentSlider;
