// import { Card } from 'antd';
// import Modal from '../Modal';
// import { useState } from 'react';

// const CalendarDay: React.FC = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const days = Array(30).fill(null).map((_, index) => ({ day: index + 1, key: index }));

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="calendar-day">
//       {days.map((day) => (
//         <div key={day.key}>
//           <Card onClick={openModal}>
//             <h2>День {day.day}</h2>
//           </Card>
//           <Modal isOpen={isModalOpen} onClose={closeModal} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CalendarDay;

import React, { } from 'react'

import { Card } from 'antd';
import TodoList from '../../page/todo/Todo';


const TaskManager: React.FC = () => {


  return (
    <div className="calendar-day">

      <Card > <h1>1</h1></Card>
      <div className='day'>
        <h2>Todo List</h2>
        <TodoList />
      </div>


    </div>
  );
};

export default TaskManager;