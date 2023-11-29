import {  } from "@mui/material";
import React from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";
import VisitOtherPage from "./visitotherpage";
import {VisitMyPage} from "./visitmypage";
import '../../../app/css/my_page.css'

export function MemberPage() {
    let member = useRouteMatch();
  console.log(member);
    return (
        <Switch>
        <Route path={`${member.path}/other`}>
         <VisitOtherPage/>
        </Route>
        <Route path={`${member.path}`}>
          <VisitMyPage/>
        </Route>
      </Switch>
    )
}