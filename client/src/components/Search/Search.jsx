/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Fragment } from "react";
import { titleCase } from "../../utils";

const Search = props => {
  const {
    states,
    genres,
    attire,
    searchValue,
    setSearchValue,
    stateValue,
    setStateValue,
    genreValue,
    setGenreValue,
    attireValue,
    setAttireValue,
    disabled,
    sortBy,
    setSortBy,
    handleSubmit,
    handleReset
  } = props;

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

  const renderOptions = options =>
    options.map((option, i) => (
      <option key={option + i} value={option}>
        {option}
      </option>
    ));

  const renderSelect = (value, setValue, options, label) => (
    <Fragment>
      <label htmlFor={`${label}-select`}>Filter by {label}:</label>
      <select
        id={`${label}-select`}
        css={formElementCss}
        value={value}
        onChange={e => setValue(e.target.value)}
        disabled={disabled}
      >
        {renderOptions(options)}
      </select>
    </Fragment>
  );

  const renderRadioButton = val => (
    <Fragment>
      <input
        type='radio'
        name='sort'
        id={val}
        value={val}
        checked={sortBy === val}
        onChange={e => setSortBy(e.target.value)}
        disabled={disabled}
      />
      <label htmlFor={val}>{titleCase(val)}</label>
    </Fragment>
  );

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
        {renderSelect(stateValue, setStateValue, states, "state")}
        {renderSelect(genreValue, setGenreValue, genres, "genre")}
        {renderSelect(attireValue, setAttireValue, attire, "attire")}
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
        Sort by:
        {renderRadioButton("name")}
        {renderRadioButton("state")}
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

Search.defaultProps = {};

export default Search;
