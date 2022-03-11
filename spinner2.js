let printSpinner = ['\r|   ','\r/   ','\r-   ','\r\\   ','\r|   \n'];

const spinAnimate = function(){
let timer = 100;
  for(let i = 0; i < printSpinner.length; i++) {

    setTimeout(()=>{
      process.stdout.write(printSpinner[i]);
    }, timer+= 200);
  }
}

spinAnimate();