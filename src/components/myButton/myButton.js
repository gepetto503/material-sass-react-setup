import React from 'react';
import './myButton.css';
import RaisedButton from 'material-ui/RaisedButton';

const myButtonStyles = {
  borderRadius:"20px",
  color: "white"
};

const MyButton = () => {
  return (
    <div>
      <RaisedButton
        label="Default"
        backgroundColor="blue"
        buttonStyle={myButtonStyles}
        style={{
          boxShadow: "none",
        }}
        />
      <p className="purple">some shit</p>
    </div>
  )
}

export default MyButton;
