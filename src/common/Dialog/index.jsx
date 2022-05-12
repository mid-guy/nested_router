import { Dialog, Box, Button } from "@material-ui/core"
import useDialog from "../../ultis/useDialog"
import React, { useState, useEffect, useRef, useImperativeHandle, forwardRef } from "react"
const DialogContent = (props) => {
  // const methods = useDialog()
  // const [open, setOpen] = useState(false)
  // const sizeRef = useRef({
  //   header: "",
  //   root: "",
  // })
  // useImperativeHandle(ref, () => ({
  //   openDialog: () => handleOpenDialog(),
  // }))
  // function handleCloseDialog() {
  //   setOpen(false)
  // }
  // function handleOpenDialog() {
  //   setOpen(true)
  // }
  // useEffect(() => {
  //   setTimeout(() => {
  //     const id = document.getElementById("nameBox")
  //     console.log(id)
  //   }, 0)
  // }, [open])
  // console.log(methods)
  return (
    <Dialog open={false}>
      <Button 
        // onClick={methods.close}
      >
        close
      </Button>
      <Box p="20px" color="red" id="nameBox">
        1231231312
      </Box>
    </Dialog>
  )
}
export default DialogContent