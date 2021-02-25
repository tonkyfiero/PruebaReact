import React, { useContext } from "react";
import { ApiContext } from "../../store/StoreProvider";

const Dashboard = () => {
  const { state } = useContext(ApiContext);

  return (
    <>
      <div>Dashboard</div>
      <br />
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </>
  );
};

export default Dashboard;
