

const filterButtons = document.getElementsByClassName('filter__sublist__item');

const filterProperties = {

    brand:'',
    power:'',
    color:'',


}


if (filterButtons.length>0) {

    for (let i = 0; i < filterButtons.length; i++) {
        filterButtons[i].addEventListener('click', function ()  {
            let clickedFilter = filterButtons[i];
            clickedFilter.closest('.shop__dropdown-item').querySelector('span').textContent=clickedFilter.textContent;


        });
        
    }
    
}










const showAllButton = document.querySelector('.shop__show-more');

const hiddenGoods = document.querySelector('.catalog_hide');


if (!hiddenGoods == '') {
    showAllButton.addEventListener('click', function ()  {
        hiddenGoods.classList.remove('catalog_hide');
    });
    
}







const priceInputs = document.getElementsByClassName('shop-price__input');

const applyFilter = document.querySelector('.shop__filter__button');



applyFilter.addEventListener('click', function ()  {

    if (parseInt(priceInputs[0].value) > parseInt(priceInputs[1].value)) {
        let priceTyped = priceInputs[0].value;
        console.log(priceTyped);  
        priceInputs[0].value = priceInputs[1].value;
        priceInputs[1].value = priceTyped;
       
    }

    console.log(typeof parseInt(priceInputs[0].value));

});




let lazyImg = document.querySelectorAll('img[data-src]');

console.log(lazyImg);
const windowHeight = document.documentElement.clientHeight;

let lazyImagesPositions = [];

if(lazyImg.length>0){
    lazyImg.forEach(img =>{
        if(img.dataset.src){
            lazyImagesPositions.push(img.getBoundingClientRect().top + pageYOffset);
            lazyScrollCheck();
        }
    })
}

console.log(lazyImg[0].dataset.src);

function lazyScrollCheck() {
    let imgIndex = lazyImagesPositions.findIndex(
        item => pageYOffset >item - windowHeight
    );
    if (imgIndex >= 0) {
        if (lazyImg[imgIndex].dataset.src) {
            lazyImg[imgIndex].src = lazyImg[imgIndex].dataset.src;
            lazyImg[imgIndex].removeAttribute('data-src');
            lazyImg[imgIndex].addEventListener('load', function ()  {
                lazyImg[imgIndex].parentElement.classList.remove('skeleton__img');
            });
       }
       delete lazyImagesPositions[imgIndex];
    }
   
    
}

for (let i = 0; i < lazyImg.length; i++) {
    lazyImg[i].addEventListener('load', function ()  {
        lazyImg[i].parentElement.classList.remove('skeleton_img');
    });
    
}

window.addEventListener('scroll', function ()  {
    lazyScrollCheck();
});



























// const langPicker = document.getElementsByClassName('header__lang__item');


// for (let i = 0; i < langPicker.length; i++) {
//     langPicker[i].addEventListener('click', function ()  {
//         for (let a = 0; a < langPicker.length; a++) {
//             langPicker[a].classList.remove('lang_picked');
            
//         }

//         langPicker[i].classList.add('lang_picked');
//     });
    
// }





// const inputField = document.querySelector('#phone');


// let eraseEvent;


// inputField.addEventListener('keydown', function ()  {
    

//     if (event.key === "Backspace") {
//         eraseEvent = true;
//     }
//     else{
//         eraseEvent = false;
//     }
    
//     console.log(eraseEvent);

    
// });



// inputField.addEventListener('input', function ()  {
//     const numberContent = inputField.value;

//     const numberLength = numberContent.length;

//     console.log(numberLength);
//     if (!eraseEvent) {
//         if (inputField.value.length==1) {
//             inputField.value = "+7" + numberContent;
            
//         }

  



//         if (numberLength == 5) {
            
//             inputField.value = numberContent.slice(0,2) + ' ' + "(" + numberContent.slice(2,5) + ")" + ' ';
//         }
//         else if (numberLength == 11 || numberLength == 14) {
            
//             inputField.value = numberContent + ' ';
//         }

//         if(numberLength == 9 || numberLength == 12 || numberLength == 15){
//             inputField.value = inputField.value.substring(0, inputField.value.length - 1) + ' ' + inputField.value[numberContent.length-1];
    
            
//         }
//         else if(numberLength == 8){
//             inputField.value = inputField.value.substring(0, inputField.value.length - 1) + ') ' + inputField.value[numberContent.length-1];
//         }
     
//     }
//     else{

//         if (inputField.value.length==1 || inputField.value.length==0) {
//             inputField.value = "+7";
            
//         }
//         console.log(inputField.value.length);
        

//     }

    

    
    
// });







            // When the window has finished loading create our google map below
            google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 18,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(43.241896,  76.933339), // New York

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [{"featureType":"administrative","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"saturation":-100},{"lightness":"50"},{"visibility":"simplified"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"lightness":"30"}]},{"featureType":"road.local","elementType":"all","stylers":[{"lightness":"40"}]},{"featureType":"transit","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]},{"featureType":"water","elementType":"labels","stylers":[{"lightness":-25},{"saturation":-100}]}]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.querySelector('#map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(43.241896, 76.933339),
                    map: map,
                    title: 'Snazzy!',
                    icon:'../img/map-marker.png'
                });
            }






