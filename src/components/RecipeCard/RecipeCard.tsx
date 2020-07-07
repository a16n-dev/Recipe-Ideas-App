import React from 'react';
import './RecipeCard.css';
import { Button, Grid, Typography, Card, CardContent } from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';
import { IRecipe } from '../../common/spoonacular_api_interface'
import { IUrlCache } from '../../common/interface';

interface ICardProps {
    Recipe: IRecipe;
}

function RecipeCard(props: ICardProps) {

    const serveRecipe = (id: number) => {

        //fetch urls
        let UrlCache: IUrlCache = (() => {
            const dataString = localStorage.getItem('URLCache')
            if (dataString) {
                return JSON.parse(dataString)
            } else {
                return {};
            }
        })();

        if (UrlCache[id]) {
            window.open(UrlCache[id])
        } else {
            //fetch url from server and store
            const key = process.env.REACT_APP_SPOONACULAR_API_KEY
            const url = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${key}`
            fetch(url).then(function (response) {
                if (response.status !== 200) { return };

                response.json().then(function (data) {
                    UrlCache[id] = data.sourceUrl
                    localStorage.setItem('URLCache', JSON.stringify(UrlCache))
                    window.open(data.sourceUrl)
                });
            }
            ).catch(function (err) {
                console.log('Fetch Error :-S', err);
            });
        }
    }

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
                            <Grid item xs>
                                {/*Title goes here */}
                                <Typography variant="h5" align='left'>{props.Recipe.title}</Typography>
                                <Typography variant='subtitle1' align='left' color='textSecondary'>Extra ingredients: <b>{props.Recipe.missedIngredientCount}</b></Typography>
                            </Grid>
                            <Grid item container direction="row" justify="flex-end">
                                <Grid item >
                                    <Button variant="contained" color="primary" onClick={() => { serveRecipe(props.Recipe.id) }}>
                                        View Recipe <ExitToApp />
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div >

    )
}

export default RecipeCard