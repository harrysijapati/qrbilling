import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url("https://www.scandichotels.com/imagevault/publishedmedia/qn6infvg30381stkubky/scandic-sundsvall-city-restaurant-verket-10.jpg")`,
        backgroundColor: theme.palette.secondary.gray,
    },
    secondRoot: {
        padding: "18px 0",
        backgroundColor: theme.palette.secondary.main,
        height: "73vh",
        display: "flex",
        flexDirection: "column",
    },
    searchBarTitle: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: 700
    },
    tabs: {
        backgroundColor: theme.palette.secondary.main,
        "&.MuiTab-textColorInherit.Mui-selected": {
            color: theme.palette.primary.main
        },
    },
    tab: {
        backgroundColor: theme.palette.secondary.gray,
        borderRadius: 40,
        margin: '0px 10px',
        padding: '14px 18px'
    },
    product: {
        padding: "none",
    },
    orderBtn: {
        color: theme.palette.secondary.main,
        backgroundColor: theme.palette.primary.main,
        borderRadius: "10px",
        padding: "8px 16px",
        "&:hover, &:focus": {
            outline: "none",
            backgroundColor: theme.palette.primary.main,
        },
    },
    accordian: {
        backgroundColor: theme.palette.secondary.gray,
        '& .MuiAccordionDetails-root': {
            padding: 0
        }
    },

}));

export default useStyles;