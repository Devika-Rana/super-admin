"use client";

import { memo } from "react";
import Link from "next/link";
import { Box, Container, Grid, Typography, styled } from "@mui/material";
import { FooterStyle } from "./FooterStyle";

const footerMenu = {
  menu: [
    {
      icon: "fa fa-database",
      label: "One Time Registration",
      to: "#",
    },
    {
      icon: "fa fa-paste",
      label: "Instruction for OTR",
      to: "#",
    },
  ],
};


const Footer = memo(() => {
  return (
    <FooterStyle>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
          className="responsive-row"
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Grid item xs={12} md={4}>
            <div className="footerleft">
              <Typography variant="body2" component="p">
                Website Content Managed by © Content Owned by Union Public
                Service Commission, New Delhi, India.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="footer_link">
              <Typography variant="h2">Useful Links</Typography>
              <ul>
                {footerMenu?.menu.map(({ label, to, icon }, index) => (
                  <li key={index}>
                    <Link href={to}>
                     
                        <i className={`${icon} me-2`}></i>
                        {label}
                     
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="visit">
              <Typography variant="h2">Contact Us:</Typography>
              <Typography variant="body2">
                Dholpur House, Shahajahan Road, New Delhi - 110069
              </Typography>
            </div>
            <div className="visit">
              <div>
                <Typography variant="h2">Your System IP Address:</Typography>
                <Typography variant="h2" className="mt-3">
                  Current Time & Date:
                </Typography>
                <Typography variant="body2" className="">
                  {/* {moment(currentTime).format("hh:mm:ss a (ddd, Do MMM YYYY)")} */}
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </FooterStyle>
  );
});

export default Footer;
