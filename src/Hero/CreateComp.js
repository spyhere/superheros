import React, { useState, useEffect } from 'react';
import { mapStateToProps, mapDispatchToProps } from '../redux/redux';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function CreateComp(props) {

    const [state, setState] = useState({frontImg: "", nickname: "", real_name: "", origin_description: "", superpowers: "", catch_phrase: "", images: []})

    let changeFunc = (e) => {
        let stateTemp = {...state};
        stateTemp[e.target.name] = e.target.value;

        if (e.target.name === "images") stateTemp.images = stateTemp.images.split(" ")
        setState(stateTemp);
    }

    useEffect(() => {

        if (props.state.edit) setState(props.state.superheros[props.state.id])

        document.querySelector(".main_pagination").style.display = "none";
        return () => document.querySelector(".main_pagination").style.display = "block";
    }, [])

    return (
        <div className="create_page">
            <h1>{props.state.edit ? "Edit Super Hero" : "Create new Super Hero"}</h1>

            <div className="create_page__input">
                <label>Front Image:</label><br/><input name="frontImg" onChange={event => changeFunc(event)} type="text" defaultValue={props.state.edit ? props.state.superheros[props.state.id].frontImg : null}></input><br/>
                <label>Nickname:</label><br/><input name="nickname"  onChange={event => changeFunc(event)} type="text" defaultValue={props.state.edit ? props.state.superheros[props.state.id].nickname : null}></input><br/>
                <label>Real name:</label><br/><input name="real_name"  onChange={event => changeFunc(event)} type="text" defaultValue={props.state.edit ? props.state.superheros[props.state.id].real_name : null}></input><br/>
                <label>Description:<textarea name="origin_description"  onChange={event => changeFunc(event)} className="create_page__input__large" type="text" defaultValue={props.state.edit ? props.state.superheros[props.state.id].origin_description : null}></textarea></label><br/>
                <label>Superpowers:<textarea name="superpowers"  onChange={event => changeFunc(event)} className="create_page__input__large" type="text" defaultValue={props.state.edit ? props.state.superheros[props.state.id].superpowers : null}></textarea></label><br/>
                <label>Catch phrase:<input name="catch_phrase"  onChange={event => changeFunc(event)} className="create_page__input__large" type="text" defaultValue={props.state.edit ? props.state.superheros[props.state.id].catch_phrase : null}></input></label><br/>
                <label>Images:<textarea name="images" style={{width: "200%"}}  onChange={event => changeFunc(event)} className="create_page__input__large" type="text" defaultValue={props.state.edit ? props.state.superheros[props.state.id].images : null}></textarea></label><br/>
                <div className="create_page__input__buttons">
                <Link to={`/hero/0`}><Button onClick={() => props.state.edit ? props.edit(state) : props.create(state)} type="submit" disabled={!state.nickname.length}>{props.state.edit ? "Edit" : "Create"}</Button></Link>
                    <Link to={`/hero/0`}><Button type="submit">Cancel</Button></Link>
                </div>
                
            </div>
            
        </div>
    )
}

let Create = connect(mapStateToProps, mapDispatchToProps)(CreateComp);

export default Create;