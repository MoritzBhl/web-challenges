import "./styles.css";

export default function App() {
  return (
    <div>
      <Greeting name="Andrea" isCoach />
      <Greeting name="Andrea" />
    </div>
  );
}

function Greeting({ name, isCoach }) {
  return <h1>Hello {isCoach ? `Coach` : name}!</h1>;
}
