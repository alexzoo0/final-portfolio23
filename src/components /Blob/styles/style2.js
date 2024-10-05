import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    blob: {
        padding: '50px',
        boxShadow: '#E4584B',
      },
      
    box: {
        marginLeft: '-200px',
        opacity: '0.5',
        display: 'flex',
        justifyContent: 'center',
        width: '90%',
        height: '90%',
        zIndex: '1',
      },
    '@media (max-width:600px)': {
      blob: {
        height: '400px',
        width: '400px',
        marginTop: '-200px',
      },
      box: {
        marginLeft: '150px',
        marginTop: '-0px',
        marginBottom: '50px',
      },
      },
}))