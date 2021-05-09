// Personalized version of Ravenous from codecademy
import React from 'react';
import './App.css';
import { BusinessList } from '../BusinessList/BusinessList';
import { SearchBar } from '../SearchBar/SearchBar';
import { Yelp } from '../../util/Yelp';


export default class App extends React.Component{
    constructor(props){
      super(props);
      this.state = {businesses:[], loading: false}
      this.searchYelp = this.searchYelp.bind(this);
    }
    searchYelp(term, location, sortBy) {
      this.setState({loading: true})
      Yelp.search(term, location, sortBy).then(businesses => {
        this.setState({businesses: businesses, loading: false})
      });
    }
    render() {
      return (
        <div className="App">
          <h1>Ravenous</h1>
          <SearchBar searchYelp={this.searchYelp}/>
          <h2 id="search-results-heading">Search Results</h2>
          <BusinessList businesses={this.state.businesses} loading={this.state.loading}/>
    </div>
      );
    }
}
