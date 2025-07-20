
import { Link } from 'react-router-dom'

import { Card, Drawer } from 'antd'
import { useState } from 'react'
import TodoList from '../../page/todo/Todo';


const CalendarWeek = () => {
  const [drawer, setDrawer] = useState(false);

  const drawerSide = () => {
    setDrawer(!drawer);
  }
  return (
    <div className='calendar-week'>
      <button><Link to='/'>Back</Link></button>
      <Link to='/todo'><Card>1</Card></Link> 
  
      <Drawer width={500} placement="right" open={drawer} onClose={drawerSide}>  <TodoList /></Drawer>
      <button onClick={drawerSide}>Todos </button>
      
    </div>
  )
}

export default CalendarWeek