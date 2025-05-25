import {
  Box,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  Link,
  Paper,
} from "@mui/material";
import { useLogin } from "../../hooks/useLogin";

export default function SignUp() {
  const {
    formData,
    handleSubmitUp,
    handleChange,
    errors,
  } = useLogin();

  return (
    <>
      <Paper elevation={3} sx={{ p: 4, mt: 6 }}>
        <Typography variant="h5" gutterBottom>
          Sign up
        </Typography>
        <Box component="form" onSubmit={handleSubmitUp} noValidate>
          <TextField
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
            error={!!errors.fullName}
            helperText={errors.fullName}
          />
          <TextField
            label="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
            error={!!errors.phone}
            helperText={errors.phone}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
            error={!!errors.password}
            helperText={errors.password}
          />
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
          />
          <FormControlLabel
            control={
              <Checkbox
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
              />
            }
            label={
              <Typography variant="body2">
                I agree to the{" "}
                <Link href="#" underline="hover">
                  terms of service
                </Link>
              </Typography>
            }
          />
          {errors.termsAccepted && (
            <Typography color="error" variant="body2" sx={{ mb: 1 }}>
              {errors.termsAccepted}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
            color="error"
          >
            Sign up
          </Button>
        </Box>
      </Paper>
    </>
  );
}
