import AllMeetupsPage from "./pages/AllMeetupsPage";
import NewMeetupPage from "./pages/NewMeetupPage";
import FavoritesPage from "./pages/FavoritesPage";
import { Route, Switch } from 'react-router-dom';
import MainNavigation from "./components/layout/MainNavigation";

import classes from './components/layout/MainNavigation.module.css';
function App() {


  return (
    <div className={classes.divcontainer}>
      <MainNavigation/>
      <Switch>
        <Route path='/' exact>
          <AllMeetupsPage/>
        </Route>

        <Route path='/new-meetup'>
          <NewMeetupPage/>
        </Route>

        <Route path='/favorites'>
          <FavoritesPage/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
