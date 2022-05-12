import { Box, Button, Dialog, Typography } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom"
const Modal = ({ open, onClose, ...rest }) => open ? ReactDOM.createPortal(
  <Dialog className="modal" open={open}>  
    <Box padding="25px">
      <Box textAlign="center" padding="15px">
        <Typography variant="h6">
          {rest.header}
        </Typography>
        <Typography>
          {rest.title}
        </Typography>
      </Box>
      <Button 
        variant="contained"
        color="primary"
        onClick={() => rest.onSubmit()}
        style={{ marginRight: "25px"}}
      >
        Submit
      </Button>
      <Button onClick={onClose} disableRipple>
        Close
      </Button>
    </Box>  
  </Dialog>, document.body
) : null
export default Modal;