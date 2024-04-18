import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { styled } from "@mui/material/styles";

const ImageWrapper = styled("div")`
  align-items: center;
  box-shadow: 0px -1px 0px 0px rgba(0, 63, 45, 0.15) inset;
  background-color: var(--Backgrounds-Surface, #fff);
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 56px;
  height: 56px;
  padding: 16px 12px 16px 20px;
`;

const DataCell = styled("div")`
  align-items: start;
  box-shadow: 0px -1px 0px 0px rgba(0, 63, 45, 0.15) inset;
  background-color: var(--Backgrounds-Surface, #fff);
  color: var(--Text-Dark-Text-Dark, #1a1a1a);
  white-space: nowrap;
  letter-spacing: -0.14px;
  justify-content: center;
  padding: 20px 0px;
  font: 500 14px/114% Calibre-R, -apple-system, Roboto, Helvetica, sans-serif;

  @media (max-width: 991px) {
    padding-right: 20px;
    white-space: initial;
  }
`;

function MyComponent() {
  const data = [
    {
      id: 1,
      address: "123 Main St",
      client: "Acme Inc",
      type: "Residential",
      assetClass: "Single Family",
      subType: "Detached",
      size: "1,500 sqft",
      targetDate: "2023-12-31",
      duration: "12 months",
      productLead: "John Doe",
    },
    {
      id: 2,
      address: "456 Oak Ave",
      client: "XYZ Corp",
      type: "Commercial",
      assetClass: "Office",
      subType: "High-rise",
      size: "50,000 sqft",
      targetDate: "2024-06-30",
      duration: "18 months",
      productLead: "Jane Smith",
    },
  ];

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
      renderCell: (params: any) => <DataCell>{params.value}</DataCell>,
    },
    {
      field: "address",
      headerName: "Address",
      width: 200,
      renderCell: (params: any) => <DataCell>{params.value}</DataCell>,
    },
    {
      field: "client",
      headerName: "Client",
      width: 150,
      renderCell: (params: any) => <DataCell>{params.value}</DataCell>,
    },
    {
      field: "type",
      headerName: "Type",
      width: 150,
      renderCell: (params: any) => <DataCell>{params.value}</DataCell>,
    },
    {
      field: "assetClass",
      headerName: "Asset Class",
      width: 150,
      renderCell: (params: any) => <DataCell>{params.value}</DataCell>,
    },
    {
      field: "subType",
      headerName: "Sub-Type",
      width: 150,
      renderCell: (params: any) => <DataCell>{params.value}</DataCell>,
    },
    {
      field: "size",
      headerName: "Size",
      width: 120,
      renderCell: (params: any) => <DataCell>{params.value}</DataCell>,
    },
    {
      field: "targetDate",
      headerName: "Target Date",
      width: 150,
      renderCell: (params: any) => <DataCell>{params.value}</DataCell>,
    },
    {
      field: "duration",
      headerName: "Duration",
      width: 120,
      renderCell: (params: any) => <DataCell>{params.value}</DataCell>,
    },
    {
      field: "productLead",
      headerName: "Product Lead",
      width: 150,
      renderCell: (params: any) => <DataCell>{params.value}</DataCell>,
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        // pageSize={5}
        // rowsPerPageOptions={[5]}
        checkboxSelection
        // disableSelectionOnClick
        // experimentalFeatures={{ newEditingApi: true }}
      />
    </div>
  );
}

export default MyComponent;
