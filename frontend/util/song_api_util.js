export const fetchSongs = () => {
  return $.ajax({
    method: "GET",
    url: "api/songs"
  });
};

export const fetchSongsByAlbumId = (id) => {
  return $.ajax({
    method: "GET", 
    url: "api/songs_by_album",
    data: {id: id}
  });
};

export const fetchSong = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/songs/${id}`
  });
};

export const createSong = (song) => {
  return $.ajax({
    method: "POST",
    url: `api/songs`,
    data: {song: song}
  });
};

export const deleteSong = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `api/songs/${id}`
  });
};