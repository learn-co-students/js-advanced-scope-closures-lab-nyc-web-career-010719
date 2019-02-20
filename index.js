function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    let blockCount = parseInt(endBlock) - parseInt(startBlock);
    if (blockCount > blockRange) {
      return `${blockCount - blockRange} blocks out of range`;
    } else {
      return `within range by ${blockRange - blockCount}`;
    };
  };
};

function produceTipCalculator(percentage) {
  return function(bill) {
    return percentage * bill;
  };
};

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++ driverId;
    };
  };
};
