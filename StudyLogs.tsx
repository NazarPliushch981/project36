import { useState, useRef } from "react";
export default function StudyLogs() {
  const logsRef = useRef<string[]>([]);
  
  const [showHistory, setShowHistory] = useState(false);
  const [_, setForceRender] = useState(false);

  const addLog = (courseTitle: string, lessonNumber: number) => {
    const time = new Date().toLocaleTimeString();
    const logString = `[${time}] Пройдено урок {lessonNumber} курсу '${courseTitle}'`;
    
    logsRef.current.push(logString);
    console.log("Додано лог:", logString);
  };

  return (
    <div style={{ border: "2px dashed orange", padding: "15px", margin: "20px 0", background: "#fff9e6" }}>
      <h3>Історія активності</h3>

      <div style={{ marginBottom: "15px" }}>
        <p>Пройти урок:</p>
        <button 
          onClick={() => addLog("React Frontend", 3)}
          style={{ marginRight: "10px", padding: "5px 10px" }}
        >
          Пройти урок №3 (React)
        </button>

        <button 
          onClick={() => addLog("JavaScript Advanced", 5)}
          style={{ padding: "5px 10px" }}
        >
          Пройти урок №5 (JS)
        </button>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <button 
          onClick={() => setShowHistory(!showHistory)}
          style={{ background: "#6c757d", color: "white", padding: "8px 12px", border: "none", cursor: "pointer" }}
        >
          {showHistory ? "Сховати логи" : "Показати історію логів"}
        </button>
      </div>
      {showHistory && (
        <div style={{ background: "white", padding: "10px", border: "1px solid #ccc" }}>
          <h4>Логи в буфері (useRef):</h4>
          {logsRef.current.length === 0 ? (
            <p style={{ color: "gray" }}>Поки що пусто...</p>
          ) : (
            <ul>
              {logsRef.current.map((log, index) => (
                <li key={index} style={{ fontSize: "14px", fontFamily: "monospace" }}>
                  {log}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
