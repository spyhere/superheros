import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { mapStateToProps, mapDispatchToProps } from './redux/redux';
import SuperHero from './Hero/SuperHero';
import Create from './Hero/CreateComp';

function Presentational() {
  return (
    <Router>
    <div>
        <Switch>
          <Route path="/hero/:id" exact component={SuperHero} />
          <Route path="/edit/:id" exact component={Create} />
          <Route path="/create/" exact component={Create} />
        </Switch>
    </div>
    <PaginationComp />
    </Router>
  );
}


const PaginationComponent = (props) => {

  return (
    <Pagination className="main_pagination" size="sm" aria-label="Superheros navigation">
      <PaginationItem>
        <Link to="/hero/0" onClick={() => props.add({id: 0})} >
          <PaginationLink first/>
        </Link>
        
      </PaginationItem>
      <PaginationItem>
        <Link to={props.state.id ? `/hero/${props.state.id-1}` : '/hero/0'} onClick={() => {if (props.state.id) {props.add({id: props.state.id-1})} }} >
          <PaginationLink previous />
        </Link>
        
      </PaginationItem>
      {props.state.superheros.map((x,ind) => {
        if (ind < 5) return (
            <PaginationItem>
              <Link to={`/hero/${ind}`} onClick={() => props.add({id: ind})}>
              <PaginationLink href={"/hero/" + ind } >
              {ind + 1}
              </PaginationLink>
              </Link>
            </PaginationItem>)
       
      })}
      <PaginationItem>
        <Link to={props.state.id < props.state.superheros.length-1 ? `/hero/${props.state.id+1}` : `/hero/${props.state.id}`} onClick={() => {if (props.state.id < props.state.superheros.length-1) {props.add({id: props.state.id+1})} }} >
          <PaginationLink next />
        </Link>
        
      </PaginationItem>
      <PaginationItem>
        <Link to={`/hero/${props.state.superheros.length-1}`} onClick={() => props.add({id: props.state.superheros.length-(props.state.superheros.length ? 1 : 0)})} >
          <PaginationLink last />
        </Link>
      </PaginationItem>
    </Pagination>
  );
}

let PaginationComp = connect(mapStateToProps, mapDispatchToProps)(PaginationComponent);

let App = connect(mapStateToProps, mapDispatchToProps)(Presentational);
export default App;
