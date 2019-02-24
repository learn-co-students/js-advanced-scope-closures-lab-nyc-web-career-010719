function produceDrivingRange(blockRange) {
  return function(start, end) {
    start = parseInt(start)
    end = parseInt(end)
    blockRange = parseInt(blockRange)
    let distance = Math.abs((end) - (start));
    if (distance > blockRange){
      return `${distance - blockRange} blocks out of range` }
    else {
      return `within range by ${blockRange - distance}`
    }
  }
}


function produceTipCalculator(percentage) {
  return function(fare) {
  return fare * percentage;
  }
}

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
    this.name = name;
    this.id = driverId++;
    }
  }
}
