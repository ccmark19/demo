import moment from "moment";
import { useEffect, useRef, useState } from "react";
import ShownAreaChart from "./ShowAreaChart";
import ShowRadialBarChart from "./ShowRadialBarChart";
import ShowRadarChart from "./ShowRadarChart";
import ShowPieChart from "./ShowPieChart";
import ShowResultTable from "./ShowResultTable";
import styles from "./ShowAreaChartView.module.css";
import Analyis from "../Analyis";
import sampleData from "../../../sampleData";

const InfoCalculation = () => {
  const elRel = useRef(null);
  const targetMonthRange = 6;
  const now = moment().format("YYYY-MM-DD");
  const [date, setDate] = useState(now);
  const [data, setData] = useState(null);
  const [report, setReport] = useState(null);

  const defaultData = [
    { id: 1, name: "Jan", price: 2847, quantity: 2025, cost: 1978 },
    { id: 2, name: "Feb", price: 1568, quantity: 1767, cost: 1891 },
    { id: 3, name: "Mar", price: 2590, quantity: 1653, cost: 1898 },
    { id: 4, name: "Apr", price: 2738, quantity: 1798, cost: 1933 },
    { id: 5, name: "May", price: 2530, quantity: 2058, cost: 1970 },
    { id: 6, name: "Jun", price: 2413, quantity: 2189, cost: 2002 },
    // { id: 7, name: "Jul", price: 55, quantity: 35, cost: 40 },
    // { id: 8, name: "Aug", price: 60, quantity: 30, cost: 35 },
    // { id: 9, name: "Sep", price: 36, quantity: 28, cost: 30 },
    // { id: 10, name: "Oct", price: 28, quantity: 35, cost: 25 },
    // { id: 11, name: "Nov", price: 40, quantity: 37, cost: 20 },
    // { id: 12, name: "Dec", price: 45, quantity: 30, cost: 22 },
  ];

  const handleDateChange = () => {
    const tempData = elRel.current.value;
    setDate(tempData);
  };

  const handleReport = () => {
    setData(defaultData);
  };

  // useEffect(() => {
  //   setData(defaultData);
  // }, []);

  useEffect(() => {
    if (data) {
      let targetDate = moment(new Date(date))
        .add(targetMonthRange, "months")
        .calendar();
      targetDate = moment(targetDate).format("M/D/YYYY");

      sampleData.map((item) => {
        const tempDate = item.Date;
        if (targetDate == tempDate) {
          setReport(item);
        }
      });
    }
  }, [date, data]);

  return (
    <>
      <div className={styles.containerBody}>
        <div className={`${styles.inputGroup} input-group input-group-sm mb-3`}>
          <input
            style={{
              background: "#eef1f3",
              border: "none",
              borderRadius: "5px",
            }}
            className="form-control bg-text-muted"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            type="date"
            id="start"
            name="date-start"
            ref={elRel}
            value={date}
            min={now}
            onChange={handleDateChange}
          />
          <div
            className="input-group-prepend"
            style={{ paddingInline: "1.25rem" }}
          >
            <span
              className="input-group-text"
              id="inputGroup-sizing-sm"
              style={{
                background: "#74efae",
                border: "none",
              }}
              onClick={() => handleReport()}
            >
              Report
            </span>
          </div>
        </div>
        <div
          className="result-group mt-4 d-flex"
          style={{ justifyContent: "space-between" }}
        >
          <Analyis report={report} />
          <ShowPieChart />
          <ShownAreaChart data={data} />
        </div>
        <div className="result-table mt-4">
          <ShowResultTable data={data} />
        </div>
      </div>
    </>
  );
};

export default InfoCalculation;
