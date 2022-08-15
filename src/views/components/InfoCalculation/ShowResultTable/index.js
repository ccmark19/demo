const ShowResultTable = ({ data }) => {
  return (
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
  );
};

export default ShowResultTable;
