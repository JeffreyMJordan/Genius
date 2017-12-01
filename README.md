# Prodigy

# An annotatable lyrics website - dedicated to unpacking the meaning behind your favorite songs

Prodigy is a single page web application that hosts annotatable song lyrics. Users can create new songs, annotate lyrics, comment on annotations, and vote for their favorite explanations. Prodigy uses Ruby on Rails for its backend React-Redux for its frontend.  

## Features 

### Annotations 

**Users can add annotations by highlighting song lyrics**
![alt text](https://media.giphy.com/media/l2RnHqBvcUwXLTv6U/giphy.gif) 

Annotations represented the most significant challenge I faced when developing Prodigy. I came up with Prodigy's annotation system by analyzing Genius' API and inspecting how the HTML on Genius' lyrics page changed in response to new annotations. I noticed that when a new annotation was created, Genius wrapped the corresponding lyric in an anchor tag, which allowed them to add click handling to attach multiple annotations to said lyric. 

To create an annotation, Prodigy uses an object called a referent. On the frontend, referents are represented by anchor tags wrapped around specific lyrics according to their start and end indices. Lyrics are built up on the frontend by iterating through a song's stored lyrics, then adding anchor tags at the referent's corresponding start and end indices. These lyrics are added to an array, which is interpolated by React in Prodigy's LyricsDisplay component. 

```javascript
createLyrics(){
    let {startIdxRefs} = this.createIdxRefs();
    let arr = [];
    for(var i = 0; i<this.props.song.lyrics.length; i++){
      let letter = this.props.song.lyrics[i];
      if(startIdxRefs[i]){
        let ref = startIdxRefs[i];
        arr.push(<a key={ref.start_idx} onClick={this.handleClick(ref.id)}>
        {this.props.song.lyrics.slice(ref.start_idx, ref.end_idx)}
        </a>);
        i = ref.end_idx-1;
      }else{
        arr.push(letter);
      }
    }
    return arr;
  }
```

Annotations are attached to their corresponding referent on creation. When clicked, referents fetch their annotations from the database and display them on the lyrics page. 
![alt](https://media.giphy.com/media/xUOxf2VE6VO03k529i/giphy.gif)

To ensure that a referent's start and end indices always reference the same part of a song's lyrics, Prodigy places an invisible layer above the displayed lyrics. Referent creation uses this layer to generate proper start and end indices. After creation, a referent's anchor tag is moved above this invisible layer to allow for clickability. 

### Song Creation

Users can add songs to Prodigy by filling in a song's title, album, artist, and lyrics. Users can also provide an image url to be displayed as the album's thumbnail. Upon song creation, user's are redirected to the song's display page so they can immediately begin annotating. 

![alt](https://media.giphy.com/media/3ohs858xCdd475QUV2/giphy.gif)

On the backend, Prodigy checks to see if the submitted album and artist name are already in its database. If they already exist, Prodigy associates the song with the corresponding album and artist. If the database doesn't contain the album and artist, Prodigy automatically creates these objects for the user. 

```ruby
  def album_name=(album)
    @album_name = Album.find_by_title(album) 
    if @album_name
      self.album_id = @album_name.id 
    else 
      new_album = Album.new({title: album, artist_id: self.artist_id, image_url: @album_image_URL})
      new_album.save 
      self.album_id = Album.last.id
    end 
  end

  def artist_name=(artist)
    @artist_name = Artist.find_by_name(artist)
    if @artist_name
      self.artist_id = @artist_name.id 
    else 
      new_artist = Artist.new({name: artist})
      new_artist.save
      self.artist_id = Artist.last.id
    end 
  end
```

Because Prodigy's landing page displays information from song, album, and artist objects, I used a payload system on the backend to ensure that the necessary information was always received in the state at the same time. 

```ruby
json.array! @songs do |currentSong| 
  json.set! :song do 
    json.partial! "api/songs/song", song: currentSong
  end 
  album = currentSong.album 
  json.set! :album do 
    json.partial! "api/albums/album", album: album
  end 

  artist = currentSong.artist
  json.set! :artist do 
    json.partial! "api/artists/artist", artist: artist
  end 
end
```

For Prodigy's song display page, I also needed to fetch a song's corresponding referents. I met this challenge by altering the existing payload system to include referents. When Prodigy's SongDisplay component mounts, it requests the necessary song information, as well as its associated album, artist, and referents. 

```ruby 
json.set! :song do 
  json.partial! "api/songs/song", song: @song
end 
album = @song.album 
json.set! :album do 
  json.partial! "api/albums/album", album: album
end 

artist = @song.artist
json.set! :artist do 
  json.partial! "api/artists/artist", artist: artist
end 

json.set! :referents do 
  json.array! @song.referents do |ref|
    json.id ref.id
    json.start_idx ref.start_idx
    json.end_idx ref.end_idx
    json.song_id ref.song_id
    json.creator_id ref.creator_id
  end 
end
```

### Comments and Voting 

Users can comment and vote on annotations. Comments are displayed when a user clicks on an annotation. An annotations aggregate upvotes and downvotes are displayed next to its text content. 

![alt text](https://media.giphy.com/media/xUOxfgau93tdav8sTe/giphy.gif)

### Authentication and Security 

To protect its users, Prodigy hashes and salts passwords using BCrypt, then stores the hashed result in its database rather than the plaintext password. This protects users' information even in the event of a database breach. 

## Technologies 
Prodigy is implemented using a model-view-controller architectural pattern. 

### Backend 
* Ruby on Rails 

### Frontend 
* React 
* Redux
