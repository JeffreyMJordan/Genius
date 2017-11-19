//NOTE: This is a mockup for a potential referent object. 
//This is a js file because the syntax highlighting makes things easier to read. 


//It seems like references are displayed by wrapping an anchor tag around the correspoding lyric fragment
//I'm not sure how I can construct this. I think I might build the components by wrapping
//a referent component around a lyric component. 

const referent = {
    fragment: "This is the lyric snippet that the referent is attached to",
    annotator_id: "The user_id who created the referent",
    song_id: "ID of the song the referent is attached to",
    annotation: ["An array containing associated annotation objects"]
};