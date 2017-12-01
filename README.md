# Prodigy

# An annotatable lyrics website - dedicated to unpacking the meaning behind your favorite songs

Prodigy is a single page web application that hosts annotatable song lyrics. Users can create new songs, annotate lyrics, comment on annotations, and vote for their favorite explanations. Prodigy uses Ruby on Rails for its backend React-Redux for its frontend.  

## Features 

### Annotations 

**Users can add annotations by highlighting song lyrics**
![alt text](https://media.giphy.com/media/l2RnHqBvcUwXLTv6U/giphy.gif) 

To create an annotation, Prodigy uses an object called a referent. On the frontend, referents are represented by anchor tags wrapped around specific lyrics according to their start and end index.

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
