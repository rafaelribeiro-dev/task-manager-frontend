import { AiFillDelete } from "react-icons/ai";

const TaskItem = ({ task }) => {
    return (
        <div className="task-item-container">
            <div className="task-description">
                <label
                    classsName={
                        task.iscompleted
                            ? "checkbox-container-completed"
                            : "checkbox-container"
                    }
                >
                    {task.decription}
                    <input type="checkbox" defaultChecked={task.iscompleted} />
                    <span
                        className={
                            task.isCompleted
                                ? "checkmark completed"
                                : "checkmark"
                        }
                    ></span>
                </label>
            </div>
            <div className="deldete">
                <AiFillDelete size={20} color="#f97474" />
            </div>
        </div>
    );
};

export default TaskItem;
