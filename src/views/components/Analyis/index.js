import styles from "./Analyis.module.css";
const Analyis = ({ report }) => {
  return (
    <div className={styles.chartBg} style={{ color: "white" }}>
      <div className="d-flex flex-column">
        {report
          ? Object.keys(report).map((item, key) => {
              return (
                <p key={key} className="d-flex flex-row">
                  <span>{item}</span>
                  <span>{report[item]}</span>
                </p>
              );
            })
          : null}
      </div>
    </div>
  );
};
export default Analyis;
