import Button from './Button'


const Task = ({ id, text, completed, handleChangeTaskState }) => {
  return (
    <article
      className="task"
    >
      <h3>{text}</h3>
      <Button
        color={completed ? 'green' : 'red'}
        callback={() => handleChangeTaskState(id)}
      >
        {completed ? 'Completa' : 'Incompleta'}
      </Button>
    </article>
  )
}

export default Task