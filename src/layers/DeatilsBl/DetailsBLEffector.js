import { useStore } from "effector-react";
import React from "react";
import { Details } from '../../layers-ui/Details/Details';
import { $user, updateUser } from "../../store/effector/model";

export const DetailsBlEffector = () => {
  const user = useStore($user)
  
  
  const handleOnClick = () => {
    updateUser({
      id: "3" + user.id,
      firstName: "user3" + user.firstName,
      secondName: Date.now().toString() + user.secondName,
      error: true
    });
  };

  console.log("rerender");

  if (user.error) {
    return (
      <div>
        <button onClick={handleOnClick}>Update user</button>
        error
      </div>
    );
  }

  if (user.secondName) {
    return (
      <div>
        <button onClick={handleOnClick}>Update user</button>
        <Details user={user} />
      </div>
    );
  }
  return (
    <div>
      <button onClick={handleOnClick}>Update user</button>
      last return
    </div>
  );
};
