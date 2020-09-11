import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { mapStateToProps, mapDispatchToProps } from './redux/redux';
import SuperHero from './Hero/SuperHero';
import Edit from './Hero/EditComp';
import CreateComp from './Hero/CreateComp';

function Presentational() {
  return (
    <Router>
    <div>
        <Switch>
          <Route path="/hero/:id" exact component={SuperHero} />
          <Route path="/edit/:id" exact component={Edit} />
          <Route path="/create/:hero" exact component={CreateComp} />
        </Switch>
    </div>
    <Home />
    </Router>
  );
}


const HomeComp = (props) => {

  return (
    <Pagination className="main_pagination" size="sm" aria-label="Page navigation example">
      <PaginationItem>
        <PaginationLink first href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink previous href="#" />
      </PaginationItem>
      {props.state.superheros.map((x,ind) => {
        if (ind < 5) return (
            <PaginationItem>
              <Link to={`/hero/${ind}`}>
              <PaginationLink href="/hero/hero" >
              {ind + 1}
              </PaginationLink>
              </Link>
            </PaginationItem>)
       
      })}
      <PaginationItem>
        <PaginationLink next href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink last href="#" />
      </PaginationItem>
    </Pagination>
  );
}

let Home = connect(mapStateToProps, mapDispatchToProps)(HomeComp);

let App = connect(mapStateToProps, mapDispatchToProps)(Presentational);
export default App;
