import React, { useCallback, useMemo } from "react"
import { Button } from "@material-ui/core"
import getButtonCss from "./getButtonCss"
const DynamicButton = (props) => {
  const { children, core, ...other } = props
  // const css = getButtonCss(core)
  // const css = useCallback(() => getButtonCss(core),[core])
  const css = getButtonCss(core)
  return (
    <Button 
      variant="outlined" 
      {...other} 
      // classes={{...css}}
      classes={css}
    >
      {children}
    </Button>
  )
}
export default React.memo(DynamicButton)