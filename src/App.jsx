import { useEffect, useState } from "react";

function App() {
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const tg = window.Telegram.WebApp;
        tg.expand();

        // Получение user_id
        const user_id = tg.initDataUnsafe.user?.id;
        setUserId(user_id); // Устанавливаем user_id в состояние

        console.log("User ID:", user_id);
    }, []);

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>{userId ? `Ваш ID: ${userId}` : "Загрузка..."}</h1>
        </div>
    );
}

export default App;
