function distanceFromHqInBlocks(pickup_location) {
    let headquarters_location = 42;
    let distance_in_blocks = Math.abs(pickup_location - headquarters_location);
    return distance_in_blocks;
  }
  
  function distanceFromHqInFeet(pickup_location) {
    let distance_in_blocks = distanceFromHqInBlocks(pickup_location);
    let distance_in_feet = distance_in_blocks * 264;
    return distance_in_feet;
  }
  
  function distanceTravelledInFeet(start_block, destination_block) {
    let distance_in_blocks = Math.abs(destination_block - start_block);
    let distance_in_feet = distance_in_blocks * 264;
    return distance_in_feet;
  }
  
  function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
  
    
    if (distance <= 400) {
      return 0; 
    } else if (distance > 400 && distance <= 2000) {
        let fare = (distance - 400) * 0.02; 
      return fare;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
  
  let pickup_location = 50;
  console.log(distanceFromHqInBlocks(pickup_location));  
  console.log(distanceFromHqInFeet(pickup_location));  
  
  let start_block = 34;
  let destination_block = 38;
  console.log(distanceTravelledInFeet(start_block, destination_block)); 
  
  start_block = 34;
  destination_block = 38;
  console.log(calculatesFarePrice(start_block, destination_block));  
  
  start_block = 34;
  destination_block = 44;
  console.log(calculatesFarePrice(start_block, destination_block)); 
  
  start_block = 34;
  destination_block = 56;
  console.log(calculatesFarePrice(start_block, destination_block));  
  
  start_block = 34;
  destination_block = 75;
  console.log(calculatesFarePrice(start_block, destination_block));  
  