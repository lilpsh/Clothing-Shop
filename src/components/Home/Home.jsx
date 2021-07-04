import React, { useEffect } from "react";
import ItemsList from "../ItemsList/ItemsList.jsx";
import Cart from "../Cart/Cart";

function Home(props) {
  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      props.history.push("/login");
    }
  });

  return (
    <div className="Home">
      <ItemsList />
      <Cart />
    </div>
  );
}

export default Home;
