const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce((init, batches) => batches + init , 0);

console.log(totalBatteries);
