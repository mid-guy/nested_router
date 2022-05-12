import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
const ButtonWithStyles = withStyles((theme) => ({
  root: {
    padding: "16px",
    textTransform: "none",
    color: "#FFFFFF",
    borderRadius: "4px",
    backgroundColor: "rgba(68, 214, 44, 1)",
    "&:hover": {
      backgroundColor: "rgba(68, 214, 44, 0.8)",
    },
  },
  label: {
    textTransform: "capitalize",
  },
}))((props) => <Button {...props}>{props.children}</Button>);
export default ButtonWithStyles;
