
/*---------------------------------------------------------------------------*/
function editDistance(s1, s2) {
  
    var costs = new Array();
    for (var i = 0; i <= s1.length; i++) {
      var lastValue = i;
      for (var j = 0; j <= s2.length; j++) {
        if (i == 0)
          costs[j] = j;
        else {
          if (j > 0) {
            var newValue = costs[j - 1];
            if (s1.charAt(i - 1) != s2.charAt(j - 1))
              newValue = Math.min(Math.min(newValue, lastValue),
                costs[j]) + 1;
            costs[j - 1] = lastValue;
            lastValue = newValue;
          }
        }
      }
      if (i > 0)
        costs[s2.length] = lastValue;
    }
    return costs[s2.length];
  }

function similarity(s1, s2) {
    var longer = s1;
    var shorter = s2;
    if (s1.length < s2.length) {
      longer = s2;
      shorter = s1;
    }
    var longerLength = longer.length;
    if (longerLength == 0) {
      return 1.0;
    }
    return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
  }
  



function showall()
{
  var notavail=document.querySelector(".notavail");
  notavail.style.display="none";
  ul = document.querySelector(".pro");
    
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++)
    {
        li[i].style.display="block";
    }
}




function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    let c=0;
var notavail=document.querySelector(".notavail");
notavail.style.display="none";
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.querySelector(".pro");
    
    li = ul.getElementsByTagName("li");
    

    for (i = 0; i < li.length; i++) {
        a = li[i].children[0].children[1].children[0].innerText;
        let simi= similarity(a.toUpperCase(), filter);
        simi =simi * 100;
              
        if(simi>40){
            li[i].style.display="block";
            c=c+1;

            }
            else{

              li[i].style.display="none";
            }   
        


        }
        if(c===0)
        {
          
         notavail.style.display="block";
        }
         
    }
    
     
     
        
    

function helper()
    {
    if(event.keyCode == 13)
        myFunction();
    }
document.addEventListener('keydown',helper);