/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { paginateArray } from "../../utils";
import { Paginator } from "../";

const Table = props => {
  const { data } = props;
  // State for current paginated view
  const [page, setPage] = useState(0);
  // Keys for headers and columns
  const keys = ["name", "city", "state", "telephone", "genre"];

  const tableCss = css`
    width: 95%;
    margin: auto;
    min-height: 50vh;
    border-collapse: collapse;
    border: 1px solid Gray;
  `;

  const thCss = css`
    padding: 12px;
  `;
  const tdCss = css`
    padding: 8px;
    text-align: center;
    vertical-align: middle;
  `;
  const paginatedData = paginateArray(data, 10);

  const renderHeaders = () => (
    <tr
      css={css`
        border-bottom: 1px solid gray;
      `}
    >
      {keys.map((key, i) => (
        <th css={thCss} key={key + i}>
          {key}
        </th>
      ))}
    </tr>
  );

  const renderTableData = data =>
    data.map(el => (
      <tr key={el.id}>
        {keys.map((key, i) => (
          <td css={tdCss} key={key + i}>
            {el[key]}
          </td>
        ))}
      </tr>
    ));

  return (
    <Fragment>
      <table css={tableCss}>
        {data && (
          <tbody>
            {renderHeaders(data[0])}
            {renderTableData(paginatedData[page])}
          </tbody>
        )}
      </table>
      <Paginator pages={paginatedData.length} setPage={setPage} />
    </Fragment>
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
