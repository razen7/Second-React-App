// import logo from './logo.svg';
import './App.css';
import UsersCard from './components/UsersCard';
import users from './users';

//JSX
function App() {
  return (
    <div className="container">
      <h1>Users at Acme Inc.</h1>
      <div className="users-list">
        {users.map((user, idx) => <UsersCard key={idx} user={user} />)}
      </div>

    </div >
  );
}

export default App;
