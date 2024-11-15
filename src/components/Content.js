import React from 'react';

const Content = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      {/* Using the toLocaleTimeString() method to display the current time */}
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

//When imported to app.js and called via <Content /> function is run and prints hello world and local time to screen
export default Content;