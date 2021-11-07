import { createStore, createEvent } from "effector";

const firstUser = {
  id: "3",
  firstName: "user3",
  secondName: Date.now().toString(),
  error: false
};
export const updateUser = createEvent();
export const $user = createStore(firstUser).on(updateUser, (user, newUser) => ({
  ...Object.assign(user, newUser)
}));
