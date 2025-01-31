'use client'
import { Grid, Box } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
// components
import SalesOverview from '@/app/(DashboardLayout)/components/dashboard/SalesOverview';
import YearlyBreakup from '@/app/(DashboardLayout)/components/dashboard/YearlyBreakup';
import RecentTransactions from '@/app/(DashboardLayout)/components/dashboard/RecentTransactions';
import ProductPerformance from '@/app/(DashboardLayout)/components/dashboard/ProductPerformance';
import Blog from '@/app/(DashboardLayout)/components/dashboard/Blog';
import MonthlyEarnings from '@/app/(DashboardLayout)/components/dashboard/MonthlyEarnings';
import MasterDataCard from './components/dashboard/masterDataCard';

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid xs={12} lg={6}>
              <MasterDataCard />  
          </Grid>
          <Grid xs={12} lg={6}>
              <MasterDataCard />  
          </Grid>
          <Grid xs={12} lg={6}>
              <MasterDataCard />  
          </Grid>
          <Grid xs={12} lg={6}>
              <MasterDataCard />  
          </Grid>
          {/* <Grid item xs={12} lg={12}>
            <ProductPerformance />
          </Grid> */}
        </Grid>
      </Box>
    </PageContainer>
  )
}

export default Dashboard;
