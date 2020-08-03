console.log('hi buyer');

let lists = document.getElementsByClassName('card');
let array = Array.from(lists);
array.forEach(docs => docs.addEventListener('click',swoosh));


/*THESE ARE PRODUCT DESC VARIABLS*/
let bar;
let butt;
let cancel;
let details;
/*EOS*/
function swoosh()
    {
     
    console.log(this);

    let name = this.getElementsByClassName('good')[0];
    name = name.innerText;


    let price = this.getElementsByTagName('p')[1];
    price = price.innerText;

    let search = document.getElementsByClassName('search')[0];
    search.style.display = 'none';

    let desc = this.getElementsByClassName('description')[0];
    desc = desc.innerText;


    let parent = document.getElementsByClassName('cardscontain')[0];
    let rem = document.getElementsByClassName('pro')[0];
    rem.style.display = 'none';
    parent.removeAttribute('class');
    parent.setAttribute('class','container');
    const vaibhav = 
    '           <div class="row">           '  + 
    '           <div class="pdleft col-md-6">  '  + 
    '                           <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">  '  + 
    '                                   <ol class="carousel-indicators">  '  + 
    '                                     <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>  '  + 
    '                                     <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>  '  + 
    '                                     <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>  '  + 
    '                                   </ol>  '  + 
    '                                   <div class="carousel-inner">  '  + 
    '                                     <div class="carousel-item active">  '  + 
    '                                       <img src="images/1.png" class="d-block w-100" alt="...">  '  + 
    '                                     </div>  '  + 
    '                                     <div class="carousel-item">  '  + 
    '                                       <img src="images/2.png" class="d-block w-100" alt="...">  '  + 
    '                                     </div>  '  + 
    '                                     <div class="carousel-item">  '  + 
    '                                       <img src="images/3.png" class="d-block w-100" alt="...">  '  + 
    '                                     </div>  '  + 
    '                                   </div>  '  + 
    '                                   <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">  '  + 
    '                                     <span class="carousel-control-prev-icon" aria-hidden="true"></span>  '  + 
    '                                     <span class="sr-only">Previous</span>  '  + 
    '                                   </a>  '  + 
    '                                   <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">  '  + 
    '                                     <span class="carousel-control-next-icon" aria-hidden="true"></span>  '  + 
    '                                     <span class="sr-only">Next</span>  '  + 
    '                                   </a>  '  + 
    '                                 </div>  '  + 
    '                    </div>  '  + 
    '                    <div class="pdright col-md-6">  '  + 
    '                           <div class="row">  '  + 
    '                                   <div class="col-md-12">  '  + 
    `                                    <h2>${name}`  + 
    '                       </div>  '  + 
    '                   </div>  '  + 
    '                   <br>  '  + 
    '                           <div class="row proddes">  '  + 
    '                                       <div class="col-md-12">  '  + 
    '                                        <p class="description">  '  + 
    `                                         ${desc}  `  + 
    '                                         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi saepe cumque maiores accusantium, ullam voluptate beatae iste dolor a aut rerum vitae quas eius qui et magnam dolore soluta id.  '  + 
    '                                        </p>  '  + 
    '                               </div>  '  + 
    '                           </div>  '  + 
    '                           <br>  '  + 
    '                           <div class="row prodprice">  '  + 
    '                               <div class="col-md-12 bottom-rule">  '  + 
    `                                            <h3 class="product-price" style="color:green;font-size:1.2em;">${price}</h3>  `  + 
    '                               </div>  '  + 
    '                           </div>  '  + 
    '                    </div>   '  + 
    '                    <div class="productbutt">  '  + 
    '                                '  + 
    '                       <button type="button" class="btn btn-primary buy">Buy Now</button>  '  + 
    '                             '  + 
    '                       </div>  ';
    parent.innerHTML = vaibhav;
    bar = document.getElementsByClassName('productbutt')[0];
    butt = document.getElementsByClassName('buy')[0];
    cancel = document.createElement('button');
    cancel.setAttribute('class','btn btn-danger');
    cancel.innerText = 'Cancel Request';
    details = document.createElement('button');
    details.setAttribute('class','btn btn-info');
    details.innerText = 'Contact Seller';
    butt.addEventListener('click',removeMe);
    details.addEventListener('click',giveDetails);
    }

function loadUp()
    {
    console.log('in');
    let xhr = new XMLHttpRequest;
    xhr.onreadystatechange = function()
        {
        if(this.readyState =='4' && this.status=='200')
            {
            let allProds = JSON.parse(this.response);
            console.log(allProds);
            allProds = allProds.products;
            /*ANALYZING OBJECTS AND RENDERING*/
            let board = document.getElementsByClassName('pro')[0];
            allProds.forEach(docs => {
            let yo = document.createElement('li');

            let yummy = document.createElement('div');
            yummy.setAttribute('class','card');

            let temp = document.createElement('div');
            temp.setAttribute('class','prodImage');

            let dummy = document.createElement('img');
            dummy.setAttribute('class','imag');
            dummy.setAttribute('src','https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1553012500-gallery-1506368644-agncxs-1553012494.png')
            
            
            temp.appendChild(dummy);
            yummy.appendChild(temp);

            temp = document.createElement('div');
            temp.setAttribute('class','description');

            dummy = document.createElement('p');
            dummy.setAttribute('class','good');

            dummy.innerText = `${docs.name}`;
            temp.appendChild(dummy);
            dummy.innerText = `${docs.price}`;
            dummy.style = 'font-size:12px;color:green;'


            temp.appendChild(dummy);
            yummy.appendChild(temp);
            
            let description = document.createElement('p');
            description.style.display = 'none';
            description.innerText = `${docs.description}`;
            description.setAttribute('class','description');
            yummy.appendChild(description);
            yo.appendChild(yummy);
            });
            }
        }
    xhr.open("GET","http://localhost:3000/api/v1/allproducts");
    xhr.send();
    }

/*PRODUCT DESCRIPTION JS*/



function removeMe()
    {
    bar.appendChild(cancel);
    bar.append(details);
    bar.removeChild(butt);
    }
function giveDetails()
    { 
    bar.removeChild(cancel);
    let number = document.createElement('div');
    number.setAttribute('class','set');
    number.innerHTML = 'Name: ::NAME:: <br/> Number: ::+91 1234567890::';
    bar.removeChild(details);
    bar.appendChild(number);
    }
