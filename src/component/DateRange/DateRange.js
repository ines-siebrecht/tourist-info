import React  from 'react';

import DateTimePicker from 'react-datetime-picker';

const DateRange = (props) => {

    return (
        <div>
            <DateTimePicker onChange={props.startChange} value={props.startDate} returnValue="start"/>
            <DateTimePicker onChange={props.endChange} value={props.endDate} returnValue="end"/>
        </div>
    )
};

export default DateRange;
