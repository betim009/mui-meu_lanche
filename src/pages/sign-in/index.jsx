import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
} from "@mui/material";
import { useLogin } from "../../hooks/useLogin";

export default function SignIn() {
  const { handleSubmitIn, formData, handleChange, errors} = useLogin()

  return (
    <Box>
      <Paper elevation={3} sx={{ p: 4, mt: 6 }}>
        <Typography variant="h5" gutterBottom>
          Sign In
        </Typography>
        <Box component="form" onSubmit={handleSubmitIn} noValidate>
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
            Sign In
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
