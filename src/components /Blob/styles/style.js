import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    blob: {
        padding: '50px',
      },
      
    box: {
        marginBottom: '-900px',
        marginLeft: '140px',
        display: 'flex',
        justifyContent: 'center',
        opacity: '0.6',
        width: '90%',
        height: '90%',
      },

      '@media (max-width:600px)': {
        blob: {
          width: '500px',
          height: '500px',
          marginLeft: '-300px',
          marginTop: '600px',
        },

        box: {
          marginTop: '25px',
          marginBottom: '-390px',
          marginLeft: '100px',
        },
      },
}))