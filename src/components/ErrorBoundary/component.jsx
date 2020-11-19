import { Component } from "react";
import "./style.css";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="ErrorContainer">
          <h1 className="ErrorHeading">Something went wrong!</h1>
          <p className="ErrorMessage">
            Something seriously went wrong somewhere. Check the logs.
          </p>
        </section>
      );
    }

    return this.props.children;
  }
}
