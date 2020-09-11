import  React, { useState, useEffect } from 'react';
import { mapStateToProps, mapDispatchToProps } from '../redux/redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function SuperHeroComp(props) {

    const [descr, setDescr] = useState(false)

    useEffect(() => {
        
    }, [descr])

    useEffect(() => {
        return () => {setDescr(false)}
    }, [props.match.params.id])

    return (
        <div className="hero_page">
            <Link to={`/edit/${props.match.params.id}`}></Link>
                {descr ? <div className="hero_page__description">
                        <p><strong>Real name:</strong> {props.state.superheros[props.match.params.id].nickname}</p>
                        <p><strong>Description:</strong> {props.state.superheros[props.match.params.id].origin_description}</p>
                        <p><strong>Super powers:</strong> {props.state.superheros[props.match.params.id].superpowers}</p>
                        <p><strong>Catch phrase:</strong> <i>&quot;{props.state.superheros[props.match.params.id].catch_phrase}&quot;</i></p>
                        <p><strong>Images: </strong></p>
                    </div> : null}
                <img src={props.state.superheros[props.match.params.id].frontImg} alt="superhero_img" onMouseEnter={() => setDescr(!descr)} />

            <h1>{props.state.superheros[props.match.params.id].nickname}</h1>
        </div>
    )
}

let SuperHero = connect(mapStateToProps, mapDispatchToProps)(SuperHeroComp);

export default SuperHero;