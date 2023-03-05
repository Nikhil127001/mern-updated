import { Carousel } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const ProductCarouselComponent = ({ bestSellers }) => {
  const cursorP = {
    cursor: "pointer",
  };

  return bestSellers.length > 0 ? (
    <Carousel className="Carousel">
      {bestSellers.map((item, idx) => (
        <Carousel.Item className="Carousel" key={idx}>
          <img
            crossOrigin="anonymous"
            className="d-block w-100"
            style={{ height: "300px", objectFit: "cover" }}
            src={item.images ? item.images[0].path : null}
            alt="First slide"
          />
          <Carousel.Caption>
            <LinkContainer style={cursorP} to={`/product-details/${item._id}`}>
              <h3 className="Crousel_Discription">Bestseller in {item.category} Category</h3>
            </LinkContainer>
            <p className="Crousel_Discription">{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  ) : null;
};

export default ProductCarouselComponent;
<style>
@import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');
</style>

