import  React, { useState, useEffect } from 'react';
import { mapStateToProps, mapDispatchToProps } from '../redux/redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

function SuperHeroComp(props) {

    function deleteFunc() {
        props.delete(props.match.params.id)
    }

    const [descr, setDescr] = useState(false)

    

    useEffect(() => {
        setDescr(false)
    }, [props.match.params.id])

    useEffect(() => {
        
    }, [descr])

    let route = props.state.superheros[props.match.params.id];
    if (props.state.superheros.length-1 < props.match.params.id) route = props.state.superheros[props.match.params.id-1];
    return (
        <div className="hero_page">
            <Link to={`/edit/${props.match.params.id}`}></Link>

                {descr && props.state.superheros.length ? <div className="hero_page__description">
                        <p><strong>Real name:</strong> {route.nickname}</p>
                        <p><strong>Description:</strong> {route.origin_description}</p>
                        <p><strong>Super powers:</strong> {route.superpowers}</p>
                        <p><strong>Catch phrase:</strong> <i>&quot;{route.catch_phrase}&quot;</i></p>
                        <p style={{textAlign: "center"}}><strong>Images: </strong>
                        <div className="superhero__images">
                           {route.images.map((x, ind) => {
                            return <img src={x} alt="superhero img"/>
                            })} 
                        </div>
                        </p>
                    </div> : null}
                {props.state.superheros.length ? <img className="hero_page__avatar" src={route.frontImg} alt="superhero_img" onMouseEnter={() => setDescr(!descr)} /> : null} 

            <h1>{props.state.superheros.length ? route.nickname : "No heros"}</h1>
            <div className="hero_page__buttons">
                <Link to={`/hero/${props.match.params.id > 0 ? props.match.params.id-1 : 0}`}><Button disabled={!props.state.superheros.length} onClick={() => deleteFunc()}>Delete</Button></Link>
                
                <Button disabled={!props.state.superheros.length}>Edit</Button>
                <Link to={"/create"}><Button>Create</Button></Link>
            </div>
            
        </div>
    )
}

let SuperHero = connect(mapStateToProps, mapDispatchToProps)(SuperHeroComp);

export default SuperHero;