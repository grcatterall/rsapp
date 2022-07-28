const FormatUserData = (data) => {
  const other = {
      'Clue Scrolls Total': data.bountyHunter,
      'Easy Clue Scroll': data.hardClueScrolls,
      'Medium Clue Scroll': data.lastManStanding,
      'Hard Clue Scroll': data.eliteClueScrolls,
      'Elite Clue Scroll': data.clueScrolls,
      'Master Clue Scroll': data.masterClueScrolls,
      'Lastman Standing': data.easyClueScrolls,
      'Bounty Hunter': data.easyClueScrolls,
      'Bounty Hunter Rogues': data.mediumClueScrolls,
    };
    const overallData = data.overall;
    //If object isn't a skill, remove it from the list
    Object.keys(data).map(function(key){
      !(data[key].level) &&
        delete data[key];
    });

    Object.keys(data).map(function(key){
      if(data[key].experience){  
        if(data[key].experience == -1){
          data[key].experience = 0;
        }
      }
    });
    
    Object.keys(other).map(function(key){
      if (typeof other[key] !== 'undefined') {
        (other[key].rank == -1) &&
          delete other[key];

        other[key] = {...other[key], name: key};
      }
    })
    Object.keys(data).map(function(key){
      if(data[key].rank == -1)
        data[key].rank = 'N/A';
    })
    Object.keys(data).map(function(key){
      data[key] = {...data[key], skillName: key.charAt(0).toUpperCase() + key.slice(1), skillKey: key};
    });
    delete data['overall'];

    data = Object.values(data);

    return {
      'skills': data,
      'other': other
    };
}

export default FormatUserData;