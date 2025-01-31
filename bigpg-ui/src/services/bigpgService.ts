import axios from "axios";

const API_BASE_URL = "http://localhost:8000";

export const transferBQToPG = async (datasetId: string, tableId: string, maxStreamCount: number = 1) => {
  const response = await axios.post(`${API_BASE_URL}/bq2pg/`, {
    dataset_id: datasetId,
    table_id: tableId,
    max_stream_count: maxStreamCount,
  });
  return response.data;
};

export const transferPGToBQ = async (tableName: string, datasetId: string, tableId: string) => {
  const response = await axios.post(`${API_BASE_URL}/pg2bq/`, {
    table_name: tableName,
    dataset_id: datasetId,
    table_id: tableId,
  });
  return response.data;
};

export const getBQTables = async (datasetId: string) => {
  const response = await axios.get(`${API_BASE_URL}/bq/tables/${datasetId}`);
  return response.data;
};

