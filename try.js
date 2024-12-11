// const root = document.documentElement;
// const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
// const marqueeContent = document.querySelector("ul.marquee-content");

// root.style.setProperty("--marquee-elements", marqueeContent.children.length);

// for(let i=0; i<marqueeElementsDisplayed; i++) {
//   marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
// }

// ANIMATION TRIGGER
const animateMeElements = document.querySelectorAll(".first");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-in-photo");
    }
  });
});

animateMeElements.forEach(element => {
  observer.observe(element);
});

const animateMeElements1 = document.querySelectorAll(".fr");
const observer1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-next-photo1");
    }
  });
});

animateMeElements1.forEach(element => {
  observer1.observe(element);
});

const animateMeElements2 = document.querySelectorAll(".two");
const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-in-photo2");
    }
  });
});

animateMeElements2.forEach(element => {
  observer2.observe(element);
});
// ANIMATION TRIGGER 2
// const animateMeElement = document.querySelectorAll("#animate-over");
// const observers = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("slide-next-photo");
//     }
//   });
// });

animateMeElement.forEach(element => {
  observers.observe(element);
});