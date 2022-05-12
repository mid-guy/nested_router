import { makeStyles } from "@material-ui/core"
import { core } from "./core"
const dynamicButtonStyle = makeStyles({
  root: props => ({ 
    ...props,
    ...baseCss()
  }),
  label: {
    textTransform: 'capitalize',
  },
})
// Dynamic css get from "core" depend on "props" passing down
function conditionalPropsCss(props) {
  return {
    backgroundColor: core[props].bgColor,
    "&:hover": {
      backgroundColor: core[props].bgColor_hover,
    }
  }
}
// Base css of component "Button"
function baseCss() {
  return {
    padding: "16px",
    textTransform: "none",
    color: "#FFFFFF",
    borderRadius: "4px",
  }
}

export default function getButtonCss(props) {
  const genarateClassName = dynamicButtonStyle(conditionalPropsCss(props))
  return genarateClassName
}