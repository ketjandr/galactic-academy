const counters = document.querySelectorAll('.counter');
var speed = 50;
var time = 0;

const countOptions = {
  threshold: 0,
  rootMargin: "0px 0px -100px 0px"

};

const countOnScroll = new IntersectionObserver
(function(entries, countOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      counters.forEach(counter => {
      	const updateCount = () => {

      		const target = +counter.getAttribute('data-target');
      		const count = +counter.innerText;
      		const inc = target / speed;


      		if (count < target) {
      			counter.innerText = Math.ceil(count + inc);
      			setTimeout(updateCount, time);
            time += 3;
            speed += 0.4;


      		} else {
      			counter.innerText = target;
      		}
      	};

      	updateCount();
      });
      countOnScroll.unobserve(entry.target);
    }
  });
},
countOptions);

counters.forEach(counter => {
  countOnScroll.observe(counter);
});
