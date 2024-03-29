/* eslint-disable react/jsx-key */
import { useTable } from "react-table";
import Spinner from "../../common/spinner/spinner";
// import styled from 'styled-components'

export function Table({ columns, data, loading }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      {loading ? (
        <tbody>
          <tr
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <td>
              <Spinner color="#409DE0" />
            </td>
          </tr>
        </tbody>
      ) : (
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      )}
    </table>
  );
}
