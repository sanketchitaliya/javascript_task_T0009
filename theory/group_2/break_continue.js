x="";

for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= 5; j++) {
        if(i==2){break;}
      x+= "*";
    }
    x+="\n";
  }

 console.log(x); 

 for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= 5; j++) {
        if(i==2){continue;}
      x+= "*";
    }
    x+="\n";
  }

 console.log(x); 