// Timeline animations
// document.addEventListener('DOMContentLoaded', () => {
//   const observerOptions = {
//     threshold: 0.1, // Trigger when 10% visible
//     rootMargin: '0px 0px -50px 0px' // Adjust bottom margin
//   };

//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.style.setProperty('--visible', '1');
//         entry.target.style.transform = 'translateY(0)';
//         observer.unobserve(entry.target);
//       }
//     });
//   }, observerOptions);

//   // Initialize all timeline events
//   document.querySelectorAll('.timeline-event').forEach(eventEl => {
//     // Set initial hidden state
//     eventEl.style.opacity = 0;
//     eventEl.style.transform = 'translateY(20px)';
//     eventEl.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    
//     observer.observe(eventEl);
//   });
// });