const ShowResultTable = ({ data }) => {
  return (
    <div
      style={{
        background: "#eef1f3",
        border: "none",
        borderRadius: "5px",
        paddingBlock: "1em",
      }}
    >
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Month</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {data
            ? data.map((item) => {
                return (
                  <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default ShowResultTable;
