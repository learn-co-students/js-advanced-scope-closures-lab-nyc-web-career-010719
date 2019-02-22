function produceDrivingRange(blockRange) {
  return function(startingBlock, endingBlock){
    let start = parseInt( startingBlock );
    let end = parseInt( endingBlock );

    let distance = Math.abs(end - start)
    if (distance > blockRange ) {
      let difference = Math.abs(distance - blockRange)
      return `${difference} blocks out of range`
    } else if (blockRange > distance){
      let diff = Math.abs(blockRange - distance)
      return `within range by ${diff}`
    }
  }
}

function produceTipCalculator(tipPercent) {
  return function (fare) {
    return fare * tipPercent
  }
}

function createDriver(name) {
  let driverId = 0
  return class Driver {
    constructor(name) {
      this.id = ++driverId
      this.name = name
    }
  }
}
