import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

const MultiSelect = ({ personName, setPersonName }) => {

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel>Collaborators</InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Name" />}
                >
                    {names.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

export default MultiSelect