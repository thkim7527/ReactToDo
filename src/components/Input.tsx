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
            { title: titleInput.value, content: contentInput.value }, ...tasks
        ]);

        form.reset();
        titleInput.focus();
    };

    return (
        <>
            <div className={styles.Input}>
                <form className={styles.Form} onSubmit={handleSubmit}>
                    <input type="text" id="title" required autoFocus className={styles.Title} placeholder="Title" />
                    <input type="text" id="content" required className={styles.Content} placeholder="Content" />
                    <button type="submit" value="Add" className={styles.Button}>
                        <span className="material-symbols-outlined">done</span>
                    </button>
                </form>
            </div>
        </>
    );
}

export default Input;
