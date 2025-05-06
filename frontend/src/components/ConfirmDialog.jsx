import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

export default function ConfirmDialog({ open, title, content, onConfirm, onCancel }) {
  return (
    <Dialog open={open} onClose={onCancel}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color="secondary">Cancel</Button>
        <Button onClick={onConfirm} color="primary" variant="contained">Confirm</Button>
      </DialogActions>
    </Dialog>
  );
}