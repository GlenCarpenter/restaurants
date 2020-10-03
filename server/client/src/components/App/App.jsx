/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Table } from "../";
import data from "../../utils/restaurantData.json";

function App() {
  return (
    <div>
      App
      <Table data={data.data} />
    </div>
  );
}

export default App;
