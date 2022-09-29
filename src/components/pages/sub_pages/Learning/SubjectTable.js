import "./_subject-table.css";


 const SubjectTable = ({ cols,  data, bordered, hoverable, striped, isDark }) => {
  return (
    <div className="table-responsive">
      <table
        className={`table ${bordered ? "table-bordered" : "table-borderless"} ${
          hoverable && "table-hover"
        } ${striped && "table-striped"} ${isDark && "table-dark"}`}
      >
        <thead>
          <tr>
            {cols.map((headerItem, index) => (
              <th key={index}>{headerItem}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {item.map((col, key) => (
                <td key={key}>{col}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default SubjectTable;