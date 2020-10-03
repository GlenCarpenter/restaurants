/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import PropTypes from "prop-types";

const Table = props => {
  const { data } = props;
  const keys = ["name", "city", "state", "telephone", "genre"];

  const renderHeaders = () => (
    <tr>
      {keys.map((key, i) => (
        <th key={key + i}>{key}</th>
      ))}
    </tr>
  );

  const renderTableData = data =>
    data.map(el => (
      <tr key={el.id}>
        {keys.map((key, i) => (
          <td key={key + i}>{el[key]}</td>
        ))}
      </tr>
    ));

  return (
    <table>
      {data && (
        <tbody>
          {renderHeaders(data[0])}
          {renderTableData(data)}
        </tbody>
      )}
    </table>
  );
};

Table.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      address1: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      zip: PropTypes.string,
      lat: PropTypes.string,
      long: PropTypes.string,
      telephone: PropTypes.string,
      tags: PropTypes.string,
      website: PropTypes.string,
      genre: PropTypes.string,
      hours: PropTypes.string,
      attire: PropTypes.string
    })
  )
};

export default Table;
