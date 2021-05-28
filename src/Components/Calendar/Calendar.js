import React from "react";
import { useSelector } from "react-redux";
import DateComponent from "../Date/Date";

function Calendar() {
  const data = useSelector((data) => Object.entries(data.days));
  console.log(data);

  return (
    <main className="calendar">
      <h1>Calendar</h1>
      
      <div className="row">
        <DateComponent date={"Sun"} />
        <DateComponent date={"Mon"} />
        <DateComponent date={"Tue"} />
        <DateComponent date={"Wed"} />
        <DateComponent date={"Thu"} />
        <DateComponent date={"Fri"} />
        <DateComponent date={"Sat"} />
      </div>

      <div className="row">
        {data.map((el, index) => (
          <DateComponent key={index} tasks={el[1]} date={el[0]} />
        ))}
      </div>
    </main>
  );
}

export default Calendar;
