function evalInput(input) {
  const regex = /([\d\-]+\s*\*\s*[\d.\-]+)/;
  
  let match;
  while ((match = regex.exec(input))) {
    let nums = match[0].split(/[* ]+/).map(m => +m);
    let result = nums[0] * nums[1];
    input = input.replace(match[0], result);
  }
  
  return input;
}

console.log(evalInput('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).'));