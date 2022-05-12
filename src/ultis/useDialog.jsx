import React, { useState } from "react"
import DialogContent from "../Dialog"
const useDialog = (props) => {
  const [isOpen, setOpen] = useState(false)
  const [ data, setData ] = useState()
  function toggle(project) {
    setData(project)
    setOpen(!isOpen)
  }
  function handleClose() {
    setOpen(false)
  }
  return {
    isOpen,
    toggle,
    handleClose,
    data
  }
}
export default useDialog