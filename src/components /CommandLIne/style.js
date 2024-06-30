import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    content: {
        marginTop: '-1000px',
        marginBottom: '-400px',
        display: 'flex',
        justifyContent: 'center',
    },
    box: {
        margin: '100px',
        marginTop: '0px',
        borderRadius: '20px',
        padding: '40px',
        color: 'black',
        backgroundColor: '#E4584B',
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '10px',
    },
    button: {
        color: 'black',
        pointerEvents: 'none',
    },
    code: {
        marginTop: '400px',
        marginBottom: '-500px',
        marginRight: '50px',
        marginLeft: '50px',
        padding: '50px',
        borderRadius: '20px',
        backgroundColor: '#00252a',
        display: 'flex',
        justifyContent: 'center',
    },
    bg: {
        padding: '20px',
        backgroundColor: '#00191b',
        borderRadius: '20px',
        color: 'white',
    }
}))