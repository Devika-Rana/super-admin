// import React from "react";
// import {
//   Box,
//   Typography,
//   FormGroup,
//   FormControlLabel,
//   Button,
//   Stack,
//   Checkbox,
// } from "@mui/material";
// import Link from "next/link";

// import CustomTextField from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField";

// interface loginType {
//   title?: string;
//   subtitle?: JSX.Element | JSX.Element[];
//   subtext?: JSX.Element | JSX.Element[];
// }

// const AuthLogin = ({ title, subtitle, subtext }: loginType) => (
//   <>
//     {title ? (
//       <Typography fontWeight="700" variant="h2" mb={1}>
//         {title}
//       </Typography>
//     ) : null}

//     {subtext}

//     <Stack>
//       <Box>
//         <Typography
//           variant="subtitle1"
//           fontWeight={600}
//           component="label"
//           htmlFor="username"
//           mb="5px"
//         >
//           Username
//         </Typography>
//         <CustomTextField required  variant="outlined" fullWidth />
//       </Box>
//       <Box mt="25px">
//         <Typography
//           variant="subtitle1"
//           fontWeight={600}
//           component="label"
//           htmlFor="password"
//           mb="5px"
//         >
//           Password
//         </Typography>
//         <CustomTextField type="password" variant="outlined" fullWidth />
//       </Box>
//       <Stack
//         justifyContent="space-between"
//         direction="row"
//         alignItems="center"
//         my={2}
//       >
//         <FormGroup>
//           <FormControlLabel
//             control={<Checkbox defaultChecked />}
//             label="Remeber this Device"
//           />
//         </FormGroup>
//         <Typography
//           component={Link}
//           href="/"
//           fontWeight="500"
//           sx={{
//             textDecoration: "none",
//             color: "primary.main",
//           }}
//         >
//           Forgot Password ?
//         </Typography>
//       </Stack>
//     </Stack>
//     <Box>
//       <Button
//         color="primary"
//         variant="contained"
//         size="large"
//         fullWidth
//         component={Link}
//         href="/"
//         type="submit"
//       >
//         Sign In
//       </Button>
//     </Box>
//     {subtitle}
//   </>
// );

// export default AuthLogin;

import React, { useState } from "react";
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
  Checkbox,
} from "@mui/material";
import Link from "next/link";

import CustomTextField from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField";

interface loginType {
  title?: string;
  subtitle?: JSX.Element | JSX.Element[];
  subtext?: JSX.Element | JSX.Element[];
}

const AuthLogin = ({ title, subtitle, subtext }: loginType) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const validatePassword = (password: string) => {
    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;
    const number = /[0-9]/;
    const specialChar = /[!@#$%^&*(),.?":{}|<>]/;

    const errorMessages = [];
    if (!uppercase.test(password)) errorMessages.push("one uppercase letter");
    if (!lowercase.test(password)) errorMessages.push("one lowercase letter");
    if (!number.test(password)) errorMessages.push("one number");
    if (!specialChar.test(password)) errorMessages.push("one symbol");

    return errorMessages.length > 0
      ? `Password must contain ${errorMessages.join(", ")}`
      : "";
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    setErrors((prev) => ({
      ...prev,
      username: e.target.value ? "" : "Required",
    }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setErrors((prev) => ({
      ...prev,
      password: newPassword ? validatePassword(newPassword) : "Required",
    }));
  };

  const isFormValid = () => {
    return username && !errors.username && password && !errors.password;
  };

  return (
    <>
      {title ? (
        <Typography fontWeight="700" variant="h2" mb={1}>
          {title}
        </Typography>
      ) : null}

      {subtext}

      <Stack>
        <Box>
          <Typography
            variant="subtitle1"
            fontWeight={600}
            component="label"
            htmlFor="username"
            mb="5px"
          >
            Username
          </Typography>
          <CustomTextField
            required
            variant="outlined"
            fullWidth
            value={username}
            onChange={handleUsernameChange}
            error={!!errors.username}
            helperText={errors.username}
          />
        </Box>
        <Box mt="25px">
          <Typography
            variant="subtitle1"
            fontWeight={600}
            component="label"
            htmlFor="password"
            mb="5px"
          >
            Password
          </Typography>
          <CustomTextField
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={handlePasswordChange}
            error={!!errors.password}
            helperText={errors.password}
          />
        </Box>
        <Stack
          justifyContent="space-between"
          direction="row"
          alignItems="center"
          my={2}
        >
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Remember this Device"
            />
          </FormGroup>
          <Typography
            component={Link}
            href="/"
            fontWeight="500"
            sx={{
              textDecoration: "none",
              color: "primary.main",
            }}
          >
            Forgot Password ?
          </Typography>
        </Stack>
      </Stack>
      <Box>
        <Button
          color="primary"
          variant="contained"
          size="large"
          fullWidth
          component={Link}
          href="/"
          type="submit"
          disabled={!isFormValid()}
        >
          Sign In
        </Button>
      </Box>
      {subtitle}
    </>
  );
};

export default AuthLogin;

