import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imgSrc: 'https://via.placeholder.com/150',
        profession: 'Software Engineer'
      },
      shows: true,
      timeInterval: 0 // Initialize time interval
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState(prevState => ({
        timeInterval: prevState.timeInterval + 1
      }));
    }, 1000); // Update time interval every second
  }

  componentWillUnmount() {
    clearInterval(this.timer); // Clear interval when component is unmounted
  }

  toggleVisibility = () => {
    this.setState(prevState => ({
      shows: !prevState.shows
    }));
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows, timeInterval } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleVisibility}>Toggle Visibility</button>
        {shows && (
          <div>
            <img src={imgSrc} alt={fullName} />
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <p>{profession}</p>
          </div>
        )}
        <p>Time Interval since Mount: {timeInterval} seconds</p>
      </div>
    );
  }
}

App.propTypes = {
  // Define prop types here if needed
};

export default App;
