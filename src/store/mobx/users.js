import { makeAutoObservable, autorun } from 'mobx';

class Example {
  id = 1;
}

// const newExample = new Example();
// console.log(newExample);

export class Users {
  users = [];
  user = {
    id: '3',
    firstName: '',
    secondName: '2',
    error: false,
    example: new Example(),
  };
  error = {};
  numbersObj = { 0: 1, 1: 2 };
  numbersArr = [{ id: 1 }, { id: 2 }];

  constructor() {
    makeAutoObservable(this);
  }

  updateNumbers = () => {
    this.numbersObj[0]++;
    this.numbersArr[0].id++;
  };

  updateExample = () => {
    this.user.example.id++;
  };
  updateUser = (user) => {
    Object.assign(this.user, user);
  };
  fetchError = (error) => {
    this.error = error;
  };
}

export const users = new Users();

// autorun(() => {
//   console.log('autorun - obj', users.numbersObj[1]);
// });
// autorun(() => {
//   console.log('autorun - arr', users.numbersArr[1].id);
// });

// autorun(() => {
//   console.log('autorun - example', users.user.example.id);
// });
