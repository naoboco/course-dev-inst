import Greeting from "./Components/Greeting";
import Counter from "./Components/Counter";
import UserCard from "./Components/UserCard";
import UserList from "./Components/UserList";

function App() {
  return (
    <div>
      <h1>Week 14 - Day 2</h1>

      <h2>Exercise 2 - Greeting</h2>
      <Greeting
        name="Naomie"
        messageCount={5}
      />

      <Counter />

      <UserCard
        name="Sarah"
        age={28}
        role="Developer"
      />

      <UserCard
        name="David"
        role="Designer"
      />

      <UserCard />

      <UserList />
    </div>
  );
}

export default App;