"use client";
import { Box, ListItemIcon, MenuItem, Switch, Typography } from "@mui/material";
import HomePage from "../page";
import { useEffect, useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { AccountCircle, Send } from "@mui/icons-material";
import { BookOwner } from "@/app/types/types";
import { useGetUsersQuery } from "@/lib/features/user/userSevice";
import { Spinner } from "@/app/components/spinner";

const OwnerList = () => {
  const [data, setData] = useState<BookOwner[]>([]);
  const {
    data: result,
    isLoading,
    error,
  } = useGetUsersQuery({
    page: 1,
    size: 10,
  });

  useEffect(() => {
    if (!isLoading && !error && result) {
      setData(result.users);
    }
  }, [result, isLoading, error]);
  const columns = useMemo<MRT_ColumnDef<BookOwner>[]>(
    () => [
      {
        id: "fullName",
        header: "List of Owner",
        columns: [
          {
            accessorFn: (row) => `${row.fullName}`,
            id: "fullName", 
            header: "Owner",
            size: 200,
            Cell: ({ renderedCellValue, row }) =>{
              return (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <span>{renderedCellValue}</span>
              </Box>
            )}
          },
          {
            accessorfn: (row:any) => `${row.wallet}`,  
            id:"wallet",
            header: "upload",
            size: 100,
            Cell: ({ renderedCellValue, row }) =>{
              return (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <span>{row.original._count.books}</span>
              </Box>
            )}
          },
          {
            accessorKey: "location",
            header: "location",
            size: 200,
          },
          {
            accessorKey: "isActive", //hey a simple column for once
            header: "status",
            size: 100,
            Cell: ({ renderedCellValue, row }) => (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <Switch color="secondary" checked = {row.original.isActive}></Switch>
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
      showColumnFilters: false,
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
    ],
  });

  return (
    <HomePage path="admin/Owners">
      <Box component="main">
        <MaterialReactTable table={table} />
      </Box>
    </HomePage>
  );
};
export default OwnerList;
