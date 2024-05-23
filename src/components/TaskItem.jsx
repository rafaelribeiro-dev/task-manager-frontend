const TaskItem = ({ task }) => {
    return (
        <>
            <p>{task.id}</p>
            <h1>{task.description}</h1>
            <p>{task.isCompleted ? "Tarefa Feita" : "Falta Concluir"}</p>
        </>
    );
};

export default TaskItem;
