function produceDrivingRange(range) {
  return function (pointa,pointb) {
    let distanceToTravel = Math.abs(parseInt(pointb) - parseInt(pointa));
    let difference = range - distanceToTravel;

    if (difference > 0) {
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator(percentage) {
  return function (rideFare) {
    return rideFare * percentage;
  }
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
