export default function (state = {}, action) {
  switch (action.type) {
    case "SELECTED_SONG":
      return {
        ...state,
        selectedSong: action.payload,
      };
    case "LIKED_SONG":
      return {
        ...state,
        likedSong: true,
        listOfLikedSongs: state.listOfLikedSongs.concat(action.payload),
      };
    case "UNLIKED_SONG":
      const songToRemove = state.listOfLikedSongs.findIndex(
        (name) => name === action.payload
      );
      return {
        ...state,
        likedSong: false,
        listOfLikedSongs: [
          ...state.listOfLikedSongs.slice(0, songToRemove),
          ...state.listOfLikedSongs.slice(songToRemove + 1),
        ],
      };
    case "LOAD_USER":
      return {
        ...state,
        username: action.payload,
      };
    case "ADD_PLAYLIST":
      return {
        ...state,
        playlists: [...state.playlists.concat(action.payload)],
      };
    case "ADD_SONG_TO_PLAYLIST":
      const playlistIndex = state.playlists.findIndex(
        (obj) => obj.name === action.payload.playlistName
      );
      let selectedPlaylist = state.playlists[playlistIndex];
      console.log(selectedPlaylist);
      console.log(selectedPlaylist.songs);
      selectedPlaylist.songs.push(action.payload.songName);
      console.log(selectedPlaylist);
      return {
        ...state,
        playlists: [
          ...state.playlists.slice(0, playlistIndex),
          ...state.playlists.slice(playlistIndex + 1),
          selectedPlaylist,
        ],
      };
    default:
      return state;
  }
}
