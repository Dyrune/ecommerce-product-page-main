

//to show pages to pages.... eg to show page one click button one and so on





const allHeaders = document.querySelectorAll('.thumb');
const homePages = document.querySelectorAll('.all-header');

allHeaders.forEach((header, index) => {
  header.addEventListener('click', () => {
    // Hide all home pages
    homePages.forEach((page) => {
      page.style.display = 'none';
    });

    // Show the corresponding home page
    homePages[index].style.display = 'flex';

    // Remove the 'active-header' class from all headers
    allHeaders.forEach((header) => {
      header.classList.remove('active-header');
    });

    // Add the 'active-header' class to the clicked header
    header.classList.add('active-header');
  });
});






//to change numbers with buttons





document.addEventListener('DOMContentLoaded', function () {
    const addBtn = document.getElementById('add');
    const minusBtn = document.getElementById('minus');
    const bersElements = document.querySelectorAll('.bers');

    let currentIndex = 0; // Start at the first .bers element

    updateDisplay(); // Initialize the display

    addBtn.addEventListener('click', function () {
      if (currentIndex < bersElements.length - 1) {
        currentIndex++;
        updateDisplay();
      }
    });

    minusBtn.addEventListener('click', function () {
      if (currentIndex > 0) {
        currentIndex--;
        updateDisplay();
      }
    });

    function updateDisplay() {
      bersElements.forEach((bers, index) => {
        if (index === currentIndex) {
          bers.style.display = 'block';
        } else {
          bers.style.display = 'none';
        }
      });
    }
});







document.addEventListener('DOMContentLoaded', function () {
    const addBtn = document.getElementById('add');
    const minusBtn = document.getElementById('minus');
    const bersElements = document.querySelectorAll('.bers');
    const cartButton = document.querySelector('.add-btn');
    const cartContent = document.querySelector('.your-cart');
    const numElement = document.querySelector('.num');

    let currentIndex = 0; // Start at the first .bers element
    let itemPrice = 125.0; // Replace with the actual item price

    updateDisplay(); // Initialize the display

    addBtn.addEventListener('click', function () {
      if (currentIndex < bersElements.length - 1) {
        currentIndex++;
        updateDisplay();
      }
    });

    minusBtn.addEventListener('click', function () {
      if (currentIndex > 0) {
        currentIndex--;
        updateDisplay();
      }
    });

    cartButton.addEventListener('click', function () {
      const total = (currentIndex + 1) * itemPrice; // Calculate the total price
      cartContent.textContent = `Total: $${total.toFixed(2)}`;
    });

    function updateDisplay() {
      bersElements.forEach((bers, index) => {
        if (index === currentIndex) {
          bers.style.display = 'block';
        } else {
          bers.style.display = 'none';
        }
      });
    }
});