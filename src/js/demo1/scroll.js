console.clear();

const {gsap} =window;
const buttons ={
    prev: document.querySelector(".btn--left"),
    next: document.querySelector(".btn--right")
};

const cardsContainerEl = document.querySelector(".cards__wrapper");
const appBgContainerEl = document.querySelector(".app__bg");

const cardInfosContainerEl = document.querySelector(".info__wrapper");


buttons.next.addEventListener("click", () => swapCards("right"));

buttons.prev.addEventListener("click", () => swapCards("left"));


function swapCards(direction) {

    const currentCardEl = cardsContainerEl.querySelector(".current--card");
    const previousCardEl = cardsContainerEl.querySelector(".previous--card");
    const previousCardEl_1 = cardsContainerEl.querySelector(".previous--card-1");
    const nextCardEl = cardsContainerEl.querySelector(".next--card");
    const nextCardEl_1 = cardsContainerEl.querySelector(".next--card-1");
    

    const currentBgImageEl = appBgContainerEl.querySelector(".current--image");
    const previousBgImageEl = appBgContainerEl.querySelector(".previous--image");
    const nextBgImageEl = appBgContainerEl.querySelector(".next--image");
    const nextBgImageEl_1 = appBgContainerEl.querySelector(".next--image-1");
    const previousBgImageEl_1 = appBgContainerEl.querySelector(".previous--image-1");   
  
    changeInfo(direction);
    swapCardsClass();
  
  
    function swapCardsClass() {
      currentCardEl.classList.remove("current--card");
      previousCardEl.classList.remove("previous--card");
      nextCardEl.classList.remove("next--card");
      previousCardEl_1.classList.remove("previous--card-1");
      nextCardEl_1.classList.remove("next--card-1");
  
      currentBgImageEl.classList.remove("current--image");
      previousBgImageEl.classList.remove("previous--image");
      nextBgImageEl.classList.remove("next--image");
      previousBgImageEl_1.classList.remove("previous--image-1");
      nextBgImageEl_1.classList.remove("next--image-1");
  
      currentCardEl.style.zIndex = "50";

      currentBgImageEl.style.zIndex = "-2";
  
      if (direction === "right") {

        previousCardEl.style.zIndex = "20";
        nextCardEl.style.zIndex = "20";
        nextCardEl_1.style.zIndex="10"
        previousCardEl_1.style.zIndex="10"
  
        nextBgImageEl.style.zIndex = "-1";
  
        currentCardEl.classList.add("previous--card");
        previousCardEl.classList.add("previous--card-1");
        previousCardEl_1.classList.add("next--card-1")
        nextCardEl.classList.add("current--card");
        nextCardEl_1.classList.add("next--card");
        
  
        currentBgImageEl.classList.add("previous--image");
        previousBgImageEl.classList.add("previous--image-1");
        previousBgImageEl_1.classList.add("next--image-1");
        nextBgImageEl.classList.add("current--image");
        nextBgImageEl_1.classList.add("next--image");


      } else if (direction === "left") {

        previousCardEl.style.zIndex = "20";
        nextCardEl.style.zIndex = "20";
        nextCardEl_1.style.zIndex="10"
        previousCardEl_1.style.zIndex="10"


        previousBgImageEl.style.zIndex = "-1";
  
        currentCardEl.classList.add("next--card");
        previousCardEl.classList.add("current--card");
        previousCardEl_1.classList.add("previous--card");
        nextCardEl.classList.add("next--card-1");
        nextCardEl_1.classList.add("previous--card-1");
  
        currentBgImageEl.classList.add("next--image");
        previousBgImageEl.classList.add("current--image");
        previousBgImageEl_1.classList.add("previous--image");
        nextBgImageEl.classList.add("next--image-1");
        nextBgImageEl_1.classList.add("previous--image-1");
      }
    }
  }

function changeInfo(direction)
{
    
}