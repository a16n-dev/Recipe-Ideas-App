import React, { useState } from 'react';
import './AppTitleBar.css';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import { Box, Typography, AppBar, Toolbar, Button } from '@material-ui/core';
import { spacing } from '@material-ui/system'

interface IAppTitleBarProps { };


function AppTitleBar(props: IAppTitleBarProps) {
    return (
        <AppBar position="static">
            <Toolbar>

                <EmojiObjectsIcon />
                <Box ml={1}>
                    <Typography variant="h6" >
                        Recipe Ideas
                </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default AppTitleBar