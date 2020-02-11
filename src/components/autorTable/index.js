import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Delete from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";
import Book from "@material-ui/icons/Book";

const useStyles = makeStyles({
  container: {
    marginTop: 20
  },
  table: {
    minWidth: 650
  }
});

export default function AutorTable() {
  const classes = useStyles();

  const autores;    
    fetch('http://klibrary-back.herokuapp.com/author')
        .then(res => res.json())
        .then(json => {
          autores = json;
        });
    
  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="left">Sexo</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">País</TableCell>
            <TableCell align="left">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {autores.map(item => (
            <TableRow key={item.id}>
              <TableCell align="left">{item.name}</TableCell>
              <TableCell align="left">{item.gender}</TableCell>
              <TableCell align="left">{item.email}</TableCell>
              <TableCell align="left">{item.country}</TableCell>
              <TableCell align="left">
                <div className="action-container">
                  <div>
                    <Delete />
                  </div>
                  <div>
                    <Edit />
                  </div>
                  <div>
                    <Book />
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
