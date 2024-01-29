import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const API_BASE_URL = "http://localhost:8000";

function App() {
  const [jokes, setJokes] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/jokes`)
      .then((res: any) => setJokes(res.data))
      .catch((err: any) => console.log(err.message));
  }, []);

  return (
    <>
      <h1>Chai or Jokes: {jokes.length}</h1>
      {jokes.length &&
        jokes.map((joke: any) => (
          <div key={joke.id}>
            <h1>{joke.title}</h1>
            <h1>{joke.content}</h1>
          </div>
        ))}
    </>
  );
}

export default App;
