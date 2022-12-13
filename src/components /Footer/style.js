
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
},

buttonsF: {
    textAlign: 'center',
    marginTop: '-150px',
    marginBottom: '110px',
    display: 'flex',
    justifyContent: 'space-evenly',
    paddingLeft: '600px',
    paddingRight: '600px',
},

'@media (max-width:600px)': {

    footerin: {
        marginBottom: '0px',
        paddingLeft: '60px',
        fontSize: '12px',

    },
    footerCon: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        backgroundColor: '#05252A',
        marginLeft: '-100px',
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

'@media (min-width:600px)': {
},

'@media (min-width:1180px)': {
},


}))