'use client';
import React from 'react';
import { TableVirtuoso, TableComponents } from 'react-virtuoso';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Paper,
  TableSortLabel,
  Typography,
} from '@mui/material';

type DataRow = {
  id: number;
  data: Date;
  valor: number;
  destinatario: string;
};

const rows: DataRow[] = [
  { id: 1, data: new Date("2024-12-01"), valor: 1000, destinatario: "João da Silva" },
  { id: 2, data: new Date("2024-12-02"), valor: 500, destinatario: "Pedro Gonçalves" },
  { id: 3, data: new Date("2024-12-03"), valor: 100, destinatario: "Maria Joaquina" },
  { id: 4, data: new Date("2024-12-04"), valor: 1000, destinatario: "João da Silva" },
  { id: 5, data: new Date("2024-12-05"), valor: 500, destinatario: "Pedro Gonçalves" },
  { id: 6, data: new Date("2024-12-06"), valor: 100, destinatario: "Maria Joaquina" },
  { id: 7, data: new Date("2024-12-07"), valor: 1000, destinatario: "João da Silva" },
  { id: 8, data: new Date("2024-12-08"), valor: 500, destinatario: "Pedro Gonçalves" },
  { id: 9, data: new Date("2024-12-09"), valor: 100, destinatario: "Maria Joaquina" },
  { id: 10, data: new Date("2024-12-10"), valor: 1000, destinatario: "João da Silva" },
  { id: 11, data: new Date("2024-12-11"), valor: 500, destinatario: "Pedro Gonçalves" },
  { id: 12, data: new Date("2024-12-12"), valor: 100, destinatario: "Maria Joaquina" },
];

type Order = "asc" | "desc";

const columns = [
  { label: "Data Emissão", dataKey: "data", numeric: false },
  { label: "R$ Valor", dataKey: "valor", numeric: true },
  { label: "Destinatário", dataKey: "destinatario", numeric: false },
];

const VirtuosoTableComponents: TableComponents<DataRow> = {
  Scroller: React.forwardRef<HTMLDivElement>((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed', backgroundColor: '#235347', color: '#DAF1DE' }} />
  ),
  TableHead: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableHead {...props} ref={ref} />
  )),
  TableRow,
  TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

function fixedHeaderContent(order: Order, orderBy: keyof DataRow, onRequestSort: (property: keyof DataRow) => void) {
  return (
    <TableRow>
      <TableCell padding="checkbox" sx={{ backgroundColor: '#235347', color: '#DAF1DE' }}>
        <Checkbox sx={{ color: '#DAF1DE' }} />
      </TableCell>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          align={column.numeric ? "right" : "left"}
          sx={{ backgroundColor: '#235347', color: '#DAF1DE' }}
        >
          <TableSortLabel
            active={orderBy === column.dataKey}
            direction={orderBy === column.dataKey ? order : "asc"}
            onClick={() => onRequestSort(column.dataKey as keyof DataRow)}
            sx={{ color: '#DAF1DE' }}
          >
            {column.label}
          </TableSortLabel>
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(index: number, row: DataRow, isSelected: (id: number) => boolean, handleClick: (id: number) => void) {
  return (
    <>
      <TableCell padding="checkbox">
        <Checkbox
          checked={isSelected(row.id)}
          onClick={() => handleClick(row.id)}
          sx={{ color: '#DAF1DE' }}
        />
      </TableCell>
      <TableCell sx={{ color: '#DAF1DE' }}>{row.data.toLocaleDateString("pt-BR")}</TableCell>
      <TableCell align="right" sx={{ color: '#DAF1DE' }}>{row.valor}</TableCell>
      <TableCell sx={{ color: '#DAF1DE' }}>{row.destinatario}</TableCell>
    </>
  );
}

export default function ReactVirtualizedTable() {
  const [selected, setSelected] = React.useState<number[]>([]);
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof DataRow>("data");

  const handleRequestSort = (property: keyof DataRow) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleClick = (id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  const sortedRows = React.useMemo(() => {
    return [...rows].sort((a, b) => {
      if (order === "asc") {
        return a[orderBy] < b[orderBy] ? -1 : 1;
      }
      return a[orderBy] > b[orderBy] ? -1 : 1;
    });
  }, [order, orderBy]);

  return (
    <div>
      <div className="text-white text-2xl font-semibold px-3">
        <span>CT-e's</span>
      </div>
      <div>
        <Paper style={{ height: 580, width: '100%', backgroundColor: '#235347' }}>
          <TableVirtuoso
            data={sortedRows}
            components={VirtuosoTableComponents}
            fixedHeaderContent={() => fixedHeaderContent(order, orderBy, handleRequestSort)}
            itemContent={(index, row) => rowContent(index, row, isSelected, handleClick)}
          />
        </Paper>
      </div>
    </div>
  );
}