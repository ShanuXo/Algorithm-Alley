import { useState } from 'react';
import axios from 'axios';
import { Input , FormControl,InputLabel , Button, Container, Typography } from '@mui/material';

const RegisterPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!firstName || !lastName || !email || !password || !confirmPassword || !phoneNumber) {
      setError('All fields are required');
      return;
    }

    try {
      await axios.post('https://localhost:7276/api/UserLoginSignup/signup', {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        phoneNumber
      },
      {
        headers: {
          "access-control-allow-origin": "*",
          "Content-type": "application/json; charset=UTF-8"
        }
      }
    );
      window.location.href = '/signin';
    } catch (error) {
      console.error('Registration failed', error);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <Container>
      <Typography variant="h4">Register</Typography>
      {error && <Typography color="error">{error}</Typography>}
      <FormControl fullWidth margin="normal" required>
        <InputLabel>First Name</InputLabel>
        <Input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </FormControl>
      <FormControl fullWidth margin="normal" required>
        <InputLabel>Last Name</InputLabel>
        <Input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </FormControl>
      <FormControl fullWidth margin="normal" required>
        <InputLabel>Email</InputLabel>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl fullWidth margin="normal" required>
        <InputLabel>Password</InputLabel>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <FormControl fullWidth margin="normal" required>
        <InputLabel>Confirm Password</InputLabel>
        <Input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </FormControl>
      <FormControl fullWidth margin="normal" required>
        <InputLabel>Phone Number</InputLabel>
        <Input
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </FormControl>
      <Button variant="contained" color="primary" onClick={handleRegister}>
        Register
      </Button>
    </Container>
  );
};

export default RegisterPage;
