import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    blob: {
        padding: '50px',
        boxShadow: '#E4584B',
      },
      
    box: {
        marginTop: '-980px',
        marginLeft: '300px',
        display: 'flex',
        justifyContent: 'center',
        opacity: '0.5',
      },
      '@media (max-width:600px)': {
        blob: {
          width: '600px',
          height: '600px',
          marginBottom: '-70px',
        },
        box: {
          marginTop: '-450px',
          marginBottom: '590px',
          opacity: '0.5',
          marginRight: '-60px',
        },
      },
}))