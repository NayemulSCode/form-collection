import React,{ forwardRef } from 'react'
import TextField from "@material-ui/core/TextField";

const Input = forwardRef((props, ref) => {
    return (
        <TextField 
            variant="outlined"
            margin="normal"
            ref={ref}
            fullWidth
            {...props}
        />    
    )
});

export default Input
