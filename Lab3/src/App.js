import "./styles.css";
import useFetch from "./useFetch";
export default function App() {
  const post = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <div className="App">
      <table>
        {post &&
          post.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.username}</td>
            </tr>
          ))}
      </table>
    </div>
  );
}
