/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Fragment, useEffect, useState } from "react";
import { Search, Table } from "../";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [states, setStates] = useState([""]);
  const [genres, setGenres] = useState([""]);
  const [attire, setAttire] = useState([""]);
  // State for current paginated view
  const [page, setPage] = useState(0);

  useEffect(() => {
    // Initial load of data
    axios
      .get("/api/data")
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });

    axios
      .get("/api/states")
      .then(response => {
        const data = response.data;
        data.unshift("");
        setStates(data);
      })
      .catch(error => {
        console.log(error);
      });

    axios
      .get("/api/genres")
      .then(response => {
        const data = response.data;
        data.unshift("");
        setGenres(data);
      })
      .catch(error => {
        console.log(error);
      });

    axios
      .get("/api/attire")
      .then(response => {
        const data = response.data;
        data.unshift("");
        setAttire(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    // Go back to first page when data changes
    setPage(0);
  }, [data]);

  const SearchProps = { states, genres, attire, data, setData };

  const TableProps = {
    data,
    setData,
    page,
    setPage
  };

  return (
    <Fragment>
      <h1
        css={css`
          width: 100%;
          text-align: center;
        `}
      >
        Restaurant Guide
      </h1>
      <Search {...SearchProps} />
      <Table {...TableProps} />
    </Fragment>
  );
};

export default App;
