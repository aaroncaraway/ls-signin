import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/FormStyles';
import { Redirect } from 'react-router-dom';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [customer, setCustomer] = useState(null);

  const { classes } = props;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    return fetch(`${process.env.REACT_APP_BACKEND_URL}/signup`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
        passwordConfirmation: passwordConfirmation,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setCustomer(result.customer);
      });
  };
  if (customer) {
    return (
      <Redirect
        to={{
          pathname: '/prices',
          state: { customer: customer },
        }}
      />
    );
  } else {
    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5">Sign In</Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                required
                autoFocus
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password Confirmation</InputLabel>
              <Input
                id="passwordConfirmation"
                type="password"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                placeholder="Confirm Password"
                required
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="remember"
            />
            <Button
              variant="contained"
              type="submit"
              fullWidth
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
};

export default withStyles(styles)(Login);
