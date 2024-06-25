import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 1338,
      name: "🍏 Apple",
      color: "green",
    },
    {
      id: 1339,
      name: "🍓 Strawberry",
      color: "red",
    },
    {
      id: 1340,
      name: "🍇 Grapes",
      color: "green",
    },
    {
      id: 1341,
      name: "🍒 Cherry",
      color: "red",
    },
  ];

  return (
    <div className="app">
      {fruits.map(({ id, name, color }) => (
        <Card key={id} name={name} color={color} />
      ))}
    </div>
  );
}
