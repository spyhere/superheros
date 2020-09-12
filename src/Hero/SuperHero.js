import  React, { useState, useEffect } from 'react';
import { mapStateToProps, mapDispatchToProps } from '../redux/redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function SuperHeroComp(props) {

    const [descr, setDescr] = useState(false)

    

    useEffect(() => {
        setDescr(false)
    }, [props.match.params.id])

    useEffect(() => {
        
    }, [descr])

    const route = props.state.superheros[props.match.params.id];
    return (
        <div className="hero_page">
            <Link to={`/edit/${props.match.params.id}`}></Link>
                {descr ? <div className="hero_page__description">
                        <p><strong>Real name:</strong> {route.nickname}</p>
                        <p><strong>Description:</strong> {route.origin_description}</p>
                        <p><strong>Super powers:</strong> {route.superpowers}</p>
                        <p><strong>Catch phrase:</strong> <i>&quot;{route.catch_phrase}&quot;</i></p>
                        <p><strong>Images: </strong>
                        <div className="superhero__images">
                           {route.images.map((x, ind) => {
                            return <img src={x} alt="superhero img"/>
                            })} 
                        </div>
                        </p>
                    </div> : null}
                <img className="hero_page__avatar" src={props.state.superheros[props.match.params.id].frontImg} alt="superhero_img" onMouseEnter={() => setDescr(!descr)} />

            <h1>{props.state.superheros[props.match.params.id].nickname}</h1>
        </div>
    )
}

let SuperHero = connect(mapStateToProps, mapDispatchToProps)(SuperHeroComp);

export default SuperHero;