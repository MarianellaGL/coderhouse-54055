import { useState } from "react";

export const withFilterInTask = (BaseComponent) => {
  const TaskFilter = (props) => {
    const [filter, setFilter] = useState('');

    const handleFilterChange = (event) => {
      setFilter(event.target.value);
    };

    const filteredTasks = props.tasks.filter(task =>
      task.text.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <input
          type="text"
          placeholder="Filter tasks..."
          value={filter}
          onChange={handleFilterChange}
        />
        <BaseComponent {...props} tasks={filteredTasks} />
      </div>
    );
  };

  return TaskFilter;
};