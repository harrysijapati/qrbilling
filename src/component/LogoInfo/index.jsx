import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DummyLogo from "../../assets/Image 1.png";
import { Button } from "@material-ui/core";
import clsx from "clsx";
import { Lock as LockIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "8px 16px 30px",
    textAlign: "center",
  },
  img: {
    width: "128px",
    height: "128px",
    objectFit: "cover",
    borderRadius: 12,
    marginTop: 20,
  },
  info: {
    marginTop: 12,
    backgroundColor: theme.palette.secondary.main,
  },
  cardContent: {
    padding: "6px 12px",
  },
  resName: {
    fontSize: "14pt",
    fontWeight: 900,
    lineHeight: "22px",
    fontFamily: "Poppins",
  },
  tableNumber: {
    fontSize: "10pt",
    lineHeight: "15px",
    marginBottom: "3px",
    opacity: 0.5,
    fontWeight: 500,
    fontFamily: "Poppins",
  },
  buttons: {
    fontFamily: "Poppins",
    marginTop: 10,
    fontWeight: 500,
    fontSize: 12,
    borderColor: theme.palette.secondary.dark,
    marginRight: 10,
    padding: "5px 20px",
    textTransform: "none",
  },
  filledButton: {
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.main,
  },
  lockIcon: {
    fontSize: 15,
  },
}));

const LogoInfo = ({ menuList, tableNumber, cartItems, goToCart }) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.card}>
        {menuList && menuList.data && (
          <Card>
            <CardContent className={classes.cardContent}>
              {/* Logo */}
              <img
                src={menuList.data.logo || DummyLogo}
                className={classes.img}
                alt="Company Logo"
              />

              {/* Restaurant, Table Info */}
              <div className={classes.info}>
                <Typography className={classes.resName}>
                  {menuList.data.name}
                </Typography>
                <Typography variant="caption" className={classes.tableNumber}>
                  {menuList.data.asset.name}
                </Typography>
              </div>

              {/* Buttons */}
              <div>
                <Button
                  onClick={goToCart}
                  size="small"
                  variant="outlined"
                  className={classes.buttons}
                >
                  <LockIcon className={classes.lockIcon} />
                  Your Cart
                </Button>
                <Button
                  onClick={goToCart}
                  size="small"
                  variant="contained"
                  className={clsx(classes.buttons, classes.filledButton)}
                >
                  Check Out
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default LogoInfo;
