import moment from "moment";
import { useEffect, useRef, useState } from "react";
import ShownAreaChart from "./ShowAreaChart";
import ShowResultTable from "./ShowResultTable";
import styles from "./ShowAreaChartView.module.css";

const InfoCalculation = () => {
  const elRel = useRef(null);
  const now = moment().format("YYYY-MM-DD");
  const [date, setDate] = useState(now);
  const [data, setData] = useState(null);

  // const defaultData = [
  //   { name: "Jan", price: 0 },
  //   { name: "Feb", price: 0 },
  //   { name: "Mar", price: 0 },
  //   { name: "Apr", price: 0 },
  //   { name: "May", price: 0 },
  //   { name: "Jun", price: 0 },
  //   { name: "Jul", price: 0 },
  //   { name: "Aug", price: 0 },
  //   { name: "Sep", price: 0 },
  //   { name: "Oct", price: 0 },
  //   { name: "Nov", price: 0 },
  //   { name: "Dec", price: 0 },
  // ];
  const sampleData = [
    { id: 1, name: "Jan", price: 39 },
    { id: 2, name: "Feb", price: 50 },
    { id: 3, name: "Mar", price: 40 },
    { id: 4, name: "Apr", price: 35 },
    { id: 5, name: "May", price: 30 },
    { id: 6, name: "Jun", price: 50 },
    { id: 7, name: "Jul", price: 55 },
    { id: 8, name: "Aug", price: 60 },
    { id: 9, name: "Sep", price: 36 },
    { id: 10, name: "Oct", price: 28 },
    { id: 11, name: "Nov", price: 40 },
    { id: 12, name: "Dec", price: 45 },
  ];

  const handleDateChange = () => {
    setDate(elRel.current.value);
  };

  useEffect(() => {
    // api call
    // setData(defaultData);
    setData(sampleData);
    // pass data to chart;
  }, [date]);

  return (
    <>
      <div className={styles.containerBody}>
        <div
          className={`${styles.inputGroup} input-group input-group-sm mb-3 px-5`}
        >
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Start Date
            </span>
          </div>
          <input
            className="form-control"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            type="date"
            id="start"
            name="date-start"
            ref={elRel}
            value={now}
            min={now}
            onChange={handleDateChange}
          />
        </div>
        <div className="result-group mt-5">
          <ShownAreaChart data={data} />
        </div>
        <div className="result-table mt-5 px-5">
          <ShowResultTable data={data} />
        </div>
      </div>
    </>
  );
};

export default InfoCalculation;
