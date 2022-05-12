import { Box, Button } from "@material-ui/core"
import { useHistory, useRouteMatch, Link, Route } from "react-router-dom"
import Modal from "../Modal" 
import useDialog from "../ultis/useDialog"
import React, {useRef} from "react"
import { useState } from "react"

const projectList = [
  { 
    name: "Type project 1", 
    isActive: false, 
    content: {
      true: {
        header: "Header 1",
        title: "Title 1"
      },
      false: {
        header: "Header false 1",
        title: "Title false 1"
      },
    }
  },
]
const CSS_CONTENT_CONTAINER = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 0"
}
const CSS_EDIT_BTN = {
  variant: "outlined",
  color: "primary",
}
const Project = () => {
  
  const history = useHistory()
  const { url, path } = useRouteMatch()
  const { isOpen, data, handleClose, toggle } = useDialog()
  const [ isWaiting, setWaiting ] = useState(false)
  
  function handleSubmit() {
    console.log("submit success")
    toggle()
  }

  function debounceButton() {
    let debounce
    clearTimeout(debounce)
    debounce = setTimeout(() => {
      console.log(123);
    }, 1000)
  }

  return (
    <Box>
      {projectList.map((project, index) => 
        <Box {...CSS_CONTENT_CONTAINER} key={index}>
          {project.name}
          <button style={{ padding: '10px 16px' }} onClick={debounceButton}>
            <Link to={{ pathname: `${url}/${index}`}}>
              Edit
            </Link>
          </button>
        </Box>
      )} 
      <Modal 
        open={isOpen} 
        onClose={handleClose} 
        onSubmit={handleSubmit}
        {...data}
      />
    </Box>
  )
}
export default Project 