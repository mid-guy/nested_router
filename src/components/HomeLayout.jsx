import React from "react"
import { Box } from "@material-ui/core"
import {  Route } from "react-router-dom"

import HeaderNavbar from "./HeaderNavbar"
// import Users from "./Users"
// import Home from "./Home"
// import NestedProjectRouter from "../router/NestedProjectRouter"
import { Suspense } from "react";
import { useHistory } from "react-router-dom";

const Home = React.lazy(() => import(/* webpackChunkName: "Home" */ './Home'));
const Users = React.lazy(() => import(/* webpackChunkName: "Users" */  './Users'));
const NestedProjectRouter = React.lazy(() => import(/* webpackChunkName: "nested-project" */ '../router/NestedProjectRouter'));

const HomeLayout = () => {
  const history = useHistory();
  return (
    <Box>
      <HeaderNavbar />
      <Suspense fallback={<div>Loading...</div>}>
        {
          history.location.pathname.includes("/project") && <NestedProjectRouter />
        }
        <Route path="/users" component={Users} />
        <Route path="/" component={Home} exact />
      </Suspense>
    </Box>
  )
}
export default HomeLayout