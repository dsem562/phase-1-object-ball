function gameObject ()  {
    gameStats = {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                'Alan Anderson': {number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1},
                'Reggie Evans': {number: 30, shoe: 14, points: 12, rebounds: 12, assists: 12, steals: 12, blocks: 12, slamDunks: 7},
                'Brook Lopez': {number: 11, shoe: 17, points: 17, rebounds: 19, assists: 10, steals: 3, blocks: 1, slamDunks: 15},
                'Mason Plumlee': {number: 1, shoe: 19, points: 26, rebounds: 12, assists: 6, steals: 3, blocks: 8, slamDunks: 5},
                'Jason Terry': {number: 31, shoe: 15, points: 19, rebounds: 2, assists: 2, steals: 4, blocks: 11, slamDunks: 1}
            }
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {
                'Jeff Adrien': {number: 4, shoe: 18, points: 10, rebounds: 1, assists: 1, steals: 2, blocks: 7, slamDunks: 2},
                'Bismak Biyombo': {number: 0, shoe: 16, points: 12, rebounds: 4, assists: 7, steals: 7, blocks: 15, slamDunks: 10},
                'DeSagna Diop': {number: 2, shoe: 14, points: 24, rebounds: 12, assists: 12, steals: 4, blocks: 5, slamDunks: 5},
                'Ben Gordon': {number: 8, shoe: 15, points: 33, rebounds: 3, assists: 2, steals: 1, blocks: 1, slamDunks: 0},
                'Brendan Haywood': {number: 33, shoe: 15, points: 6, rebounds: 12, assists: 12, steals: 22, blocks: 5, slamDunks: 12}
            }
        }
    }

    return gameStats;
};

function numPointsScored (playerName) {
    let game = gameObject();
    for (let gameKey in game) {
      let playerObj = game[gameKey].players[playerName];
      for (let stats in playerObj) {
        let score = playerObj.points
        return score;
      }
    }
}

function shoeSize (playerName) {
    let game = gameObject();
    for (let gameKey in game) {
      let playerObj = game[gameKey].players[playerName];
      for (let stats in playerObj) {
        let shoeSize = playerObj.shoe
        return shoeSize;
      }
    }
}

function teamColors (nameOfTeam) {
    let game = gameObject();
    for (let gameKey in game) {
      let teamObj = game[gameKey];
      if (teamObj.teamName === nameOfTeam) {
        return teamObj.colors
      }
    }
}

function teamNames () {
    let game = gameObject();
    let teams = [];
      for (let gameKey in game) {
        let teamObj = game[gameKey];
        teams.push(teamObj.teamName)        
      }
    return teams;
  }

function playerNumbers (teamName) {
    let game = gameObject();
    let jerseys = [];
      for (let gameKey in game) {        
        let teamObj = game[gameKey].teamName;       
        let playerObj = game[gameKey].players;
        if (teamObj === teamName){
          for (let player in playerObj)
          jerseys.push(playerObj[player].number); 
        }
      }
    return jerseys;
}

function playerStats (playerName) {
    let game = gameObject();    
      for (let gameKey in game) {             
        let playersObj = game[gameKey].players;
        for (let player in playersObj){         
          if (player === playerName) {
            return playersObj[player]            
          }
        }     
      }
}

function bigShoeRebounds () {
    let shoeSizes = [];
    let largest = 0; 
        let game = gameObject();    
          for (let gameKey in game) {             
            let playersObj = game[gameKey].players;
            for (let player in playersObj){
              shoeSizes.push(playersObj[player].shoe)        
              for (i = 0; i <= largest; i++) {
                if (shoeSizes[i] > largest) {             
                  largest = shoeSizes[i];           
                }
              }
            }
          }  
      return findRebound(largest);
    }
    
function findRebound (shoeSize) {
    let rebounds;
    let game = gameObject();
    for (let gameKey in game) {             
        let playersObj = game[gameKey].players;
        for (let player in playersObj) {          
            if (shoeSize === playersObj[player].shoe) {
                rebounds = playersObj[player].rebounds;
            }
        }
        }  
    return rebounds;
}