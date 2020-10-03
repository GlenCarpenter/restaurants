/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState } from "react";
import axios from "axios";

const Search = props => {
  const { states, genres, setData } = props;

  const [searchValue, setSearchValue] = useState("");
  const [stateValue, setStateValue] = useState("");
  const [genreValue, setGenreValue] = useState("");
  const [disabled, setDisabled] = useState(false);

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
    &:disabled {
      cursor: not-allowed;
    }
  `;

  const inputCss = css`
    width: 320px;
  `;

  const buttonCss = css`
    display: inline-block;
    margin: 12px;
    padding: 12px;
    color: #fff;
    background-color: DodgerBlue;
    border-radius: 5px;
    &:hover {
      cursor: pointer;
    }
    &:disabled {
      background-color: gray;
      cursor: not-allowed;
    }
  `;

  const handleSubmit = e => {
    e.preventDefault();
    setDisabled(true);
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

    setDisabled(false);
  };

  const handleReset = () => {
    setDisabled(true);
    axios
      .get("/api/data")
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    setDisabled(false);
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
        <label htmlFor='state-select'>Filter by state:</label>
        <select
          id='state-select'
          css={formElementCss}
          value={stateValue}
          onChange={e => setStateValue(e.target.value)}
          disabled={disabled}
        >
          {renderOptions(states)}
        </select>
        <label htmlFor='genre-select'>Filter by genre:</label>
        <select
          id='genre-select'
          css={formElementCss}
          value={genreValue}
          onChange={e => setGenreValue(e.target.value)}
          disabled={disabled}
        >
          {renderOptions(genres)}
        </select>
        <input
          css={[formElementCss, inputCss]}
          type='text'
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          placeholder='Filter by name, state, or genre'
          disabled={disabled}
        ></input>
      </div>
      <div>
        <button css={buttonCss} disabled={disabled}>
          Search
        </button>
        <button
          type='button'
          onClick={handleReset}
          css={[
            buttonCss,
            css`
              background-color: #4caf50;
            `
          ]}
          disabled={disabled}
        >
          Reset
        </button>
      </div>
    </form>
  );
};

Search.defaultProps = {
  states: [],
  genres: []
};
export default Search;
