import React, { FormEvent, FormEventHandler } from "react";

import styles from "../style/Input.module.css";

interface AddProps {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

function Input({ tasks, setTasks }: AddProps) {
    const handleSubmit: FormEventHandler = (event: FormEvent) => {
        event.preventDefault();

        const form = document.querySelector("form") as HTMLFormElement;
        const titleInput = form.querySelector("#title") as HTMLInputElement;
        const contentInput = form.querySelector("#content") as HTMLInputElement;

        setTasks([
            ...tasks, { title: titleInput.value, content: contentInput.value }
        ]);

        form.reset();
    };

    return (
        <>
            <div className={styles.Input}>
                <form className={styles.Form} onSubmit={handleSubmit}>
                    <input type="text" id="title" required className={styles.Title} />
                    <input type="text" id="content" className={styles.Content} required />
                    <button type="submit" value="Add" className={styles.Button}>
                        <span className="material-symbols-outlined">done</span>
                    </button>
                </form>
            </div>
        </>
    );
}

export default Input;
