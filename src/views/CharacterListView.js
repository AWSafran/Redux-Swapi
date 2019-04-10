import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getData } from '../actions'

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log(this.props);
    //console.log(this.props);
    //console.log("calling getData");
    this.props.getData();
  }

  render() {
    console.log(this.props);
    if (this.props.fetching) {
      console.log("still fetching");
    }
    return (
      <div className="CharactersList_wrapper">
        {this.props.fetching && <div>LOADING...</div>}
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state =>({
  characters: state.charsReducer.characters,
  fetching: state.charsReducer.isFetching
});


// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {
    getData
  }
)(CharacterListView);
