import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Snackbar,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

function LoanForm() {
  const { category, subcategory } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    cnic: "",
    email: "",
    name: "",
    loanAmount: "",
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setShowSuccessMessage(true);
  };

  const handleCloseSnackbar = () => {
    setShowSuccessMessage(false);
    navigate("/");
  };
  console.log(category);
  console.log(subcategory);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <Card className="w-full max-w-lg shadow-lg rounded-lg p-6">
        <CardContent>
          <Typography variant="h4" className="text-center mb-6 font-bold">
            Apply for {category} - {subcategory}
          </Typography>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="mb-4">
              <TextField
                fullWidth
                label="CNIC"
                name="cnic"
                value={formData.cnic}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <TextField
                fullWidth
                label="Loan Amount"
                name="loanAmount"
                type="number"
                value={formData.loanAmount}
                onChange={handleChange}
                required
              />
            </div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              className="mt-4 py-2"
            >
              Submit Application
            </Button>
          </form>
        </CardContent>
      </Card>
      <Snackbar
        open={showSuccessMessage}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="Loan application submitted successfully!"
      />
    </div>
  );
}

export default LoanForm;
