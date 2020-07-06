import React, { useState } from 'react';
import './RecipeCard.css';
import { Button, Grid, Typography, Card, CardContent } from '@material-ui/core';
import { IRecipe } from '../../common/spoonacular_api_interface'

interface ICardProps {
    Recipe: IRecipe;
}

function RecipeCard(props: ICardProps) {

    //render
    return (
        <div className="CardContainer">
            <Card raised>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={3} sm={5}>
                            <div className='ImageThumbContainer' style={{
                                backgroundImage: 'url(' + props.Recipe.image + ')'
                            }}>
                            </div>

                        </Grid>
                        <Grid
                            item
                            container
                            direction="column"
                            justify="flex-start"
                            alignItems="flex-start"
                            spacing={2}
                            xs
                        >
                            {/*Panel goes here */}
                            <Grid item container xs justify="flex-start">
                                {/*Title goes here */}
                                <Grid item xs={12}>
                                    <Typography variant="h5">{props.Recipe.title}</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography>Smaller title</Typography>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="primary">
                                    View Recipe (External link)
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div >

    )
}

export default RecipeCard