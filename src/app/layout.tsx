"use client";
import { baselightTheme } from "@/utils/theme/DefaultColors";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "@/GlobalComponents/Header";
import Footer from "@/GlobalComponents/footer/Footer";
import { Box } from "@mui/material";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={baselightTheme}>
          <CssBaseline />
          <Box sx={{ width: "80%", float: "right" }}>
        
          </Box>
          {children}
          <Box sx={{ width: "80%", float: "right" }}>
        
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
