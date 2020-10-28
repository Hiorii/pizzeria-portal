import React from 'react';
import styles from './Kitchen.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const kitchenContent = [
  {id: '1', order: ['hamburger extra'], status: 'done'},
  {id: '2', order: ['pizza ham', 'sprite'], status: 'in preparation'},
  {id: '3', order: ['pizza spinachi', 'colla'], status: 'in preparation'},
];

const Kitchen = () => {

  const [preparationStatus, setPreparationStatus] = React.useState(false);

  const handleChange = (e) => {
    setPreparationStatus(e.checked = !preparationStatus);
    console.log();
  };
  return (
    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Order</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {kitchenContent.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>
                {row.order}
              </TableCell>
              <TableCell>
                {row.status}
              </TableCell>
              <TableCell>
                <FormControlLabel
                  control={
                    <Switch
                      checked={preparationStatus}
                      onChange={(e)=>handleChange(e.target)}
                      name='prepared'
                    />
                  }
                  label="Prepared"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Kitchen;
