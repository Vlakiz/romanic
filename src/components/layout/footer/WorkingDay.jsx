import React from 'react';

const WorkingDay = ({ daysOfWeek, workingHours, cols = [5, 7] }) => {
  return (
    <div className='row my-2'>
      <div className={`col-${cols[0]} d-flex align-self-center`}>
        {daysOfWeek}
      </div>
      <div className={`col-${cols[1]} text-end d-flex align-self-center`}>
        {workingHours}
      </div>
    </div>
  );
};

export default WorkingDay;