import React, { useState } from "react";

const HomeScreen = ({ user }) => {
  // const [favorites, setFavorites] = useState([])

  return (
    <div>
      <div>Hello {user.toUpperCase()}</div>
    </div>
  );
};

export default HomeScreen;
