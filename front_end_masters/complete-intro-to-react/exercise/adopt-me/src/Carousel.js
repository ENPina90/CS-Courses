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

  // add event listener
  // this has to be an arror function, because a normal function would create a new this in the context of the browser click, which would be undefined. Here the arrow function inherits the this of the class
  handleIndexClick = (event) => {
    this.setState({
      // simplest way to convert a string to a number
      active: +event.target.dataset.index,
    });
  };

  render() {
    // again {} just destructure data, so it creates a new var from the state or prop key/value pair of the same name
    const { active } = this.state;
    const { images } = this.props;

    console.log(images);
    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            <img
              key={photo}
              src={photo}
              // ternary operator comparing the current index to the number stored in active, if matches, assigns active class
              className={index === active ? "active" : ""}
              //onClick is the event listener
              onClick={this.handleIndexClick}
              //data-index allows us to pass the index of the current image to our event handler
              data-index={index}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
