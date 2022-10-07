function getHazardousAsteroids(data){
    var hazardous_asteroids = 0;
    for(let j in data){
        for(let i = 0; i < data[j].length;i++){
            if(data[j][i]['is_potentially_hazardous_asteroid'] === true){
                hazardous_asteroids ++;
            }
        }
    }
    return hazardous_asteroids;
}