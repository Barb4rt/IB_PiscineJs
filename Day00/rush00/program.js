function sun(buildings, direction){
    direction = direction.toLowerCase()
    console.log(direction);
    if (direction !== "ouest" && direction !== "est" ) {
        return "Choisissez entre Est ou Ouest"
    }
    if(direction === "est"){
        buildings = buildings.reverse()
    }
    let result = []
    let maxHeight = 0
    for (let index = 0; index < buildings.length; index++) {
        if(buildings[index] < 0 || !Number.isInteger(buildings[index])){
            return "Le tableau contient des nombres négatifs ou décimals"
        }
        if (buildings[index] > maxHeight) {
            maxHeight = buildings[index]
            result.push(index)
        }
    }
    return result
}
exports.sun = sun ;
