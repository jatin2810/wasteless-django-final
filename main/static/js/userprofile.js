
    
    var card=document.getElementsByClassName(".card");
    var sold=document.getElementsByClassName(".sold");
    var unsold=document.getElementsByClassName(".unsold");
    var hbut=document.getElementsByClassName(".hbut");
    console.log(card.length);
    // for(var i=0;i<card.length;i++)
    
    card.setAttribute("style","border:1px solid black;opacity:0.2;");
    sold.style.display="block";
    unsold.style.display="block";
    hbut.style.display="none";
    
