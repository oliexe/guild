class rotateText {
  constructor() {
    this.allText = document.querySelectorAll('.spiral-text');
    this.main = document.querySelector('main');
    this.circle = document.querySelector('.circle');
    this.kv = document.querySelector('.KV-text');
    this.duration = parseFloat(getComputedStyle(this.main).getPropertyValue('--duration'));

    for (let i = 0;  i < this.allText.length; i++) {
      this.text = this.allText[i];
      this.text.style.setProperty('animation-delay', (-(i * this.duration / this.allText.length)) + 'ms');
    }
    
    window.addEventListener('load', () => {
      this.main.style.display = 'block';
      this.animaCircle();
    })
  }
  
  animaCircle() {
      const tl = gsap.timeline();
      tl
        .fromTo(this.allText, {    
            opacity: 0
          }, 
          {
            opacity: 1,
            stagger: { 
              each: 0.013,
            }
          },0
        )
        .fromTo(this.circle, {
            width: 0,
            height: 0,
          }, 
          {
            width: 50 + 'vw',
            height: 50 + 'vw',
            ease: Power4.easeOut,
            duration: 1.6,
          },"+=0.5"
        )
        .fromTo(this.kv, {
            scaleX: 1,
            scaleY: 1.4,
            y: -3 + 'vw',
            transformOrigin: 'top top',
          }, 
          {
            scaleX: 1,
            scaleY: 1,
            y: -4 + 'vw',
            transformOrigin: 'top top',
            ease: Power4.easeOut,
            duration: 1.3,
          },"-=0.3"
        )
        .fromTo(this.kv, {
            opacity: 0,
            transformOrigin: 'top top',
          }, 
          {
            opacity: 1,
            ease: Power4.easeOut,
            duration: 1.3,
          },"<"
        )
  }
}

new rotateText();