import Task from "./Task";

function TaskList(props) {
    
    const { lista } = props;

    return (
        <ol>
            {
                lista.map((tarea) => (
                    <Task id={tarea.id} nombre={tarea.descripcion} />
                ))
            }
        </ol>
    )
}

export default TaskList