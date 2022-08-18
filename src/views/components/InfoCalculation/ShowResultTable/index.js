import styles from "./ShowChart.module.css";

const ShowResultTable = ({ data }) => {
  return (
    <div
      className={styles.chartBg}
      style={{
        // background: "#eef1f3",
        border: "none",
        borderRadius: "5px",
        // paddingBlock: "1em",
        padding: "3em",
      }}
    >
      <table className="table text-white">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Month</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Cost</th>
          </tr>
        </thead>
        <tbody>
          {data
            ? data.map((item) => {
                console.log(item);
                return (
                  <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>{item.cost}</td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
      <nav
        aria-label="Page navigation example"
        className="d-flex justify-content-center"
      >
        <ul class="pagination">
          <li class="page-item">
            <a
              class="page-link text-light"
              href="#"
              style={{ background: "#ff000000" }}
            >
              Previous
            </a>
          </li>
          <li class="page-item">
            <a
              class="page-link text-light"
              href="#"
              style={{ background: "#ff000000" }}
            >
              1
            </a>
          </li>
          <li class="page-item">
            <a
              class="page-link text-light"
              href="#"
              style={{ background: "#ff000000" }}
            >
              2
            </a>
          </li>
          <li class="page-item">
            <a
              class="page-link text-light"
              href="#"
              style={{ background: "#ff000000" }}
            >
              3
            </a>
          </li>
          <li class="page-item">
            <a
              class="page-link text-light"
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
