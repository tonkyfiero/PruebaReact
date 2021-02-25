import React, { useContext, useEffect } from "react";
import { ApiContext } from "../../store/StoreProvider";
import { getUsers, setUsersAutoload } from "../../store/actions/userActions";

const Users = () => {
  const { state, dispatch } = useContext(ApiContext);

  const handleSetUsersAutoload = _ => {
    setUsersAutoload(dispatch);
  };

  const handleGetUser = _ => {
    getUsers(`User ${Math.floor(Math.random() * 200)}`, dispatch);
  };

  useEffect(() => {
    if (state.autoLoad.users) {
      console.log("User Rendered");
      getUsers(`User ${Math.floor(Math.random() * 200)}`, dispatch);
    }
  }, [dispatch, state.autoLoad.users]);

  console.log(state, "Users context value");

  return (
    <div>
      <br />
      <button onClick={handleGetUser}>Get User</button>
      <button
        style={{
          backgroundColor: state.autoLoad.users ? "red" : "green",
          color: "white"
        }}
        onClick={handleSetUsersAutoload}
      >
        {state.autoLoad.users ? "Disable" : "Enable"} Users Autoload
      </button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

export default Users;
