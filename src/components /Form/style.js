import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    group: {
        display: 'flex',
        justifyContent: 'flex-start',
        marginLeft: '0px',
    },

    form: {
        marginTop: '1200px',
        marginBottom: '-400px',
        padding: '10px 20px 10px 40px',
        backgroundColor: '#E4584B',
        width: '420px',
        height: '500px',
        borderRadius: '20px 140px 20px 20px',
        
    },

    input: {
       padding: '10px 200px 10px 10px',
       marginTop: '5px',
       borderRadius: '7px',
       borderStyle: 'none',
    },
    
    label: {
       paddingTop: '20px',
       paddingBottom: '5px',
    },

    area: {
        marginTop: '5px',
        padding: '20px 170px 90px 10px',
        borderRadius: '10px',
        borderStyle: 'none',
    },

    name: {
        marginTop: '50px',
        marginLeft: '20px',
    },

    email: {
        marginTop: '10px',
        marginLeft: '20px',
    },

    message: {
        marginTop: '10px',
        marginLeft: '20px',
     },

    button: {
        marginTop: '20px',
        padding: '12px 20px',
        borderRadius: '7px',
        borderStyle: 'none',
        backgroundColor: '#004d40',
        color: 'white'
    },

    title: {
        marginTop: '1250px',
        marginBottom: '-1150px',
        fontSize: '50px',
        fontFamily: 'bolgota',
        color: '#fff37e',
        marginLeft: '0px',
    },

    success: {
        color: '#00ffc8',
    },

    '@media (max-width:600px)': {
        title: {
            marginTop: '1450px',
            marginBottom: '-1150px',
            fontSize: '50px',
            fontFamily: 'bolgota',
            color: '#fff37e',
        },
        group: {
            display: 'flex',
            justifyContent: 'flex-start',
            marginLeft: '0px',
            marginBottom: '200px',
        },
    },

    '@media (min-width:600px)': {
        title: {
            marginTop: '1250px',
            marginBottom: '-1150px',
            fontSize: '50px',
            fontFamily: 'bolgota',
            color: '#fff37e',
            marginLeft: '0px',
            display: 'flex',
            justifyContent: 'center',
        },
        group: {
            display: 'flex',
            justifyContent: 'center',
            marginLeft: '0px',
            marginBottom: '200px',
        },
    },

    '@media (min-width:1200px)': {
        title: {
            justifyContent: 'flex-start',
        },
        group: {
            display: 'flex',
            justifyContent: 'flex-start',
        },
    },

/*  */
    
    
    
}))