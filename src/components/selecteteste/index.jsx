import { FormControl, InputLabel, MenuItem, OutlinedInput, Select } from "@mui/material";
import PropTypes from 'prop-types';

const SelectTeste = (props) => {
    const { data, value, onChange } = props;

    // const handleChange = (event) => {
    //   const {
    //     target: { value },
    //   } = event;
    //   setSelected(typeof value === "string" ? value.split(",") : value);
    // };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Name</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={value}
          onChange={onChange}
          input={<OutlinedInput label="Name" />}
        >
           {data.map((name, index) => (
            <MenuItem
              key={index}
              value={name}
            >
              {name}
            </MenuItem>
          ))} 
      </Select>
      </FormControl>
    </div>
  );
};

SelectTeste.propTypes = {
  data: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.array.isRequired
};

export default SelectTeste;
