import { Box } from "@material-ui/core"
import { NavLink } from "react-router-dom"

const SIDE_MENU_LIST = [
  { title: "Home", path: "/"},
  { title: "Project", path: "/project"},
  { title: "User", path: "/users"},
]

const HeaderNavbar = () => {
  return (
    <Box width="100%" bgcolor="black" >
      {
        SIDE_MENU_LIST.map((link, index) => 
          <NavLink
            className="NavLink"
            to={`${link.path}`}
            key={index}
            style={{ color: "#FFFFFF", padding: "15px", display: "block" }}
          >
            {link.title}
          </NavLink>
        )
      }
    </Box>
  )
} 
export default HeaderNavbar