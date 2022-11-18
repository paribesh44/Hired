import * as React from 'react';
import Button from '@mui/material/Button';

export default function ImageUpload() {
  return (
      <input type="file" name="upload" accept="image/*" />
  );
}