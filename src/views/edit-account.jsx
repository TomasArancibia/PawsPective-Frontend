import React from "react";
import { useParams } from "react-router-dom";
import Edit from "../components/Edit";

const EditAccount = () => {
  const { userId } = useParams();

  return (
    <div>
        <Edit userId={userId} />
    </div>
  );
};

export default EditAccount;
