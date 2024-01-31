import "./index.css";
import { useState } from "react";
import { animals, birds } from "./animalsList";
import Home from "./routes/Home";
import Root from "./routes/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./routes/About";
import CategoryPage from "./routes/CategoryPage";

function App() {
  const [zoo, setZoo] = useState({
    animals: animals,
    birds: birds,
  });

  const [search, setSearch] = useState("");

  const removeHandler = (name, category) => {
    const updatedArray = zoo[category].filter((el) => el.name !== name);
    setZoo({ ...zoo, [category]: updatedArray });
  };

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const likesHandler = (name, action, category) => {
    const updatedArray = zoo[category].map((el) => {
      if (el.name === name) {
        if (action === "add") {
          return { ...el, likes: el.likes + 1 };
        }
        if (action === "away") {
          return { ...el, likes: el.likes - 1 };
        }
      } else {
        return el;
      }
    });

    setZoo({ ...zoo, [category]: updatedArray });
  };

  const cleanHandler = () => {
    setSearch("");
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/:category",
          element: (
            <CategoryPage
              {...zoo}
              searchHandler={searchHandler}
              removeHandler={removeHandler}
              likesHandler={likesHandler}
              cleanHandler={cleanHandler}
              search={search}
              zoo={zoo}
            />
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
