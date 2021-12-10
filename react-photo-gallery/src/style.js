import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(10, 0, 8),
        maxWidth: 'sm',
    },
    icon: {
        marginRight: '20px'
    },
    button: {
        marginTop: '40px'
    },
    cardGrid: {
        padding: '20px 0'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirections: 'column',
        backgroundColor: '#f7f7f7'
    },
    cardMedia: {
        paddingTop: '56.25%'
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: '#f7f7f7',
        padding: '50px 0',
        bottom: '0',
        textAlign: 'center'

    },
}));

export default useStyles;

