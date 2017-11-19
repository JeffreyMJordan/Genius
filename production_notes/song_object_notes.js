//Maybe the song object could just contain all the referents 
//The song lyrics could be built up on the page using the referent fragments 
//Referents with no annotations could be wrapped in an empty referent
//Still no idea on how to enable highlighting and referent creation...
//On the real Genius, completely un-annotated songs are just plain text
//Once annotated, they're wrapped in an anchor tag representing the referent

//Actually, I don't think blank referents are a good idea
//So we could go through the song, adding referent components through event listeners
//Then once we add a referent component, we re-render the song 
//The lyrics could be built up by iterating through the lyrics text and adding referent components 
//in accordance with their associated fragments
//I worry that this might end up kinda slow though...


const song = {
    referents: ["Array of a song's associated referents"],
    artist_id: "self-explanatory",
    album_id: "self-explanatory",
    lyrics: "Text of the song's lyrics"
};