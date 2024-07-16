// import {
//     Typography, Box,
//     Table,
//     TableBody,
//     TableCell,
//     TableHead,
//     TableRow,
//     Chip
// } from '@mui/material';
// import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
// import DashboardCard from '@/app/(DashboardLayout)//components/shared/DashboardCard';

// const products = [
//     {
//         id: "1",
//         name: "Sunil Joshi",
//         post: "Web Designer",
//         pname: "Elite Admin",
//         priority: "OTR",
//         pbg: "primary.main",
//         budget: "Admin",
//     },
//     {
//         id: "2",
//         name: "Andrew McDownland",
//         post: "Project Manager",
//         pname: "Real Homes WP Theme",
//         priority: "SOAP",
//         pbg: "secondary.main",
//         budget: "Admin",
//     },
//     {
//         id: "3",
//         name: "Christopher Jamil",
//         post: "Project Manager",
//         pname: "MedicalPro WP Theme",
//         priority: "VMS",
//         pbg: "error.main",
//         budget: "Admin",
//     },
//     {
//         id: "4",
//         name: "Nirav Joshi",
//         post: "Frontend Engineer",
//         pname: "Hosting Press HTML",
//         priority: "OTR",
//         pbg: "success.main",
//         budget: "Admin",
//     },
// ];

// const ProductPerformance = () => {
//     return (

//         <DashboardCard title="Users">
//             <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
//                 <Table
//                     aria-label="simple table"
//                     sx={{
//                         whiteSpace: "nowrap",
//                         mt: 2
//                     }}
//                 >
//                     <TableHead>
//                         <TableRow>
//                             <TableCell>
//                                 <Typography variant="subtitle2" fontWeight={600}>
//                                     Id
//                                 </Typography>
//                             </TableCell>
//                             <TableCell>
//                                 <Typography variant="subtitle2" fontWeight={600}>
//                                     Name
//                                 </Typography>
//                             </TableCell>
//                             <TableCell>
//                                 <Typography variant="subtitle2" fontWeight={600}>
//                                     Role
//                                 </Typography>
//                             </TableCell>
//                             <TableCell>
//                                 <Typography variant="subtitle2" fontWeight={600}>
//                                     Module
//                                 </Typography>
//                             </TableCell>
//                             <TableCell align="right">
//                                 <Typography variant="subtitle2" fontWeight={600}>
//                                     Designation
//                                 </Typography>
//                             </TableCell>
//                             <TableCell align="right">
//                                 <Typography variant="subtitle2" fontWeight={600}>
//                                     Action
//                                 </Typography>
//                             </TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {products.map((product) => (
//                             <TableRow key={product.name}>
//                                 <TableCell>
//                                     <Typography
//                                         sx={{
//                                             fontSize: "15px",
//                                             fontWeight: "500",
//                                         }}
//                                     >
//                                         {product.id}
//                                     </Typography>
//                                 </TableCell>
//                                 <TableCell>
//                                     <Box
//                                         sx={{
//                                             display: "flex",
//                                             alignItems: "center",
//                                         }}
//                                     >
//                                         <Box>
//                                             <Typography variant="subtitle2" fontWeight={600}>
//                                                 {product.name}
//                                             </Typography>
//                                             <Typography
//                                                 color="textSecondary"
//                                                 sx={{
//                                                     fontSize: "13px",
//                                                 }}
//                                             >
//                                                 {product.post}
//                                             </Typography>
//                                         </Box>
//                                     </Box>
//                                 </TableCell>
//                                 <TableCell>
//                                     <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
//                                         {product.pname}
//                                     </Typography>
//                                 </TableCell>
//                                 <TableCell>
//                                     <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
//                                         {product.priority}
//                                     </Typography>
//                                 </TableCell>
//                                 <TableCell align="right">
//                                     <Typography variant="h6">{product.budget}</Typography>
//                                 </TableCell>
//                                 <TableCell align="right" >
//                                         <RemoveRedEyeOutlinedIcon />
//                                 </TableCell>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </Box>
//         </DashboardCard>
//     );
// };

// export default ProductPerformance;

import React, { useState } from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
  Stack,
} from "@mui/material";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";

const initialProducts = [
  {
    id: "1",
    name: "Sunil Joshi",
    post: "Web Designer",
    pname: "Elite Admin",
    priority: "OTR",
    pbg: "primary.main",
    budget: "Admin",
  },
  {
    id: "2",
    name: "Andrew McDownland",
    post: "Project Manager",
    pname: "Real Homes WP Theme",
    priority: "SOAP",
    pbg: "secondary.main",
    budget: "Admin",
  },
  {
    id: "3",
    name: "Christopher Jamil",
    post: "Project Manager",
    pname: "MedicalPro WP Theme",
    priority: "VMS",
    pbg: "error.main",
    budget: "Admin",
  },
  {
    id: "4",
    name: "Nirav Joshi",
    post: "Frontend Engineer",
    pname: "Hosting Press HTML",
    priority: "OTR",
    pbg: "success.main",
    budget: "Admin",
  },
];

const ProductPerformance = () => {
  const [products, setProducts] = useState(initialProducts);
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    post: "",
    pname: "",
    priority: "",
    budget: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleReset = () => {
    setFormValues({
      name: "",
      post: "",
      pname: "",
      priority: "",
      budget: "",
    });
  };

  const handleAdd = () => {
    setProducts([
      ...products,
      {
        id: (products.length + 1).toString(),
        ...formValues,
        pbg: "primary.main", // Default value for pbg
      },
    ]);
    handleClose();
    handleReset();
  };

  return (
    <DashboardCard
      title="Users"
      action={
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Add
        </Button>
      }
    >
      <>
        <Box sx={{ overflow: "auto", width: { xs: "280px", sm: "auto" } }}>
          <Table
            aria-label="simple table"
            sx={{
              whiteSpace: "nowrap",
              mt: 2,
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Id
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Name
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Role
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Module
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="subtitle2" fontWeight={600}>
                    Designation
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="subtitle2" fontWeight={600}>
                    Action
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "500",
                      }}
                    >
                      {product.id}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Box>
                        <Typography variant="subtitle2" fontWeight={600}>
                          {product.name}
                        </Typography>
                        <Typography
                          color="textSecondary"
                          sx={{
                            fontSize: "13px",
                          }}
                        >
                          {product.post}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography
                      color="textSecondary"
                      variant="subtitle2"
                      fontWeight={400}
                    >
                      {product.pname}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      color="textSecondary"
                      variant="subtitle2"
                      fontWeight={400}
                    >
                      {product.priority}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="h6">{product.budget}</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <RemoveRedEyeOutlinedIcon />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>

        <Dialog
          fullWidth={true}
          maxWidth="sm"
          open={open}
          onClose={handleClose}
        >
          <DialogTitle >Add User</DialogTitle>
          <DialogContent>
            <Stack spacing={3}>
              <TextField
                autoFocus
                margin="dense"
                name="name"
                label="Name"
                type="text"
                fullWidth
                variant="filled"
                value={formValues.name}
                onChange={handleInputChange}
              />
              <TextField
                margin="dense"
                name="post"
                label="Role"
                type="text"
                   variant="filled"
                fullWidth
                value={formValues.post}
                onChange={handleInputChange}
              />
              <TextField
                margin="dense"
                name="pname"
                label="Module"
                type="text"
                fullWidth
                   variant="filled"
                value={formValues.pname}
                onChange={handleInputChange}
              />
              <TextField
                margin="dense"
                name="priority"
                label="Priority"
                type="text"
                fullWidth
                   variant="filled"
                value={formValues.priority}
                onChange={handleInputChange}
              />
              <TextField
                margin="dense"
                name="budget"
                label="Designation"
                type="text"
                fullWidth
                   variant="filled"
                value={formValues.budget}
                onChange={handleInputChange}
              />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleReset} color="secondary">
              Reset
            </Button>
            <Button onClick={handleAdd} color="primary" variant="contained">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </>
    </DashboardCard>
  );
};

export default ProductPerformance;
