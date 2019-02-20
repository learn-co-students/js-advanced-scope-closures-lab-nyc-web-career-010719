function produceDrivingRange(blockRange) {
  return function(startPoint, endPoint) {
    let start = parseInt(startPoint)
    let end = parseInt(endPoint)
    let distanceToTravel = Math.abs( end - start );
    let difference = blockRange - distanceToTravel;

    if (difference > 0) {
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator(tip) {
  return function(tipMultiplier) {
    return tipMultiplier * tip;
  };
}

function createDriver() {
  let driverId = 0
  return class {
    constructor(name) {
      this.id = ++driverId
      this.name = name
    }
  }
}
