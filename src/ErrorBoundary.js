import { Component } from "react";
import { Link, Navigate } from "react-router-dom";

// ERROR BOUNDRIES CAN ONLY BE USED WITH CLASS BASED COMPONENTS
class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };

  // Method to call when there is an error/updates state when there is an error
  static getDerivedStateFromError() {
    // New state when re-rendered
    return { hasError: true };
  }

  // Reports error
  componentDidCatch(error, info) {
    console.error(error, info);
  }

  // Similar to useEffect with a dependency for any state change.
  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to="/" />;
    } else if (this.state.hasError) {
      return (
        <h2>
          There was an error. Oh no! <Link to="/">Click here</Link> to go back
          to the home page or wait five seconds and we will do it for you. Or
          not. I am not your mom.
        </h2>
      );
    }

    // else return what ever is encapsulated by this ErrorBoundary component
    return this.props.children;
  }
}

export default ErrorBoundary;
