import { Header } from "./components/Header/Header";
import { Form, TaskType } from "./components/Form/Form";
import { List } from "./components/List/List";

import "./global.css";

const tasks: TaskType[] = [
  {
    id: 1,
    content: "Academia todo dia!",
  },
];

export function App() {
  return (
    <div>
      <Header />

      <Form />
    </div>
  );
}
