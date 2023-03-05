function Task(props) {

    const { id, nombre } = props;

    return (
        <li>
            <input type='checkbox' id={id} />
            <label htmlFor={id}> {nombre} </label>
            <button>editar</button>
            <button>eliminar</button>
        </li>
    )
}

export default Task