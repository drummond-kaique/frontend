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
import Person from "@material-ui/icons/Person";

const useStyles = makeStyles({
  container: {
    marginTop: 20
  },
  table: {
    minWidth: 650
  }
});

export default function WorkOfArtTable() {
  const classes = useStyles();

  const [works, setworks] = React.useState([
    {
      id: 1,
      name: "Senhor dos aneis",
      expDate: "19/06/2019"
    },
    {
      id: 2,
      name: "Maldição do tigre",
      expDate: "18/05/2018"
    }
  ]);

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="left">Data de exposição</TableCell>
            <TableCell align="left">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {works.map(item => (
            <TableRow key={item.id}>
              <TableCell align="left">{item.name}</TableCell>
              <TableCell align="left">{item.expDate}</TableCell>
              <TableCell align="left">
                <div className="action-container">
                  <div>
                    <Delete />
                  </div>
                  <div>
                    <Edit />
                  </div>
                  <div>
                    <Person />
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
