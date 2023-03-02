
const menulist = [
    {
    "category" : "Pares",
    "menulist" : [
        {   "menuid": "p1",
            "img_url": "../asset/menupictures/beefp+friedrice.jpg",
            "name":"Q’s Classic Beef Pares w/ Garlic Fried rice ",
            "price": 130,
            "Description": "Beef Pares + Garlic Fried Rice + Soup",
            "rating": 5
        },
        {
            "menuid": "p2",
            "img_url": "../asset/menupictures/beefp+rice.jpg",
            "name":"Q’s Classic Beef Pares w/ rice ",
            "price": 120,
            "Description": "Beef Pares + Rice+ Soup",
            "rating": 3
        },
        {
            "menuid": "p3",
            "img_url": "../asset/menupictures/beefp+mami.jpg",
            "name":"Q’s Classic Beef pares w/ Mami  ",
            "price": 110,
            "Description": "Beef Pares + Special Mami",
            "rating": 3
        }
    ]
    },
    
    {
        "category" : "Rice Meals ",
        "menulist" : [
            {
                "menuid": "r1",
                "img_url": "../asset/menupictures/breadedPC+Rice.jpg",
                "name":"Q’s Porkchop with Veggies ",
                "price": 130,
                "Description": "Breaded Porkchop + Rice + Veggies",
                "rating": 3
            },
            {
                "menuid": "r2",
                "img_url": "../asset/menupictures/sisig+rice+egg.jpg",
                "name":"Q’s Sisig with rice with Egg  ",
                "price": 135,
                "Description": "Spicy/Regular Sizzling Sisig + Rice + Egg",
                "rating": 3
            },
            {
                "menuid": "r3",
                "img_url": "../asset/menupictures/lechonkawali.jpg",
                "name":"Q’s Lechon kawali",
                "price": 130,
                "Description": "Crunchy Lechon Kawali + Rice",
                "rating": 3
            },
        ]
    },

    {
        "category" : "Toppings",
        "menulist" : [
            {
                "menuid": "t1",
                "img_url": "../asset/menupictures/bistek.jpg",
                "name":"Bistek ala Quadros ",
                "price": 120,
                "Description": "Beef Stew + Rice",
                "rating": 3
            },
            {
                "menuid": "t2",
                "img_url": "../asset/menupictures/gbutterdchix.jpg",
                "name":"Bawang Butter Chix  ",
                "price": 110,
                "Description": "Buttered Chicken Sauted in Garlic + Rice",
                "rating": 3
            },
            {
                "menuid": "t3",
                "img_url": "../asset/menupictures/chickenpares+rice.jpg",
                "name":"Chix ala pares",
                "price": 125,
                "Description": "Chicken cooked as Beef Pares + Rice",
                "rating": 3
            },
            
        ]
    },
    {
        "category" : "Extras",
        "menulist" : [
            {
                "menuid": "x1",
                "img_url": "../asset/menupictures/garlicfr.jpg",
                "name":"Garlic Fried Rice",
                "price": 25,
                "Description": "Fried Rice + Toasted Garlic",
                "rating": 3
            },
            {
                "menuid": "x2",
                "img_url": "../asset/menupictures/soda-pop.jpg",
                "name":"Soda",
                "price": 30,
                "Description": "Ice Cold Drinks",
                "rating": 3
            },
            {
                "menuid": "x3",
                "img_url": "../asset/menupictures/solas.jpg",
                "name":"Sola’s Bottled Iced Tea",
                "price": 30,
                "Description": "Bottled Iced Tea",
                "rating": 3
            },
        ]
    }
];

// Get the modal
let modal = document.getElementById("modalmenu");
let lightbox = document.getElementById("lightbox");
// Get the <span> element that closes the modal
let closemenu = document.getElementsByClassName("menu_modal_close")[0];
let closelightbox = document.getElementsByClassName("gallerymodal_close")[0];
// When the user clicks on <span> (x), close the modal
closemenu.onclick = function() {
  modal.style.display = "none";
  document.getElementById("modal_menu_qty").value = 1;
}
closelightbox.onclick = function() {
    lightbox.style.display = "none";
  }
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == lightbox) {
    lightbox.style.display = "none";
  }
}

const showModalMenu = (menu) =>{
    const menujson = JSON.parse(menu);
    modal.style.display = "flex";
    modal.querySelector('.modal-img').style = `background-image : url("${menujson.img_url}")`;
    modal.querySelector('.modal-menu-name').innerText = menujson.name;
    modal.querySelector('.modal-menu-desc').innerText = menujson.Description;
    modal.querySelector('#modal_menu_price').dataset.itemprice=menujson.price;
    modal.querySelector('#modal_menu_price').innerText = menujson.price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'PHP'
    });;
}


const menulistDisplay = document.querySelector("#menulist");
// load menu
const loadMenu = () => {
    for ( let categories of menulist ) {
        const categoryCard = document.createElement('div');
        categoryCard.classList.add('categoryCard');
        categoryCard.id = categories.category;

        const categoryCardDiv = document.createElement("div");
        categoryCardDiv.classList.add("categoryName");
        categoryCard.append(categoryCardDiv);
        categoryCardDiv.innerText = `${categories.category}`;

        for ( let menu of categories.menulist ) { 
            const menu_listDiv =  document.createElement("div");
            menu_listDiv.classList.add("menu-list");
            categoryCard.append(menu_listDiv);

            const menu_itemDiv = document.createElement("div");
            menu_itemDiv.classList.add("menu-item");
            menu_itemDiv.setAttribute("onclick",`showModalMenu('${JSON.stringify(menu)}');`);
            menu_listDiv.append(menu_itemDiv);

            const menu_masterDiv = document.createElement("div");
            menu_masterDiv.classList.add("menu-master");
            const menu_priceDiv = document.createElement("div");
            menu_priceDiv.classList.add("menu-price");
            menu_itemDiv.append(menu_masterDiv, menu_priceDiv);

            const menu_nameDiv = document.createElement("div");
            menu_nameDiv.classList.add("menu-name");
            const menu_desDiv = document.createElement("div");
            menu_desDiv.classList.add("menu-description");
            menu_masterDiv.append(menu_nameDiv, menu_desDiv);
            menu_nameDiv.innerText = `${menu.name}`;
            menu_desDiv.innerText = `${menu.Description}`;

            menu_priceDiv.innerText = `${menu.price}`;
            
            // categoryCard.innerHTML +=`<div class="menu-list">
            //                                 <div class="menu-item">
            //                                     <div class="menu-master">
            //                                         <div class="menu-name">${menu.name}</div>
            //                                         <div class="menu-description">${menu.Description}</div>
            //                                     </div>
            //                                     <div class="menu-price">${menu.price}</div>
            //                                 </div>
            //                             </div>`
                                    
        }
        // categoryCard.innerHTML +=`</div>`;
    
        menulistDisplay.append(categoryCard);
    }
}

loadMenu();

// JS for gallery
function showSlides(n) {
    lightbox.style.display="flex";
    let i;
    let slides = document.getElementsByClassName("mySlides");
    // var dots = document.getElementsByClassName("demo");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    // for (i = 0; i < dots.length; i++) {
    // dots[i].className = dots[i].className.replace(" active", "");
    // }
    slides[slideIndex-1].style.display = "block";
    // dots[slideIndex-1].className += " active";
};

let slideIndex = 1;

// showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}



const qty_incr = () =>{
    const qty = document.getElementById("modal_menu_qty");
    const price = document.getElementById("modal_menu_price");
    let itemprice = document.getElementById("modal_menu_price").dataset.itemprice;
    if(qty.value > 0){
        qty.value++;
        itemprice = +itemprice * qty.value;
        price.innerText = itemprice.toLocaleString('en-US', {
            style: 'currency',
            currency: 'PHP'
        });;
    }
}

const qty_decr = () =>{
    const qty = document.getElementById("modal_menu_qty");
    const price = document.getElementById("modal_menu_price");
    let itemprice = document.getElementById("modal_menu_price").dataset.itemprice;
    if(qty.value > 1){
        qty.value--;
        itemprice = +itemprice * qty.value;
        price.innerText = itemprice.toLocaleString('en-US', {
            style: 'currency',
            currency: 'PHP'
        });;
    }
}