let wish = document.createElement("h1");



wish.style.cssText = "background-color:#FFFFFF; height:10%;"

let contentContainer = document.createElement("div");



wish.setAttribute("id", "contentContainer");

let mainContainer = document.createElement("div");

mainContainer.append(contentContainer);





mainContainer.setAttribute("id", "flagdesign");

mainContainer.setAttribute("class", "container-flex");






let chakara = document.createElement("img");

chakara.setAttribute("src", "./Ashoka_Chakra1.png");

chakara.setAttribute("alt", "Ashoka_Chakra");



chakara.style.cssText = "position:absolute;top:54%;left:50%;transform:translate(-50%,-50%);"









var vnumber10 = document.createElement('div');

vnumber10.style.cssText = "background-color:#FF9933; height:10%;";


var vnumber9 = document.createElement('div');

vnumber9.style.cssText = "background-color:#FF9933; height:10%;";


var vnumber8 = document.createElement('div');

vnumber8.style.cssText = "background-color:#FF9933; height:10%;";


var vnumber7 = document.createElement('div');

vnumber7.style.cssText = "background-color:#FFFFFF; height:224px;";

var vnumber6 = document.createElement('div');

vnumber6.style.cssText = "background-color:#FFFFFF; height:30%;";


var vnumber5 = document.createElement('div');

vnumber5.style.cssText = "background-color:#FFFFFF; height:30%;";



var vnumber4 = document.createElement('div');

vnumber4.style.cssText = "background-color:#138808; height:10%;";


var vnumber3 = document.createElement('div');

vnumber3.style.cssText = "background-color:#138808; height:10%;";


var vnumber2 = document.createElement('div');

vnumber2.style.cssText = "background-color:#138808; height:10%;";


var vnumber1 = document.createElement('div');

vnumber1.style.cssText = "background-color:#138808; height:10%;position:abosulte;top:0%;left:0;";









setTimeout(() => {
  wish.innerText = "10";
  contentContainer.append(wish);
  document.body.append(contentContainer);
  document.body.append(vnumber10);
  console.log("10");
  setTimeout(() => {
    wish.innerText = "9";
    document.body.append(vnumber9);
    console.log("9");
    setTimeout(() => {
      wish.innerText = "8";
      document.body.append(vnumber8);
      console.log("8");
      setTimeout(() => {
        wish.innerText = "7";
        document.body.append(vnumber7);
        console.log("7");
        setTimeout(() => {
          wish.innerText = "6";
        
          console.log("6");
          setTimeout(() => {
            wish.innerText = "5";
           
            console.log("5");
            setTimeout(() => {
              wish.innerText = "4";
              document.body.append(vnumber4);
              console.log("4");
              setTimeout(() => {
                wish.innerText = "3";
                console.log("3");
                document.body.append(vnumber3);
                setTimeout(() => {
                  wish.innerText = "2";
                  console.log("2");
                  document.body.append(vnumber2);
                  setTimeout(() => {
                    wish.innerText = "1";

                    console.log("1");
                    setTimeout(() => {

                      wish.innerHTML = "Happy Independence Day";


                      console.log("Happy Independence Day");

                      document.body.append(mainContainer);

                      document.body.append(chakara);

                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);