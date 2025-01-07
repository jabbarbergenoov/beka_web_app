import { useEffect, useState } from "react";

function App() {
  const [userId, setUserId] = useState(null);
  const [name, setName] = useState(null);

  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.expand();

    const user_id = tg.initDataUnsafe.user?.id;
    const name = tg.initDataUnsafe.user.username;
    setName(name);
    setUserId(user_id);

    console.log("User ID:", user_id);
    console.log(tg.initDataUnsafe);
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>{userId ? `Ваш ID: ${userId}` : "Загрузка..."}</h1>
      <h1>{name}</h1>
    </div>
  );
}

export default App;
