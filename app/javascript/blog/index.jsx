import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
// import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';
import { reducer as formReducer } from 'redux-form';

import App from './components/app';

import PostsIndex from './containers/posts_index';
import PostsShow from './containers/posts_show';
import PostsNew from './containers/posts_new';

// import '../assets/stylesheets/application.scss';
// import postsReducer from './reducers/posts_reducer';
import flatsReducer from './reducers/flats_reducer';
import selectedFlatReducer from './reducers/selected_flat_reducer';


const reducers = combineReducers({
  flats: flatsReducer,
  selectedFlat: selectedFlatReducer
  // posts: postsReducer,
  // form: formReducer
});

// const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
  <App />
  </Provider>,
  //   <Router history={history}>
  //     <div className="thin-container">
  //       {/* <Switch>
  //         <Route path="/" exact component={PostsIndex} />
  //         <Route path="/posts/new" exact component={PostsNew} />
  //         <Route path="/posts/:id" component={PostsShow} />
  //       </Switch> */}
  //     </div>
  //   </Router>
  document.getElementById('root')
);
