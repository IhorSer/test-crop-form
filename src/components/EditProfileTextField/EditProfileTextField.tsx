import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { observer } from 'mobx-react';
import { ChangeEventHandler, FocusEventHandler } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { v4 } from 'uuid';

interface EditProfileTextFieldProps {
    name: any;
    label: string;
    value: string;
    errors: string[];
    onChange: ChangeEventHandler;
    handleBlur: FocusEventHandler;
    touched: [];
    type: string;
    rows?: string;
    multiline?: boolean;
    select: boolean;
    selectItems: [];
}

const styles = makeStyles(theme => ({
    textField: {
        marginBottom: '1rem'
    }
}));

const EditProfileTextField = ({ name, label, value, errors, onChange, handleBlur, 
    touched, type, rows, multiline, select, selectItems}: EditProfileTextFieldProps) => { 
    const classes = styles();
    return ( 
            <TextField
                className={classes.textField}
                variant='outlined'
                margin='none'
                required
                fullWidth
                id={name}
                label={label}
                name={name}
                value={value}
                type={type}
                multiline={multiline ?? false}
                rows={rows ?? 1}
                select={select}
		        helperText={touched[name] && errors[name]}
                error={touched[name] && Boolean(errors[name])}
		        onChange={onChange}
                onBlur={handleBlur}>
                    {selectItems&& selectItems.map(item => <MenuItem value={item} key={v4()}>{item}</MenuItem> )}
                </TextField>
    )
}

export default observer(EditProfileTextField);