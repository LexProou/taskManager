import classes from './MySelect.module.scss'
interface Props {
    selectedValue: string;
    setSelectedValue: (value: string) => void;
   
}

const MySelect: React.FC<Props> = ({selectedValue, setSelectedValue}) => {
  return (
    <div>
        <select
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
            style={{ width: 150 }}
            className={classes.MySelect}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
    </div>
  )
}

export default MySelect