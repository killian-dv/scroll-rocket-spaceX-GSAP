const topRocket = document.querySelector('.top-rocket');
const midRocket = document.querySelector('.mid-rocket');
const rocket = document.querySelector('.bot-rocket');
const supply = document.querySelector('.supply');
const allBlocs = document.querySelectorAll('.bloc');

const offset = [105,206,848]

gsap.utils.toArray(['.bloc2', '.bloc3', '.bloc4']).forEach((bloc, index) => {
    gsap.to(bloc, {
        y: 0,
        ease: 'none',
        scrollTrigger: {
            trigger: '.container-scroll',
            start: 'top bottom-=40%',
            end: `+=${offset[index]}`,
            // markers: true,
            scrub: true,
        }
    })
});

allBlocs.forEach((bloc, index) => {
    if(index === 3) {
        gsap.set(bloc, {
            scrollTrigger: {
                trigger: bloc,
                start: 'top center',
                // markers: true,
                onEnter: () => {
                    bloc.classList.add('active');
                },
                onLeaveBack: () => {
                    bloc.classList.remove('active');
                },
            }
        })
        return;
    }
    gsap.set(bloc, {
        scrollTrigger: {
            trigger: bloc,
            start: 'top center+=10%',
            // markers: true,
            onEnter: () => {
                bloc.classList.add('active');
            },
            onLeaveBack: () => {
                bloc.classList.remove('active');
            },
        }
    })
})