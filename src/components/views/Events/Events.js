import React from 'react';
import {useParams} from 'react-router-dom';
import styles from './Events.module.scss';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const Events = () => {
  const eventId = useParams();
  return (
    <Card>
      <CardContent align="center">
        <Typography color="textPrimary">
          Event details:
          <CardActions >
            <Button className={styles.btn} size="small"><EditIcon /></Button>
          </CardActions>
        </Typography>
        <Typography color="textSecondary" gutterBottom>Name of Person </Typography>
        <Typography color="textSecondary" gutterBottom> Random Street </Typography>
        <Typography color="textSecondary" gutterBottom> Random City </Typography>
        <Typography color="textSecondary" gutterBottom>Contact Number: 123-456-789 </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <Typography color="textPrimary" gutterBottom>Table no.</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography color="textPrimary" gutterBottom>Date</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography color="textPrimary" gutterBottom>Number of people</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">
                <Typography color="textSecondary" gutterBottom>1</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography color="textSecondary" gutterBottom>30.10.2020</Typography>
                <Typography color="textSecondary" gutterBottom>11:30 - 12:00</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography color="textSecondary" gutterBottom>4</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center" >Starter</TableCell>
              <TableCell align="center" colSpan={2}>Main</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">
                <Typography color="textSecondary" gutterBottom>starter 1</Typography>
                <Typography color="textSecondary" gutterBottom>starter 2</Typography>
              </TableCell>
              <TableCell align="center" colSpan={2}>
                <Typography color="textSecondary" gutterBottom>meal 1</Typography>
                <Typography color="textSecondary" gutterBottom>meal 2</Typography>
                <Typography color="textSecondary" gutterBottom>meal 3</Typography>
                <Typography color="textSecondary" gutterBottom>meal 4</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center" colSpan={3}>
                <Typography color="textSecondary" gutterBottom></Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Typography  color="textPrimary">
          Client remarks
        </Typography>
        <Typography variant="body2" component="p">
          Info from client
        </Typography>
      </CardContent>
    </Card>
  );
};



export default Events;
