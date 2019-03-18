  import React from 'react';
  import './App.css';
  import SearchBar from '../SearchBar/SearchBar';
  import SearchResults from '../SearchResults/SearchResults';
  import PlayList from '../PlayList/PlayList';
  import Spotify from '../../util/Spotify';

  class App extends React.Component {

    constructor(props){
      super(props);
      this.state= {
        searchResults :[],
        playlistName :' playlist 1',
        playlistTracks : []
      }
        this.addTrack=this.addTrack.bind(this);
        this.removeTrack=this.removeTrack.bind(this);
        this.updatePlaylistName=this.updatePlaylistName.bind(this);
        this.savePlaylist=this.savePlaylist.bind(this);
        this.serach=this.search.bind(this);
    }
    addTrack(track){
      let tracks;
      if (this.state.playlistTracks.find(savedTrack =>
          savedTrack.id === track.id)) {
          return;
      } else {
          tracks.push(track);
          this.setState({playlistTracks : tracks})
      }
    }

    removeTrack(track){
      let tracks;
      if (this.state.playlistTracks.find(savedTrack =>
          savedTrack.id === track.id)) {
          return;
      } else {
          tracks.push(track);
          this.setState({playlistTracks : tracks})
      }
    }
    updatePlaylistName(name){
      this.setState({playlistName : name})
    }
    savePlaylist(){
      const trackURIs = this.state.playlistTracks.map(track => track.uri);
      Spotify.savePlaylist(this.state.playlistName, trackURIs).then(() => {
      this.setState({
        playlistName: ' Playlist 1',
        playlistTracks: []
      });
    });
  }

    search(term){
      Spotify.search(term).then(searchResults => {
      this.setState({ searchResults: searchResults })
      });
    }
    render() {
      return (
        <div>
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
            <div className="App">
              <SearchBar onSearch = {this.search}/>
            <div className = "App-playlist">
              <SearchResults searchResults = {this.state.searchResults}
                             onAdd = {this.addTrack}/>
              <PlayList palylistName={this.list.playlisName}
                        playlistTracks={this.this.palylistTracks}
                        onRemove = {this.removeTracks}
                        onNameChange={this.updatePlaylistName}
                        onSave={this.savePlaylist}/>
            </div>
          </div>
        </div>
      );
    }
  }

  export default App;
