import { withFilterInTask } from "../hoc/withFilterInTask";
import Task from "./Task"



const TaskList = ({ tasks, handleChangeTaskState }) => {
  return (
    <section className="list">
      {
        tasks.map(task => <Task key={task.id} {...task} {...{ handleChangeTaskState }} />)
      }
    </section>
  )
}

const FilteredComponent = withFilterInTask(TaskList);

export default FilteredComponent;