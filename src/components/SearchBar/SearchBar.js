import React from 'react';
import './SearchBar.css';

export class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {term:'',location:'', sortBy:'best_match'}
        this.sortByOptions = {'Best Match': 'best_match', 'Highest Rated': 'rating', 
'Most Reviewed': 'review_count'};
        this.getSortByClass = this.getSortByClass.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this)
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleSortByChange = this.handleSortByChange.bind(this)
        this.handleSearch = this.handleSearch.bind(this);
    }

    getSortByClass(sortByOption){
        return this.state.sortBy === sortByOption ? 'active' : '';
    }

    handleTermChange(e) {
        this.setState({term: e.target.value})
    }

    handleLocationChange(e) {
        this.setState({location: e.target.value})
    }

    handleSortByChange(sortByOption) {
        this.setState({sortBy: sortByOption});
    }

    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return <li onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
             className={this.getSortByClass(sortByOptionValue)} 
             key={sortByOptionValue}>{sortByOption}</li>
        });
    }

    handleSearch(e){
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy)
        e.preventDefault();
    }
    render() {
        return (
            <div className="SearchBar">
                <h2 id="hero-title">Find the right business for you</h2>
                <div className="SearchBar-sort-options">
                    <ul>
                    {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input onChange={this.handleTermChange} placeholder="Search Businesses" />
                    <input onChange={this.handleLocationChange} placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <button onClick={this.handleSearch}>Let's Go</button>
                </div>
            </div>
        );
    }
}
