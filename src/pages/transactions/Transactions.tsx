import { useState } from "react";
import "./transactions.scss";
import DataTable from "../../components/dataTable/DataTable";
import { GridColDef } from "@mui/x-data-grid";
import { transactions } from "../../data";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "saddress",
    type: "string",
    headerName: "Sender address",
    width: 375,
  },
  {
    field: "raddress",
    type: "string",
    headerName: "Reciver address",
    width: 375,
  },
  {
    field: "token",
    type: "string",
    headerName: "Token",
    width: 75,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 100,
  },
  {
    field: "amount",
    headerName: "Amount",
    type: "string",
    width: 100,
  },
  {
    field: "createdAt",
    headerName: "Time",
    width: 200,
    type: "string",
  },
  {
    field: "successful",
    headerName: "Successful",
    width: 150,
    type: "boolean",
  },
];

const Transactions = () => {
  const [] = useState(false);

  // TEST THE API

  // const { isLoading, data } = useQuery({
  //   queryKey: ["alltransactions"],
  //   queryFn: () =>
  //     fetch("http://localhost:8800/api/transactions").then(
  //       (res) => res.json()
  //     ),
  // });

  return (
    <div className="Transactions">
      <div className="info">
        <h1>Transactions</h1>
      </div>
      <DataTable slug="Transactions" columns={columns} rows={transactions} />
      {/* TEST THE API */}

      {/* {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="transactions" columns={columns} rows={data} />
      )} */}
    </div>
  );
};

export default Transactions;
