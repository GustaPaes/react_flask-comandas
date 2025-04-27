import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
  Button,
  Toolbar,
} from "@mui/material";
import { Edit, Delete, Visibility, FiberNew } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function ProdutoList() {
  const navigate = useNavigate();

  return (
    <TableContainer component={Paper}>
      <Toolbar
        sx={{
          backgroundColor: "#ed8f24",
          padding: 2,
          borderRadius: 1,
          mb: 2,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" color="#804b0f">
          Produtos
        </Typography>
        <Button
          color="#804b0f"
          onClick={() => navigate("/produto")}
          startIcon={<FiberNew />}
        >
          Novo
        </Button>
      </Toolbar>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Descrição</TableCell>
            <TableCell>Valor Unitário</TableCell>
            <TableCell>Foto</TableCell>
            <TableCell>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={1}>
            <TableCell>10</TableCell>
            <TableCell>Produto 1</TableCell>
            <TableCell>1</TableCell>
            <TableCell>1</TableCell>
            <TableCell>Foto Indisponível</TableCell>
            <TableCell>
              <IconButton>
                {" "}
                <Visibility color="#804b0f" />{" "}
              </IconButton>
              <IconButton>
                {" "}
                <Edit color="primary" />{" "}
              </IconButton>
              <IconButton>
                {" "}
                <Delete color="error" />{" "}
              </IconButton>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default ProdutoList;
