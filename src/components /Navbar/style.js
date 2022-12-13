import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    flex: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '80px 0px 0px 0px'
    },

    container: {
        marginTop: '100px',
        width: '100%'
    },

    avatar: {
        color: 'white',
        backgroundColor: '#E4584B',
        margin: '-30px 0px -20px 35px',
        fontFamily: 'Bolgota',
        padding: '4px 2px 2px 2px',
    },
    button: {
        color: 'white',
        fontFamily: 'Bolgota',
        backgroundColor: '#E4584B',
        borderRadius: '8px',
        padding: '10px 10px 5px 10px',
        margin: '-30px 40px 40px 0px',
        "&:hover": {
            backgroundColor: "#04AA6D"
        },
    },
    

    
    
    
}))