"use client";
import Link from "next/link";
import { Grid, Box, Card, Stack, Typography } from "@mui/material";
// components
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import Logo from "@/app/(DashboardLayout)/layout/shared/logo/Logo";
import ProductPerformance from "../(DashboardLayout)/components/dashboard/ProductPerformance";


const Login2 = () => {
  return (
    <PageContainer title="Users" description="this is Login page">
    <ProductPerformance/>
    </PageContainer>
  );
};
export default Login2;
