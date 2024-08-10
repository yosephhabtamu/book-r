"use client";
import { Box,  ListItemIcon, MenuItem, Typography } from "@mui/material";
import HomePage from "../page";
import { useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { AccountCircle, Send } from "@mui/icons-material";

export type OwnerTable = {
  id: string;
  fullName: string;
  email: string;
  location: string;
  isActive: boolean;
  upload: number;
};

const OwnerList = () => {
    const [data, setData] = useState([]);
  const columns = useMemo<MRT_ColumnDef<OwnerTable>[]>(
    () => [
      {
        id: "fullName",
        header: "List of Books",
        columns: [
          {
            accessorFn: (row) => `${row.fullName}`,
            id: "fullName",
            header: "Owner",
            size: 200,
            Cell: ({ renderedCellValue, row }) => (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <span>{renderedCellValue}</span>
              </Box>
            ),
          },
          {
            accessorKey: "upload",
            header: "upload",
            size: 100,
          },
          {
            accessorKey: "location", 
            header: "location",
            size: 200,
          },
          {
            accessorKey: "isActive", //hey a simple column for once
            header: "status",
            size: 350,
            Cell: ({ renderedCellValue, row }) => (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <span>{renderedCellValue}</span>
                </Box>
              ),
          },
        ],
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    enableColumnFilterModes: true,
    enableColumnOrdering: true,
    enableColumnPinning: true,
    enableFacetedValues: true,
    enableRowActions: true,
    enableRowSelection: true,
    initialState: {
      showColumnFilters: true,
      showGlobalFilter: true,
      columnPinning: {
        left: ["mrt-row-expand", "mrt-row-select"],
        right: ["mrt-row-actions"],
      },
    },
    paginationDisplayMode: "pages",
    positionToolbarAlertBanner: "bottom",
    muiSearchTextFieldProps: {
      size: "small",
      variant: "outlined",
    },
    muiPaginationProps: {
      color: "secondary",
      rowsPerPageOptions: [10, 20, 30],
      shape: "rounded",
      variant: "outlined",
    },
    renderRowActionMenuItems: ({ closeMenu }) => [
      <MenuItem
        key={0}
        onClick={() => {
          // View profile logic...
          closeMenu();
        }}
        sx={{ m: 0 }}
      >
        <ListItemIcon>
          <AccountCircle />
        </ListItemIcon>
        View Profile
      </MenuItem>,
      <MenuItem
        key={1}
        onClick={() => {
          // Send email logic...
          closeMenu();
        }}
        sx={{ m: 0 }}
      >
        <ListItemIcon>
          <Send />
        </ListItemIcon>
        Send Email
      </MenuItem>,
    ]
  });

  return (
    <HomePage path="owner/books">
      <Box component="main" ml="20%" maxWidth="80%" overflow="scroll" >
        <MaterialReactTable table={table} />
      </Box>
    </HomePage>
  );
};
export default OwnerList;
