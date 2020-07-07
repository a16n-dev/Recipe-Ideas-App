import React, { useState, useEffect } from 'react';
import './CardGrid.css';
import { Grid, CircularProgress, Typography } from '@material-ui/core';
import RecipeCard from '../RecipeCard/RecipeCard'
import { IStatus } from '../../common/interface'
import { IRecipe } from '../../common/spoonacular_api_interface'
require('dotenv').config()

interface ICardGridProps {
    SearchQuery: (string | null);
};

function CardGrid(props: ICardGridProps) {

    //state
    const [ItemArray, setItemArray] = useState<IRecipe[]>([])
    const [IsLoading, setIsLoading] = useState<Boolean>(false)
    const [AppStatus, setAppStatus] = useState<IStatus>({
        Msg: 'Enter an ingredient to get recipe suggestions...',
        Success: false,
        TextDisplay: 'textPrimary'
    })
    useEffect(() => {
        setIsLoading(true)
        if (!props.SearchQuery) {
            setIsLoading(false)
            return
        }

        const key = process.env.REACT_APP_SPOONACULAR_API_KEY;
        const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${props.SearchQuery}&number=6&apiKey=${key}`
        fetch(url)
            .then(
                function (response) {
                    if (response.status !== 200) {
                        let msg;
                        switch (response.status) {
                            case 401:
                                msg = 'Unauthorized request, likely bad API key.'
                                break;
                            case 402:
                                msg = 'Daily quota exceeded for API calls.'
                                break;
                        }
                        setAppStatus({
                            Msg: `${msg} Status Code: ${response.status}`,
                            Success: false,
                            TextDisplay: 'error'
                        })
                        setIsLoading(false)
                        return;
                    }

                    // Examine the text in the response
                    response.json().then(function (data) {
                        setAppStatus({
                            Msg: "No results found",
                            Success: (data.length > 0 ? true : false),
                            TextDisplay: 'error',
                        })
                        setItemArray(data);
                        setIsLoading(false)
                    });

                }
            )
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
                setIsLoading(false)
            });
    }, [props.SearchQuery])

    var Cards: JSX.Element[] = [];
    ItemArray.forEach((el: IRecipe, i: Number) => {
        if (!el) {
            return;
        }
        Cards.push(
            <Grid key={`card_${i} `} item xs={12} md={6} lg={4} className='MediaGridCard'>
                <RecipeCard Recipe={el} />
            </Grid>
        )
    })

    return (
        <div className="CardGridContainer">
            <Grid container direction="row" justify="center">

                <Grid
                    item
                    container
                    direction="row"
                    justify="center"
                    alignItems="baseline"
                    spacing={5}
                    xs={10}
                    lg={11}
                >
                    {(AppStatus.Success && !IsLoading) && Cards}
                    {(!AppStatus.Success && !IsLoading) && <Typography variant="subtitle1" color={AppStatus.TextDisplay}>{AppStatus.Msg}</Typography>}
                    {IsLoading && <CircularProgress />}
                </Grid>
            </Grid>
        </div>
    )

}

export default CardGrid