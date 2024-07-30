import "./App.css";
import "../component/component.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShowContact from "../component/ShowContact.jsx";
import { useEffect, useState } from "react";

function App() {
  const [allContact, setAllContact] = useState([]);

  let router = createBrowserRouter([
    {
      path: "/",
      element: <ShowContact allContact={allContact} />,
    }
  ]);

  useEffect(() => {
    fetch("http://localhost:8080/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setAllContact(data);
      });
  }, allContact);

  return (
    <div className="App">
      <h2>My contacts</h2>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
