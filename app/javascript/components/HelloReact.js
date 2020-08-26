import React from "react";
import PropTypes from "prop-types";
class HelloReact extends React.Component {
  render() {
    return <React.Fragment>Greeting: {this.props.greeting}</React.Fragment>;
  }
}

HelloReact.propTypes = {
  greeting: PropTypes.string,
};
export default HelloReact;
