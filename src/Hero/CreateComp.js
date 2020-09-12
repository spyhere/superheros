import React, { useState} from 'react';
import { mapStateToProps, mapDispatchToProps } from '../redux/redux';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function CreateComp(props) {

    const [state, setState] = useState({frontImg: "", nickname: "", real_name: "", origin_description: "", superpowers: "", catch_phrase: "", images: ""})

    let changeFunc = (e) => {
        let stateTemp = {...state};
        stateTemp[e.target.name] = e.target.value;

        if (e.target.name === "images") stateTemp.images = stateTemp.images.split(" ")
        console.log(stateTemp)
        setState(stateTemp);
    }

    return (
        <div className="create_page">
            <h1>Create new SuperHero</h1>

            <div className="create_page__input">
                <label>Front Image:<input name="frontImg" onChange={event => changeFunc(event)} className="create_page__input__large" type="text"></input></label><br/>
                <label>Nickname:<input name="nickname"  onChange={event => changeFunc(event)} type="text"></input></label><br/>
                <label>Real name:<input name="real_name"  onChange={event => changeFunc(event)} type="text"></input></label><br/>
                <label>Description:<input name="origin_description"  onChange={event => changeFunc(event)} className="create_page__input__large" type="text"></input></label><br/>
                <label>Superpowers:<input name="superpowers"  onChange={event => changeFunc(event)} className="create_page__input__large" type="text"></input></label><br/>
                <label>Catch phrase:<input name="catch_phrase"  onChange={event => changeFunc(event)} type="text"></input></label><br/>
                <label>Images:<input name="images"  onChange={event => changeFunc(event)} className="create_page__input__large" type="text"></input></label><br/>
                <Link to={`/hero/0`}><Button onClick={() => props.create(state)} type="submit">Submit</Button></Link>
            </div>
            
        </div>
    )
}

let Create = connect(mapStateToProps, mapDispatchToProps)(CreateComp);

export default Create;