/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useEffect, useState } from "react";
import { Search, Table } from "../";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [states, setStates] = useState([""]);
  const [genres, setGenres] = useState([""]);
  const [attire, setAttire] = useState([""]);

  useEffect(() => {
    // Update window name
    window.document.title = "Restaurant Guide";
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

  const searchProps = { states, genres, attire, setData };

  return (
    <div>
      <h1
        css={css`
          width: 100%;
          text-align: center;
        `}
      >
        Restaurant Guide
      </h1>
      <Search {...searchProps} />
      <Table data={data} setData={setData} />
    </div>
  );
};

export default App;
