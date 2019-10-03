const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

let container = document.querySelector(".container");
//container.style.margin = '0 auto';
//console.log(container);

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

let middle = document.getElementById("middle-img");
middle.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let node = document.createElement("BR");
/*
function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}
*/
let ctaText = document.querySelector(".cta-text h1");
ctaText.textContent = siteContent["cta"]["h1"];
let str = ctaText.textContent.split(" ");
ctaText.innerHTML = str[0] + "<br>" + str[1] + "<br>" + str[2];



//ctaText.appendChild(node);
//ctaText.style.width = '150px';

ctaText = document.querySelector(".cta-text button");
ctaText.textContent= siteContent["cta"]["button"];

ctaText = document.querySelector(".cta-text");
ctaText.style.margin = '0 82px 0 0';

ctaText.style.display = 'flex';
ctaText.style.justifyContent = 'center';

//let navColor = document.querySelector(".container nav a" );
//navColor.style.color = 'green';
node = document.createElement("A");
let navItems = document.querySelector('.container header nav');
navItems.appendChild(node);
node = document.createElement("A");
navItems.prepend(node);

navItems = document.querySelectorAll('a');
let count = 0;
while(count <= 7){

  navItems[count].style.color = "green";
  if(count === 6){
    navItems[count].textContent = 'There';
  } else if (count === 7){
    navItems[count].textContent = 'Here';
  } else {
    navItems[count].textContent = siteContent["nav"][("nav-item-" + (count + 1))];
  }
  count++;
}



let featuresText = document.querySelector(".top-content .text-content:first-of-type h4");
featuresText.textContent = siteContent["main-content"]["features-h4"];

featuresText = document.querySelector(".top-content .text-content:first-of-type p");
featuresText.textContent = siteContent["main-content"]["features-content"];

featuresText = document.querySelector(".top-content .text-content:last-of-type h4");
featuresText.textContent = siteContent["main-content"]["about-h4"];

featuresText = document.querySelector(".top-content .text-content:last-of-type p");
featuresText.textContent = siteContent["main-content"]["about-content"];

featuresText = document.querySelectorAll(".bottom-content .text-content h4");

count = 0;
while(count <= 2){
  if(count === 0){
    featuresText[count].textContent = siteContent["main-content"]["services-h4"];
  } else if(count === 1){
    featuresText[count].textContent = siteContent["main-content"]["product-h4"];
  } else{
    featuresText[count].textContent = siteContent["main-content"]["vision-h4"];
  }

  count++;
}

featuresText = document.querySelectorAll(".bottom-content .text-content p");

count = 0;
while(count <= 2){
  if(count === 0){
    featuresText[count].textContent = siteContent["main-content"]["services-content"];
  } else if(count === 1){
    featuresText[count].textContent = siteContent["main-content"]["product-content"];
  } else{
    featuresText[count].textContent = siteContent["main-content"]["vision-content"];
  }

  count++;
}

let contact = document.querySelector(".contact h4");
contact.textContent = siteContent["contact"]["contact-h4"];

contact = document.querySelectorAll(".contact p");

count = 0;
while(count <= 2){
  if(count === 0){
    contact[count].textContent = siteContent["contact"]["address"];
  } else if(count === 1){
    contact[count].textContent = siteContent["contact"]["phone"];
  } else{
    contact[count].textContent = siteContent["contact"]["email"];
  }

  count++;
}

let foot = document.querySelector("footer p");
foot.textContent = siteContent["footer"]["copyright"];
