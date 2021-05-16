import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles(theme => ({
    container: {
        display: 'flex',
        placeItems: 'center',
        background: 'black',
    },
    iconButton: {
        position: 'fixed',
        top: '2rem',
        right: '2rem',
        backgroundColor: '#308ef2',
        color: '#fff',
    }
}))