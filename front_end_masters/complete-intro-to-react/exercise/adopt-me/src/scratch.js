import { Component } from "react";

class Carousel extends Component {
  state = {
    // the 0 will eventually refer to the index[0] of the images array
    active: 0,
  };

  // static sets a class variable defaultProps default image
  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    });
  };

  render() {
    // again {} just destructure data, so it creates a new var from the state or prop key/value pair of the same name
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
              onClick={this.handleIndexClick}
              data-index={index}
              // ternary operator comparing the current index to the number stored in active, if matches, assigns active class
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
