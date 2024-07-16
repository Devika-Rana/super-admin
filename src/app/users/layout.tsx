"use client";
import { styled, Container, Box } from "@mui/material";
import React, { useState } from "react";
import Footer from '@/GlobalComponents/footer/Footer'
import Header from '@/GlobalComponents/Header'
import Sidebar from '../(DashboardLayout)/layout/sidebar/Sidebar'

const MainWrapper = styled("div")(() => ({
    display: "flex",
    minHeight: "100vh",
    width: "100%",
  }));
  
  const PageWrapper = styled("div")(() => ({
    display: "flex",
    flexGrow: 1,
    paddingBottom: "60px",
    flexDirection: "column",
    zIndex: 1,
    backgroundColor: "transparent",
  }));
  

function Layout({children}:{children:React.ReactNode}) {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  return (
    
         <MainWrapper className="mainwrapper">
       
        <Sidebar
        isSidebarOpen={isSidebarOpen}
        isMobileSidebarOpen={isMobileSidebarOpen}
        onSidebarClose={() => setMobileSidebarOpen(false)}
      />
         <PageWrapper className="page-wrapper">
        <Container
          sx={{
            paddingTop: "5px",
            maxWidth: "1200px",
          }}
        >
          <Header />
          <Box sx={{ minHeight: "calc(100vh - 170px)" }}>{children}</Box>
          <Footer />
        </Container>
      </PageWrapper>
        </MainWrapper>

  )
}

export default Layout