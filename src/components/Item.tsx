import React, { MouseEventHandler } from "react";

import styles from "../style/Item.module.css";

interface ItemProps {
    index: number;
    title: string;
    content: string;
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

function Item({ index, title, content, tasks, setTasks }: ItemProps) {
    const handleSubmit: MouseEventHandler<HTMLButtonElement> = () => {
        setTasks([
            ...(tasks.filter((_, i) => i !== index))
        ]);
    };

    return (
        <>
            <div className={styles.Item}>
                <div className={styles.Title}>{title}</div>
                <div className={styles.Content}>{content}</div>
                <button className={styles.Button} onClick={handleSubmit}>
                    <span className="material-symbols-outlined">close</span>
                </button>
            </div>
        </>
    );
}

export default Item;
