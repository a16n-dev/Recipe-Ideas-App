import React, { useState } from 'react';
import './SearchBar.css';
import { Button, Grid, TextField } from '@material-ui/core';
import { sizing } from '@material-ui/system';
import { IUserInput } from '../../common/interface'

interface ISearchBarProps {
    SetUserInput: (a: IUserInput) => void;
}

function SearchBar(props: ISearchBarProps) {

    //state
    const [SearchQuery, setSearchQuery] = useState<string | null>('')
    const [HasFocus, setHasFocus] = useState<boolean>(false);

    //handlers
    const handleSubmit = () => {
        if (SearchQuery?.length !== 0 && SearchQuery !== null && SearchQuery !== "") {
            let UserInput: IUserInput = {
                SearchQuery: SearchQuery,
            }
            props.SetUserInput(UserInput);
        } else {
            setHasFocus(true);
        }
    }
    const handleSearchQueryChange = (s: string | null) => {
        setSearchQuery(s);
    }

    //render
    return (
        <div className="SearchBarContainer">
            <Grid container spacing={3} justify='center'>
                {/* Text Field */}
                <Grid item xs={12} sm={'auto'}>
                    <TextField
                        required
                        autoFocus
                        id="outlined-required"
                        helperText='eg. Potato'
                        variant="standard"
                        error={HasFocus && SearchQuery === ""}
                        onClick={() => setHasFocus(true)}
                        value={SearchQuery}
                        onChange={e => handleSearchQueryChange(e.target.value)}
                    />
                </Grid>

                {/* Submit Button */}
                <Grid item xs={12} sm={'auto'}>
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                        Submit
                </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default SearchBar