/** @jsx jsx */
import { jsx, css } from "@emotion/core";

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
        <label htmlFor='attire-select'>Filter by attire:</label>
        <select
          id='attire-select'
          css={formElementCss}
          value={attireValue}
          onChange={e => setAttireValue(e.target.value)}
          disabled={disabled}
        >
          {renderOptions(attire)}
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
        Sort by:
        <input
          type='radio'
          id='name'
          name='sort'
          value='name'
          checked={sortBy === "name"}
          onChange={e => setSortBy(e.target.value)}
          disabled={disabled}
        />
        <label htmlFor='name'>Name</label>
        <input
          type='radio'
          id='state'
          name='sort'
          value='state'
          checked={sortBy === "state"}
          onChange={e => setSortBy(e.target.value)}
          disabled={disabled}
        />
        <label htmlFor='state'>State</label>
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
