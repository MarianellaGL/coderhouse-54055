const Select = ({ options, onSelect, defaultOption }) => {
  return (<select
    onChange={(evt) => onSelect(evt.target.value)}>
    {options.map(o => <option key={o.value} value={o.value}>{o.text}</option>)}
  </select>
  );
}

export default Select;