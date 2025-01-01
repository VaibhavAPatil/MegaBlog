import "./App.css";
import conf from "./conf/conf";

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL);
  return (
    <>
      <h1>MegaBlog Feat. Appwrite</h1>
    </>
  );
}

export default App;
