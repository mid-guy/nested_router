import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
// import EditProject from "../components/features/edit_project";
// import Project from "../components/Project";
// FUNCTION
const EditProject = React.lazy(() => import(/* webpackChunkName: "edit-project" */ '../components/features/edit_project'));
const Project = React.lazy(() => import(/* webpackChunkName: "pure-project" */ '../components/Project'));

const NestedProjectRouter = () => {
  return (
    <Switch> 
      <Suspense fallback={<div>Loading...</div>}>
        <Route path="/project" component={Project}  exact />
        <Route path="/project/:projectId" component={EditProject} exact />
      </Suspense>
    </Switch>
  )
};
export default NestedProjectRouter;
