/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState } from "react";
import axios from "axios";
import Search from "./Search";

const SearchWrapper = props => {
  const { setData } = props;

  const [searchValue, setSearchValue] = useState("");
  const [stateValue, setStateValue] = useState("");
  const [genreValue, setGenreValue] = useState("");
  const [attireValue, setAttireValue] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [sortBy, setSortBy] = useState("name");

  const handleSubmit = e => {
    e.preventDefault();
    setDisabled(true);
    axios
      .post("/api/data", {
        searchValue,
        stateValue,
        genreValue,
        attireValue,
        sortBy
      })
      .then(response => {
        setData(response.data);
      })
      .then(() => setDisabled(false))
      .catch(error => {
        console.error(error);
        setDisabled(false);
      });
  };

  const handleReset = () => {
    setDisabled(true);
    setSearchValue("");
    setStateValue("");
    setGenreValue("");
    setAttireValue("");
    setSortBy("name");

    axios
      .get("/api/data")
      .then(response => {
        setData(response.data);
      })
      .then(() => setDisabled(false))
      .catch(error => {
        console.log(error);
      });
  };

  const SearchProps = {
    searchValue,
    setSearchValue,
    stateValue,
    setStateValue,
    genreValue,
    setGenreValue,
    attireValue,
    setAttireValue,
    disabled,
    setDisabled,
    sortBy,
    setSortBy,
    handleSubmit,
    handleReset
  };

  return <Search {...SearchProps} {...props} />;
};

SearchWrapper.defaultProps = {
  states: [],
  genres: [],
  attire: []
};

export default SearchWrapper;
