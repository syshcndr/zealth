import React, { useState } from "react";
import {
  Button,
  TextField,
  Container,
  AppBar,
  Toolbar,
  Typography,
  Box,
  Dialog,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Slider from "react-slick";
import Logo from "../Components/Logo";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Define a modern light theme with black typography
const theme = createTheme({
  palette: {
    primary: {
      main: "#ff3b3f", // Red color for accents
    },
    background: {
      default: "#f7f7f7", // Light grey background for a clean look
      paper: "#ffffff",   // White background for components
    },
    text: {
      primary: "#000000", // Black text for high contrast
      secondary: "#555555", // Dark grey for secondary text
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    h2: {
      fontWeight: 700,
      fontSize: "3rem",
      color: "#000000", // Black header color
    },
    body1: {
      color: "#555555", // Dark grey for paragraph text
      fontSize: "1.1rem",
    },
    button: {
      fontWeight: 600,
      textTransform: "none", // Normal case for buttons
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "30px", // Rounded button corners
          padding: "12px 24px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Light shadow for button
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: "1.5rem", // Spacing between form fields
          backgroundColor: "#ffffff", // White background for text fields
        },
      },
    },
  },
});

const carouselItems = [
  {
    title: "Personalized Nutrition",
    description: "Tailored meal plans designed by experts to meet your dietary goals.",
  },
  {
    title: "Affordable Pricing",
    description: "Enjoy healthy, delicious meals at competitive rates.",
  },
  {
    title: "Home Delivery",
    description: "Get fresh meals delivered straight to your door.",
  },
];

function HomePage() {
  const [openDialog, setOpenDialog] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpenDialog(true); // Open the dialog on form submission
  };

  const handleClose = () => {
    setOpenDialog(false); // Close the dialog
  };

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: theme.palette.background.default,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Navbar */}
        <AppBar
          position="static"
          style={{
            backgroundColor: "#ffffff",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Toolbar>
            <Container
              maxWidth="lg"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Logo />
            </Container>
          </Toolbar>
        </AppBar>

        {/* Hero Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "auto", // Center vertically
            maxWidth: "1200px", // Limit the maximum width of the section
            gap: "2rem", // Gap between containers
          }}
        >
          {/* Hero Section */}
          <Container
            maxWidth="md"
            style={{
              textAlign: "center",
              padding: "4rem 0",
            }}
          >
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              style={{
                fontWeight: "bold",
              }}
            >
              Meal to Heal
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Customized nutritious meal plans designed for your specific health needs.
            </Typography>
          </Container>

          {/* Contact Form Section */}
          <Container
            maxWidth="sm"
            style={{ marginTop: "0", marginBottom: "0rem" }}
          >
            <Box
              sx={{
                p: 2,
                backgroundColor: theme.palette.background.paper,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                borderRadius: "16px",
              }}
            >
              <Typography
                variant="h4"
                gutterBottom
                style={{ color: "#000000", fontWeight: "bold" }}
              >
                Get in Touch
              </Typography>
              <form noValidate onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Your Name"
                  InputLabelProps={{ style: { color: "#555555" } }}
                  required
                />
                <TextField
                  fullWidth
                  label="Your Email"
                  type="email"
                  InputLabelProps={{ style: { color: "#555555" } }}
                  required
                />
                <TextField
                  fullWidth
                  label="Your Phone Number"
                  type="tel"
                  InputLabelProps={{ style: { color: "#555555" } }}
                  required
                />
                <Button
                  color="primary"
                  variant="contained"
                  fullWidth
                  type="submit"
                  style={{ marginTop: "1rem" }}
                >
                  Submit
                </Button>
              </form>
            </Box>
          </Container>
        </div>

        {/* Dialog Box */}
        <Dialog open={openDialog} onClose={handleClose}>
          <DialogContent>
            <Typography variant="h6" component="p">
              We will get in touch with you soon!
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>

        {/* Carousel Section */}
        <Container maxWidth="lg" style={{ marginTop: "2rem" }}>
          <Slider {...carouselSettings}>
            {carouselItems.map((item, index) => (
              <Box
                key={index}
                sx={{
                  p: 0,
                  backgroundColor: theme.palette.background.paper,
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0)",
                  borderRadius: "16px",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h5"
                  component="h5"
                  gutterBottom
                  style={{ color: "#000000", fontWeight: "bold" }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  style={{ color: "#555555", fontSize: "1.1rem" }}
                >
                  {item.description}
                </Typography>
              </Box>
            ))}
          </Slider>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default HomePage;
