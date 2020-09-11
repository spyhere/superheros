import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { mapStateToProps, mapDispatchToProps } from './redux/redux';
import SuperHero from './Hero/SuperHero';
import EditComp from './Hero/EditComp';
import CreateComp from './Hero/CreateComp';

function Presentational() {
  return (
    <Router>
    <div>
        <Switch>
          <Route path="/hero/:hero" exact component={SuperHero} />
          <Route path="/edit/:hero" exact component={EditComp} />
          <Route path="/create/:hero" exact component={CreateComp} />
        </Switch>
    </div>
    <Home />
    </Router>
  );
}


const Home = (props) => {
  const items = [1,2,3,4,5,6,7,8]

  return (
    <Pagination className="main_pagination" size="sm" aria-label="Page navigation example">
      <PaginationItem>
        <PaginationLink first href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink previous href="#" />
      </PaginationItem>
      {items.map((x,ind) => {
        return (
          <PaginationItem>
            <PaginationLink href="/hero/hero" >
            {ind + 1}
            </PaginationLink>
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

let App = connect(mapStateToProps, mapDispatchToProps)(Presentational);
export default App;
