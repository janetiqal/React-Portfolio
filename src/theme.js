import { createTheme } from '@mui/material/styles';

const theme= createTheme({
    palette:{
        primary:{
            main:'#546e7a'
        },
        secondary:{
            main:'#fbc02d',
            light:''
        }
    },
    props:{
        MuiButton:{
            disableRipple:true,
            variant:'contained'
        }
    }
})

 export default theme;