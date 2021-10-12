import { DetailsBLRedux, DetailsBlMobx } from './layers/DeatilsBl';
import { observer } from 'mobx-react-lite';
import { users } from './store/mobx/users';

const App = observer(() => {
  return (
    <div className='App'>
      <DetailsBlMobx users={users} />
    </div>
  );
});

export default App;
// user={users.user} updateUser={users.updateUser}
