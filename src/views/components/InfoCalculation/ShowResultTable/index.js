import styles from "./ShowChart.module.css";

const ShowResultTable = ({ data }) => {
  return (
    <div
      className={styles.chartBg}
      style={{
        // background: "#eef1f3",
        border: "none",
        borderRadius: "15px",
        // paddingBlock: "1em",
        padding: "3em",
        maxHeight: "47vh",
        // overflow: "auto",
      }}
    >
      <table className="table text-white">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Month</th>
            <th scope="col">屠宰企业屠宰量（万头）</th>
            <th scope="col">生猪每头产值（元）</th>
            <th scope="col">生猪每头成本（元）</th>
          </tr>
        </thead>
        <tbody>
          {data
            ? data.map((item) => {
                return (
                  <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td className="text-center">{item.name}</td>
                    <td className="text-center">{item.price}</td>
                    <td className="text-center">{item.quantity}</td>
                    <td className="text-center">{item.cost}</td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
      <nav
        aria-label="Page navigation example"
        className="d-flex justify-content-center mt-2"
      >
        <ul className="pagination">
          <li className="page-item">
            <a
              className="page-link text-light"
              href="#"
              style={{ background: "#ff000000" }}
            >
              Previous
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link text-light"
              href="#"
              style={{ background: "#ff000000" }}
            >
              1
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link text-light"
              href="#"
              style={{ background: "#ff000000" }}
            >
              2
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link text-light"
              href="#"
              style={{ background: "#ff000000" }}
            >
              3
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link text-light"
              href="#"
              style={{ background: "#ff000000" }}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ShowResultTable;
