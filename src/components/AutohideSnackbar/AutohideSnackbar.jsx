import { Alert } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';

export default function AutohideSnackbar({ open, setOpen, message }) {
    console.log("open",open,"message",message)
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <Snackbar
            open={open}
            autoHideDuration={5000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
            <Alert onClose={handleClose} icon={false} sx={{bgcolor:"#00A500", color:'#fff'}}>
                {message}
            </Alert>
        </Snackbar>
    )
}