import React, { useState } from "react";

import Item from "./Item";
import Input from "./Input";

import styles from "../style/App.module.css";

function App() {
    const [tasks, setTasks] = useState<Task[]>([
        { title: "Sample", content: "This is Sample Content!" }
    ]);

    return (
        <>
            <h1 className={styles.Title}>React ToDo</h1>
            <Input tasks={tasks} setTasks={setTasks} />
            {
                tasks.map(({ title, content }: Task, index) =>
                    <Item key={index} index={index} title={title} content={content} tasks={tasks} setTasks={setTasks} />
                )
            }
        </>
    );
}

export default App;
