import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import Head from "next/head";
import React, { Children } from "react";
import useStyles from "../utils/styles.module";
export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Absolute Pitch</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>Absolute Pitch</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All right reserved. Absolute Pitch</Typography>
      </footer>
    </div>
  );
}
