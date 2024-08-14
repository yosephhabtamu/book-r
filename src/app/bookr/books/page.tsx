"use client";
import { Box, ListItemIcon, MenuItem } from "@mui/material";
import HomePage from "../page";
import { useEffect, useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { AccountCircle, Send } from "@mui/icons-material";
import { BookItem } from "@/app/types/types";
import { useGetBooksQuery } from "@/lib/features/books/bookService";

const BooksList = () => {
  const [data, setData] = useState<BookItem[]>([]); // Provide the type for better type safety
  const { data: result, isLoading, error } = useGetBooksQuery({
    page: 1,
    size: 10,
  });

  useEffect(() => {
    if (!isLoading && !error && result) {
      setData(result.books);
    }
  }, [result, isLoading, error]);

  const columns = useMemo<MRT_ColumnDef<BookItem>[]>(
    () => [
      {
        id: "author",
        header: "List of Books",
        columns: [
          {
            accessorFn: (row) => `${row.book.author}`,
            id: "author",
            header: "Author",
            size: 200,
            Cell: ({ renderedCellValue }) => (
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
            accessorFn: (row) => `${row.user.fullName}`,
            id: "fullName",
            header: "Owner",
            size: 200,
            Cell: ({ renderedCellValue }) => (
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
            accessorFn: (row) => `${row.book.category.name}`,
            id: "category",
            header: "Category",
            size: 200,
            Cell: ({ renderedCellValue }) => (
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
            accessorFn: (row) => `${row.book.title}`,
            id: "bookName",
            header: "Book Name",
            size: 200,
            Cell: ({ renderedCellValue }) => (
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
            accessorKey: "isActive",
            header: "Status",
            size: 100,
            Cell: ({ renderedCellValue }) => (
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
    data,
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
          closeMenu();
        }}
        sx={{ m: 0 }}
      >
        <ListItemIcon color="primary" >
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
        <ListItemIcon color="primary">
          <Send />
        </ListItemIcon>
        Send Email
      </MenuItem>,
    ],
  });

  return (
    <HomePage path="owner/books">
      <Box component="main" overflow="hidden" >
        <MaterialReactTable table={table} />
      </Box>
    </HomePage>
  );
};

export default BooksList;
