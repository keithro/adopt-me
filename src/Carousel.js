import { Component } from "react";

class Carousel extends Component {
  // State of the Carousel: this.state
  state = {
    active: 0,
  };

  // Setting default props: this.props.images
  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (event) => {
    // console.log(this);

    this.setState({
      // dataset is the data property defined in html(jsx) below.
      // We use "+" to make sure it is set as number, not string but could also use parseInt
      active: parseInt(event.target.dataset.index),
      // active: +event.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
              onClick={this.handleIndexClick}
              data-index={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
