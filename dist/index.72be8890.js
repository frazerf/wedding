// nav.js
// Consolidate into one DOMContentLoaded event handler
document.addEventListener('DOMContentLoaded', function() {
    // Get all relevant elements
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const navLinksAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
    // Hamburger menu toggle
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    // Smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor)=>{
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            // Get the target section id from the href attribute
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            // Only scroll if target exists
            if (targetSection) {
                // Close mobile menu if open
                if (hamburger.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('active');
                }
                // Get offset position and scroll
                const offsetTop = targetSection.offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    // Sticky header logic
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        const header = document.querySelector('.site-header');
        if (currentScroll > 50) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
        lastScroll = currentScroll;
    });
});
// Hero Carousel
// animations.js - Hero image fading
document.addEventListener("DOMContentLoaded", function() {
    // Only run if we have the hero section
    const heroSection = document.querySelector(".hero-section");
    if (!heroSection) return;
    // Create the background elements
    const heroBackground = document.querySelector(".hero-background");
    const image1 = document.createElement("div");
    const image2 = document.createElement("div");
    image1.classList.add("hero-background", "image-1");
    image2.classList.add("hero-background", "image-2");
    heroSection.appendChild(image1);
    heroSection.appendChild(image2);
    // Set up the image rotation
    let activeImage = 1;
    function rotateBackgroundImages() {
        if (activeImage === 1) {
            image1.style.opacity = "0";
            image2.style.opacity = "1";
            activeImage = 2;
        } else {
            image1.style.opacity = "1";
            image2.style.opacity = "0";
            activeImage = 1;
        }
    }
    // Change image every 7 seconds
    setInterval(rotateBackgroundImages, 7000);
});
// JavaScript for countdown timer
document.addEventListener("DOMContentLoaded", function() {
    // Get all countdown timers on the page
    const countdownTimers = document.querySelectorAll(".countdown-timer");
    // Function to create a countdown for a specific element and date
    function createCountdown(element, targetDate) {
        // Get the display elements within this countdown
        const daysEl = element.querySelector(".days");
        const hoursEl = element.querySelector(".hours");
        const minutesEl = element.querySelector(".minutes");
        const secondsEl = element.querySelector(".seconds");
        // Don't proceed if elements aren't found
        if (!daysEl || !hoursEl || !minutesEl || !secondsEl) {
            console.error("Countdown elements not found");
            return;
        }
        // Update the countdown every second
        return setInterval(function() {
            // Get current date and time
            const now = new Date().getTime();
            // Find the distance between now and the target date
            const distance = targetDate - now;
            // If the countdown is over
            if (distance < 0) {
                clearInterval(countdown);
                daysEl.innerHTML = "00";
                hoursEl.innerHTML = "00";
                minutesEl.innerHTML = "00";
                secondsEl.innerHTML = "00";
                // Add completed message if needed
                const container = element.closest(".countdown-container");
                if (container) {
                    const messageEl = document.createElement("p");
                    messageEl.classList.add("countdown-complete-message");
                    messageEl.innerHTML = "This event has begun!";
                    container.appendChild(messageEl);
                }
                return;
            }
            // Time calculations for days, hours, minutes and seconds
            const days = Math.floor(distance / 86400000);
            const hours = Math.floor(distance % 86400000 / 3600000);
            const minutes = Math.floor(distance % 3600000 / 60000);
            const seconds = Math.floor(distance % 60000 / 1000);
            // Display the result with leading zeros
            daysEl.innerHTML = days.toString().padStart(2, "0");
            hoursEl.innerHTML = hours.toString().padStart(2, "0");
            minutesEl.innerHTML = minutes.toString().padStart(2, "0");
            secondsEl.innerHTML = seconds.toString().padStart(2, "0");
        }, 1000);
    }
    // Setup each countdown timer with its specific date
    countdownTimers.forEach((timer)=>{
        // Get the target date from data attribute
        const dateStr = timer.getAttribute("data-target-date");
        if (!dateStr) {
            console.error("Missing data-target-date attribute");
            return;
        }
        const targetDate = new Date(dateStr);
        createCountdown(timer, targetDate);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Get all tab headers
    const tabHeaders = document.querySelectorAll(".tab-header");
    const tabContents = document.querySelectorAll(".tab-content");
    // Add click event to each tab header
    tabHeaders.forEach((header)=>{
        header.addEventListener("click", function() {
            // Remove active class from all headers and contents
            tabHeaders.forEach((h)=>h.classList.remove("active"));
            tabContents.forEach((c)=>c.classList.remove("active"));
            // Add active class to current header
            this.classList.add("active");
            // Get the associated tab content and activate it
            const tabId = this.getAttribute("data-tab");
            document.getElementById(tabId).classList.add("active");
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Select all accordion items
    const accordionItems = document.querySelectorAll('.accordion-item');
    // Add click event listeners to each accordion header
    accordionItems.forEach((item)=>{
        const header = item.querySelector('.accordion-header');
        header.addEventListener('click', function() {
            // Toggle active class on the clicked item
            item.classList.toggle('active');
            // Toggle aria-expanded attribute for accessibility
            const isExpanded = item.classList.contains('active');
            header.setAttribute('aria-expanded', isExpanded);
            // Optional: Close other open accordions (comment out for multiple open)
            if (isExpanded) accordionItems.forEach((otherItem)=>{
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.accordion-header').setAttribute('aria-expanded', false);
                }
            });
        });
    });
});

//# sourceMappingURL=index.72be8890.js.map
