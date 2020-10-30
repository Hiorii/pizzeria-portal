import React from 'react';
import styles from './Tables.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import EventIcon from '@material-ui/icons/Event';
import CloseIcon from '@material-ui/icons/Close';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';

const tableContent = [
  {
    hour: '10:00',
    tables: [
      { id: 1, status: 'booked' },
      { id: 2, status: 'booked' },
      { id: 3, status: 'booked' },
      { id: 4, status: 'free' },
      { id: 5, status: 'booked' },
    ],
  },
  {
    hour: '10:30',
    tables: [
      { id: 1, status: 'event' },
      { id: 2, status: 'free' },
      { id: 3, status: 'free' },
      { id: 4, status: 'free' },
      { id: 5, status: 'booked' },
    ],
  },
  {
    hour: '11:00',
    tables: [
      { id: 1, status: 'free' },
      { id: 2, status: 'event' },
      { id: 3, status: 'booked' },
      { id: 4, status: 'event' },
      { id: 5, status: 'booked' },
    ],
  },
  {
    hour: '11:30',
    tables: [
      { id: 1, status: 'free' },
      { id: 2, status: 'booked' },
      { id: 3, status: 'booked' },
      { id: 4, status: 'free' },
      { id: 5, status: 'booked' },
    ],
  },
  {
    hour: '12:00',
    tables: [
      { id: 1, status: 'free' },
      { id: 2, status: 'free' },
      { id: 3, status: 'booked' },
      { id: 4, status: 'free' },
      { id: 5, status: 'booked' },
    ],
  },
];

const renderActions = status => {
  switch (status) {
    case 'free':
      return (
        <div className={styles.positioning}>
          <div>
            <div>
              <OpenInNewIcon fontSize="large" />
            </div>
          </div>
          <div className={`${styles.positioning} + ${styles.links}`}>
            <Button
              component={Link}
              variant="contained"
              color="secondary"
              exath to={`${process.env.PUBLIC_URL}/tables/booking/new`}
            >
              New Booking
            </Button>
          </div>
          <div className={`${styles.positioning} + ${styles.links}`}>
            <Button
              component={Link}
              variant="contained"
              color="secondary"
              exath to={`${process.env.PUBLIC_URL}/tables/events/new`}>
              New Event
            </Button>
          </div>
        </div>
      );
    case 'booked':
      return (
        <div className={styles.positioning}>
          <div>
            <CloseIcon fontSize="large" />
          </div>
          <div className={`${styles.positioning} + ${styles.links}`}>
            <Button
              component={Link}
              variant="contained"
              color="primary"
              exath to={`${process.env.PUBLIC_URL}/tables/booking/idBooking`}>
              Booked
            </Button>
          </div>
        </div>
      );
    case 'event':

      return (
        <div className={styles.positioning}>
          <div>
            <EventIcon fontSize="large" />
          </div>
          <div className={`${styles.positioning} + ${styles.links}`}>
            <Button
              component={Link}
              variant="contained"
              color="primary"
              exath to={`${process.env.PUBLIC_URL}/tables/events/idEvent`}>
              Event
            </Button>
          </div>
        </div>
      );
    default:
      return null;
  }
};

const Tables = () => {
  let day = new Date();
  let today = day.toISOString().substr(0,10);
  const [date, setDate] = React.useState(today);

  const changeDate = date => {
    setDate(date);
    console.log(date);
  };

  return (
    <Paper className={styles.component}>
      <div>
        <form className={styles.input_container} noValidate>
          <TextField
            id='date'
            label='Date'
            type='date'
            defaultValue={date}
            onChange={changeDate}
            className={styles.date}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell className={styles.center}>Table 1</TableCell>
            <TableCell className={styles.center}>Table 2</TableCell>
            <TableCell className={styles.center}>Table 3</TableCell>
            <TableCell className={styles.center}>Table 4</TableCell>
            <TableCell className={styles.center}>Table 5</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableContent.map(table => (
            <TableRow key={table.hour}>
              <TableCell component="th" scope="row">
                {table.hour}
              </TableCell>
              {table.tables.map(singleTable => (
                <TableCell key={singleTable.id}>{renderActions(singleTable.status)}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Tables;
