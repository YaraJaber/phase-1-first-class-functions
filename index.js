function receivesAFunction(callback) {
    callback();
  }

  function returnsANamedFunction() {
    function namedFunction() {
    }
    return namedFunction;
  }

  function returnsAnAnonymousFunction() {
    return function() {
    };
  }

  receivesAFunction(() => {
    console.log('Callback function called!');
  });
  
  const namedFunc = returnsANamedFunction();
  console.log(namedFunc); 
  
  const anonymousFunc = returnsAnAnonymousFunction();
  console.log(anonymousFunc);