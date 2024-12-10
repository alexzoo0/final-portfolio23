
import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
footer: {
    backgroundColor: '#05252A',
    color: '#fff37e',
},

footerCon: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '100px',
    backgroundColor: '#05252A',
},

footerCon2: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '100px',
    paddingBottom: '0px',
    marginTop: '-280px',
    backgroundColor: '#05252A',
},

footerin: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '0px',
},

footerin1: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '-0px',
    marginRight: '55px',
},

buttonsF: {
    textAlign: 'center',
    marginTop: '-150px',
    marginBottom: '110px',
    display: 'flex',
    justifyContent: 'space-evenly',
    paddingLeft: '550px',
    paddingRight: '600px',
},


'@media (max-width:1096px)': {
    buttonsF: {
        textAlign: 'center',
        marginTop: '-150px',
        marginBottom: '110px',
        display: 'flex',
        justifyContent: 'space-evenly',
        paddingLeft: '480px',
        paddingRight: '600px',
    },
},


'@media (max-width:950px)': {
    buttonsF: {
        textAlign: 'center',
        marginTop: '-150px',
        marginBottom: '110px',
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: '400px',
        paddingRight: '450px',
    },
},

'@media (max-width:844px)': {
    footer: {
        backgroundColor: '#05252A',
        color: '#fff37e',
        paddingLeft: '160px',
    },
    buttonsF: {
        textAlign: 'center',
        marginTop: '-150px',
        marginBottom: '110px',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '-175px',
        paddingLeft: '600px',
        paddingRight: '600px',
    },
    footerCon: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        backgroundColor: '#05252A',
        marginLeft: '-100px',
        paddingBottom: '',
        paddingTop: '40px',
    },
    
    footerCon2: {
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: '80px',
        marginTop: '-275px',
        backgroundColor: '#05252A',
        marginLeft: '-100px',
    },
},

'@media (max-width:735px)': {
    footer: {
        backgroundColor: '#05252A',
        color: '#fff37e',
        paddingLeft: '100px',
    },
    footerin: {
        marginTop: '15px',
        paddingLeft: '60px',
        fontSize: '15px',

    },
    footerin1: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '0px',
        marginLeft: '60px',
        fontSize: '15px',
    },
    footerCon: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        backgroundColor: '#05252A',
        marginLeft: '-100px',
        paddingBottom: '',
        paddingTop: '40px',
    },
    
    footerCon2: {
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: '80px',
        marginTop: '-275px',
        backgroundColor: '#05252A',
        marginLeft: '-100px',
    },
    buttonsF: {
        textAlign: 'center',
        marginTop: '-150px',
        marginBottom: '110px',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '-175px',
        paddingLeft: '600px',
        paddingRight: '600px',
    },
},

'@media (max-width:625px)': {
    footer: {
        backgroundColor: '#05252A',
        color: '#fff37e',
        paddingLeft: '50px',
    },
},


'@media (max-width:600px)': {
    footer: {
        backgroundColor: '#05252A',
        color: '#fff37e',
        paddingLeft: '30px',
    },
    footerin: {
        marginTop: '15px',
        paddingLeft: '60px',
        fontSize: '15px',

    },
    footerin1: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '0px',
        marginLeft: '60px',
        fontSize: '15px',
    },
    footerCon2: {
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: '80px',
        marginTop: '-275px',
        backgroundColor: '#05252A',
        marginLeft: '-100px',
    },
    buttonsF: {
        textAlign: 'center',
        marginTop: '-150px',
        marginBottom: '110px',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '-175px',
        paddingLeft: '600px',
        paddingRight: '600px',
    },
},

'@media (max-width:510px)': {
    footer: {
        backgroundColor: '#05252A',
        color: '#fff37e',
        paddingLeft: '0px',
    },
},

'@media (max-width:480px)': {
    footer: {
        backgroundColor: '#05252A',
        color: '#fff37e',
        paddingLeft: '0px',
    },
    buttonsF: {
        textAlign: 'center',
        marginTop: '-178px',
        marginBottom: '110px',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '-175px',
        paddingLeft: '450px',
        paddingRight: '00px',
    },
},

}))