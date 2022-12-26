import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    blob: {
        padding: '50px',
        boxShadow: '#E4584B',
      },
      
    box: {
        marginTop: '-980px',
        marginBottom: '200px',
        display: 'flex',
        justifyContent: 'center',
        opacity: '0.5',
        width: '90%',
        height: '90%',
      },
      '@media (max-width:600px)': {
        blob: {
          width: '400px',
          height: '400px',
          margin: '20px',
        },
        box: {
          marginTop: '-450px',
          marginBottom: '590px',
          opacity: '0.5',
          marginRight: '-60px',
        },
      },
}))