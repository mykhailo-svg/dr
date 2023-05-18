

const burgerButton = document.querySelector('.burger__button');

console.log(burgerButton);
const burgerBody = document.querySelector('.burger__body');

const mainBody = document.querySelector('body');



burgerButton.addEventListener('click', function ()  {
    mainBody.classList.toggle('body_noScroll');
    if(burgerBody.classList.length<2){
        burgerBody.classList.toggle('burger__show');
    }
    else{
        burgerBody.classList.toggle('burger__hide');
        burgerBody.classList.toggle('burger__show');
    }
    
    burgerButton.classList.toggle('burger__show');
});






window.addEventListener('DOMContentLoaded', function ()  {

    const footerForm = document.querySelector('form');

    footerForm.addEventListener('submit', formSend);


    async function formSend(e) {

        
        e.preventDefault();
        
       

        const formPhone = document.querySelectorAll('#phone');

        const formEmail = document.querySelectorAll('#email');

        const formName = document.querySelectorAll('#name');

        const formMessage = document.querySelectorAll('#message');
        const formCheck = document.querySelector('.footer__checkbox');
        const footerRow = document.querySelector('.foot_inp');
        log
        console.log(formEmail.value);

        console.log(formMessage);
        
        
           
            // let response = await fetch('mail.php' , {
            //     method:'POST',
            //     body:FormData
            // });
            // if (response.ok) {
            //     let result = await response.json();
           
            //     footerForm.reset();
                
            // }
           
            
        

    }

    

});

















const langPicker = document.getElementsByClassName('header__lang__item');


for (let i = 0; i < langPicker.length; i++) {
    langPicker[i].addEventListener('click', function ()  {
        for (let a = 0; a < langPicker.length; a++) {
            langPicker[a].classList.remove('lang_picked');
            
        }

        langPicker[i].classList.add('lang_picked');
    });
    
}





const inputField = document.querySelector('#phone');


let eraseEvent;


inputField.addEventListener('keydown', function ()  {
    

    if (event.key === "Backspace") {
        eraseEvent = true;
    }
    else{
        eraseEvent = false;
    }
    
    console.log(eraseEvent);

    
});



inputField.addEventListener('input', function ()  {
    const numberContent = inputField.value;

    const numberLength = numberContent.length;

    console.log(numberLength);
    if (!eraseEvent) {
        if (inputField.value.length==1) {
            inputField.value = "+7" + numberContent;
            
        }

  



        if (numberLength == 5) {
            
            inputField.value = numberContent.slice(0,2) + ' ' + "(" + numberContent.slice(2,5) + ")" + ' ';
        }
        else if (numberLength == 11 || numberLength == 14) {
            
            inputField.value = numberContent + ' ';
        }

        if(numberLength == 9 || numberLength == 12 || numberLength == 15){
            inputField.value = inputField.value.substring(0, inputField.value.length - 1) + ' ' + inputField.value[numberContent.length-1];
    
            
        }
        else if(numberLength == 8){
            inputField.value = inputField.value.substring(0, inputField.value.length - 1) + ') ' + inputField.value[numberContent.length-1];
        }
     
    }
    else{

        if (inputField.value.length==1 || inputField.value.length==0) {
            inputField.value = "+7";
            
        }
        console.log(inputField.value.length);
        

    }

    

    
    
});






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
