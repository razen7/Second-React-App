function factorialize(num) {
    let result = num;
     
    if (num === 0 || num === 1) 
      return 1; 
   
    while (num > 1) { 
      num--; 
      result = result * num; 
    }
       
    return result; 
  }
  factorialize(5);