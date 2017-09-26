import React from 'react';
import TextField from 'material-ui/TextField';
import './myTextField.scss';



const MyTextField = () => {
  return(
    <div>
    <TextField
    name="blah"
    floatingLabelText="foo"
    hintText="blah"
    style={{margin: "70px",}}
    />
    </div>
  )
}

export default MyTextField;
