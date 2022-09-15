import React, { useState } from "react";
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css'

function CalendarPage() {

    const [date, setDate] = useState(new Date());
    const [rangeDate, setRangeDate] = useState(new Date());

    return (
        <div className="row d-flex">
            <div className="app col-md-6">
                <h1 className="header">React Calendar</h1>
                <div className="calendar-container  mt-2">
                    <Calendar onChange={setDate} value={date}/>
                </div>
                <div className="text-center mt-4">
                    Selected date: {date.toDateString()}
                </div>
            </div>
            <div className='app col-md-6 mt-3'>
                <h1>React Calendar with Range</h1>
                <div className="mt-2">
                    <Calendar onChange={setRangeDate} value={rangeDate} selectRange={true}/>
                </div>
                {rangeDate.length > 0 ? (
                <p>
                    <span>Start:</span>{' '} {rangeDate[0].toDateString()}
                    &nbsp; to &nbsp;
                    <span>End:</span> {rangeDate[1].toDateString()}
                </p>
                        ) : (
                <p className="mt-2">
                    <span>Default selected date:</span>{' '} {rangeDate.toDateString()}
                </p>
                        )}
                </div>
            </div>
    );
}

export default CalendarPage;