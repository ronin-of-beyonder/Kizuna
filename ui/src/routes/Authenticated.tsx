import { useQuery } from "@apollo/react-hooks";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import Menu from "../components/Menu";
import withToast from "../components/Toast/withToast";
import ME from "../graphql/query/meQuery";
import Add from "../pages/Add";
import Blocked from "../pages/Contacts/Blocked";
import DeleteProfile from "../pages/DeleteProfile";
import EditProfile from "../pages/EditProfile";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import { setProfile } from "../redux/profile/actions";

const Authenticated: React.FC = ({ pushErr }: any) => {
  const profile = useQuery(ME);
  const dispatch = useDispatch();

  useEffect(() => {
    const me = { ...profile?.data?.me };
    if (Object.prototype.hasOwnProperty.call(me, "id")) {
      dispatch(setProfile(me));
    }
  }, [profile, dispatch]);

  useEffect(() => {
    if (profile.error) pushErr(profile.error);
  }, [profile.error, pushErr]);
  return !profile.loading ? (
    <>
      <Menu />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/profile" exact>
          <Profile />
        </Route>
        <Route path="/edit-profile" exact>
          <EditProfile />
        </Route>
        <Route path="/delete-profile" exact>
          <DeleteProfile />
        </Route>
        <Route path="/blocked" exact>
          <Blocked />
        </Route>
        <Route path="/add" exact>
          <Add />
        </Route>
        <Redirect from="*" to="/home" />
      </Switch>
    </>
  ) : null;
};

export default withToast(Authenticated);
