const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records,id,prop,value){
  let copyOfRecords = {...records};
  if(value === ""){
    delete copyOfRecords[id][prop];
  } else if(prop !== 'tracks' && value !== ""){
    copyOfRecords[id][prop] = value;
  } else if(prop === 'tracks' && value !== ""){
    if(copyOfRecords[id].hasOwnProperty('tracks') === false){
      copyOfRecords[id][prop] = [value];
    }else{
      copyOfRecords[id][prop].push(value);
    }
  }

  console.log(copyOfRecords)
  return copyOfRecords;
}





