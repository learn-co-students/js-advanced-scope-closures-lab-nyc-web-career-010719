function produceDrivingRange (drivingRange) {
  return function (startStreet, endStreet) {
    let start = parseInt(startStreet)
    let end = parseInt(endStreet)
    const travelDistance = Math.abs(end - start)
    const difference = drivingRange - travelDistance
    if (difference > 0) {
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator (tipAmountAsPercent) {
  return function (purchasePrice) {
    return purchasePrice * tipAmountAsPercent
  }
}

function createDriver () {
  let driverId = 1

  return class {
    constructor(name) {
      this.name = name
      this.id = driverId++
    }
  }
}
