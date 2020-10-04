/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import PropTypes from "prop-types";

const Paginator = props => {
  const { pages, setPage } = props;
  const containerCss = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 24px;
  `;
  const ulCss = css`
    list-style-type: none;
    display: flex;
    justify-content: center;
    padding-inline-start: 0px;
  `;
  const liCss = css`
    text-decoration: none;
  `;
  const buttonCss = css`
    margin: 12px;
    padding: 12px;
    color: #fff;
    background-color: DodgerBlue;
    border-radius: 5px;
    &:hover {
      cursor: pointer;
    }
  `;

  const pageNums = [];

  for (let i = 1; i <= pages; i++) {
    pageNums.push(
      <li css={liCss} key={"pageNum" + i}>
        <button css={buttonCss} onClick={() => setPage(i - 1)}>
          {i}
        </button>
      </li>
    );
  }
  return (
    <div css={containerCss}>
      <div>Page</div>
      <ul css={ulCss}>{pageNums}</ul>
    </div>
  );
};

Paginator.propTypes = {
  pages: PropTypes.number,
  setPage: PropTypes.func
};

export default Paginator;
