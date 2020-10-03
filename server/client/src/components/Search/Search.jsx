/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState } from "react";
import axios from "axios";

const Search = props => {
  const { states, genres } = props;
  const formCss = css`
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const inputCss = css`
    padding: 12px;
    border-radius: 12px;
    margin: 8px;
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
        e.preventDefault();
        // axios.post
      }}
    >
      <div
        css={css`
          margin: auto;
          vertical-align: middle;
        `}
      >
        <select>{renderOptions(states)}</select>
        <select>{renderOptions(genres)}</select>
        <input css={inputCss} type='text'></input>
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
