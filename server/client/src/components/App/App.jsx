/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Search, Table } from "../";
import data from "../../utils/restaurantData.json";

function App() {
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
      <Search />
      <Table data={data.data} />
    </div>
  );
}

export default App;
