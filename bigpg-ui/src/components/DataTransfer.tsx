import React from 'react';
import { useState } from "react";
import { transferBQToPG, transferPGToBQ } from "../services/bigpgService";
import { Button, TextField, Typography, Box } from "@mui/material";

const DataTransfer = () => {
  const [datasetId, setDatasetId] = useState("");
  const [tableId, setTableId] = useState("");
  const [tableName, setTableName] = useState("");
  const [response, setResponse] = useState("");

  const handleBQToPG = async () => {
    try {
      const result = await transferBQToPG(datasetId, tableId);
      setResponse(JSON.stringify(result, null, 2));
    } catch (error) {
      setResponse("Error transferring data from BigQuery to PostgreSQL.");
    }
  };

  const handlePGToBQ = async () => {
    try {
      const result = await transferPGToBQ(tableName, datasetId, tableId);
      setResponse(JSON.stringify(result, null, 2));
    } catch (error) {
      setResponse("Error transferring data from PostgreSQL to BigQuery.");
    }
  };

  return (
    <Box sx={{ maxWidth: 500, margin: "auto", textAlign: "center" }}>
      <Typography variant="h5" gutterBottom>
        BigPG Data Transfer UI
      </Typography>
      
      <TextField
        label="Dataset ID"
        value={datasetId}
        onChange={(e) => setDatasetId(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Table ID"
        value={tableId}
        onChange={(e) => setTableId(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Postgres Table Name"
        value={tableName}
        onChange={(e) => setTableName(e.target.value)}
        fullWidth
        margin="normal"
      />

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        <Button variant="contained" color="primary" onClick={handleBQToPG}>
          BigQuery → PostgreSQL
        </Button>
        <Button variant="contained" color="secondary" onClick={handlePGToBQ}>
          PostgreSQL → BigQuery
        </Button>
      </Box>

      {response && (
        <Box sx={{ mt: 3, p: 2, bgcolor: "#f5f5f5", borderRadius: "4px" }}>
          <Typography variant="body2">{response}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default DataTransfer;
