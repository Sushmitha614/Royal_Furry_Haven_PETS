import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Paper, Typography } from '@mui/material';

export default function DataTable({ title, columns, rows }) {
  return (
    <Paper sx={{ p: 2, mb: 3 }}>
      {title && <Typography variant="h6" sx={{ mb: 2 }}>{title}</Typography>}
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          disableSelectionOnClick
          autoHeight
        />
      </div>
    </Paper>
  );
}