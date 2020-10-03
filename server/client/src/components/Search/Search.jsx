/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState } from "react";
import axios from "axios";

const Search = props => {
  const { states, genres, setData } = props;

  const [searchValue, setSearchValue] = useState("");
  const [stateValue, setStateValue] = useState("");
  const [genreValue, setGenreValue] = useState("");

  const formCss = css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const formElementCss = css`
    padding: 12px;
    border-radius: 12px;
    margin: 8px;
  `;

  const inputCss = css`
    width: 320px;
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

  const handleSubmit = e => {
    e.preventDefault();
    console.log(searchValue, stateValue, genreValue);
    axios
      .post("/api/data", {
        searchValue,
        stateValue,
        genreValue
      })
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const renderOptions = options =>
    options.map((option, i) => (
      <option key={option + i} value={option}>
        {option}
      </option>
    ));

  return (
    <form
      css={formCss}
      onSubmit={e => {
        handleSubmit(e);
      }}
    >
      <div
        css={css`
          margin: auto;
          vertical-align: middle;
        `}
      >
        <label for='state-select'>Filter by state:</label>
        <select
          id='state-select'
          css={formElementCss}
          value={stateValue}
          onChange={e => setStateValue(e.target.value)}
        >
          {renderOptions(states)}
        </select>
        <label for='genre-select'>Filter by genre:</label>
        <select
          id='genre-select'
          css={formElementCss}
          value={genreValue}
          onChange={e => setGenreValue(e.target.value)}
        >
          {renderOptions(genres)}
        </select>
        <input
          css={[formElementCss, inputCss]}
          type='text'
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          placeholder='Filter by name, state, or genre'
        ></input>
      </div>
      <button css={buttonCss}>Search</button>
    </form>
  );
};

Search.defaultProps = {
  states: [],
  genres: []
};
export default Search;
