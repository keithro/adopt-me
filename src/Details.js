import { Component } from "react";
import { useParams } from "react-router-dom";

class Details extends Component {
  // No longer need constructor with newer JS, so using Parcel + babel plugin to transform our code.
  // constructor(props) {
  //   super(props);

  //   this.state = { loading: true };
  // }
  state = { loading: true };

  // Can't use useEffect so...
  // componentDidMount runs after component rendered to the DOM for the first time
  // It is similar to useEffect with empty dependencies array []
  async componentDidMount() {
    // this.props is how we access props in class based components
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    );
    const json = await res.json();

    // this.setState(Object.assign({ loading: false }, json.pets[0]));
    this.setState({ loading: false, ...json.pets[0] });
  }

  render() {
    if (this.state.loading) {
      return <h2> Loading...</h2>;
    }

    const { animal, breed, city, state, description, name } = this.state;

    return (
      <div className="details">
        {/* <Carousel images={images} /> */}
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${city}, ${state}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

// Need a non-class based component to use useParams
const WrappedDetails = () => {
  const params = useParams();
  return <Details params={params} />;
};

export default WrappedDetails;
