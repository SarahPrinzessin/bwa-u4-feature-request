  import React from 'react';
  import './Track.css';


  class Track extends React.Component{
    constructor(props){
      super(props);
      this.addTrack=this.addTrack.bind(this);
      this.removeTrack=this.removeTrack.bind(this);
    }
    addTrack(){
      this.props.track(this.props.onAdd);
    }
    removeTrack(){
      this.props.onRemove(this.props.track);
    }
    renderAction() {
       if (this.props.isRemoval) {
           return <i className="Track-action -"
                     onClick={this.removeTrack}></i>
       }else{
          return <i className="Track-action +"
                    onClick={this.addTrack}></i>
       }
   }
    render() {
      return(
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
          <a className="Track-action">
          onClick={this.addTrack} or onClick={this.removeTrack}</a>
      </div>
      );
    }
  }
  export default Track;
