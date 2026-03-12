import React, { useState } from "react";

function App() {

  const [mood, setMood] = useState("");

  const moodStyle = {
    Happy: { backgroundColor: "#fff9c4", emoji: "😊", message: "You are feeling Happy!" },
    Sad: { backgroundColor: "#bbdefb", emoji: "😢", message: "You are feeling Sad!" },
    Neutral: { backgroundColor: "#e0e0e0", emoji: "😐", message: "You feel Neutral today!" }
  };

  const currentMood = moodStyle[mood] || {};

  return (
    <div style={{
      textAlign: "center",
      marginTop: "100px",
      padding: "30px",
      backgroundColor: currentMood.backgroundColor || "white",
      height: "100vh"
    }}>

      <h1>Mood Tracker</h1>

      <button onClick={() => setMood("Happy")} style={{margin:"10px", padding:"10px"}}>😊 Happy</button>

      <button onClick={() => setMood("Neutral")} style={{margin:"10px", padding:"10px"}}>😐 Neutral</button>

      <button onClick={() => setMood("Sad")} style={{margin:"10px", padding:"10px"}}>😢 Sad</button>

      {mood && (
        <div>
          <h2>{currentMood.emoji}</h2>
          <h3>{currentMood.message}</h3>
        </div>
      )}

    </div>
  );
}

export default App;