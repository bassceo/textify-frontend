function 
computeResult(a, b, 
op) {
    if(op === '+'){
      return(a+b)
    }else if (op === '-') {
      return(a-b);
    }else if (op === '*'){



        
      return(a*b);
    }else{
      return(a/b);
    }
  };
  

export { computeResult };