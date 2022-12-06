import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Button from "../../components/Button";
import {
  StyledArrowButton,
  StyledCarouselWrapper,
  StyledContainer,
  StyledStatus,
  StyledWrapper,
} from "./styles";
const CarouselContainer = ({ children, length, selectedItem, onChange }) => {
  const [currentSlide, setCurrentSlide] = useState(selectedItem);
  const onClickNext = () => {
    if (currentSlide < length) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const onClickPrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  useEffect(() => {
    setCurrentSlide(selectedItem);
  }, [selectedItem]);

  return (
    <StyledWrapper>
      <StyledStatus>
        {currentSlide === 0 ? "Deck" : "Card " + currentSlide + "/" + length}
      </StyledStatus>
      <StyledContainer>
        {/* <Button onClick={onClickPrevious}>Previous</Button> */}
        <StyledArrowButton onClick={onClickPrevious}>{"<"}</StyledArrowButton>
        <StyledCarouselWrapper>
          <Carousel
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            showArrows={false}
            selectedItem={currentSlide}
            onChange={onChange}
          >
            {children}
          </Carousel>
        </StyledCarouselWrapper>
        <StyledArrowButton onClick={onClickNext}>{">"}</StyledArrowButton>
      </StyledContainer>
    </StyledWrapper>
  );
};

export default CarouselContainer;
