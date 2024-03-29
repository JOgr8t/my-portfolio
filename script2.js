document.addEventListener("DOMContentLoaded", function() {
    // Get references to toggle button and section 2
    var toggleBtn = document.getElementById('toggle-section2');
    var section2 = document.getElementById('section2');
    
    // Add click event listener to toggle button
    toggleBtn.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default anchor behavior
      
      // Toggle visibility of section 2
      if (section2.style.display === 'none') {
        section2.style.display = 'block';
        document.getElementById('close-section2').style.display = 'block'; // Show close button
      } else {
        section2.style.display = 'none';
        document.getElementById('close-section2').style.display = 'none'; // Hide close button
      }
    });
    
    // Add click event listener to close button for section 2
    document.getElementById('close-section2').addEventListener('click', function() {
      section2.style.display = 'none';
      document.getElementById('close-section2').style.display = 'none'; // Hide close button
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    // Get references to toggle button and section 3
    var toggleButton = document.getElementById('toggle-section3');
    var section3 = document.getElementById('section3');
    
    // Add click event listener to toggle button
    toggleButton.addEventListener('click', function(a) {
      a.preventDefault(); // Prevent default anchor behavior
      
      // Toggle visibility of section 2
      if (section3.style.display === 'none') {
        section3.style.display = 'block';
        document.getElementById('close-section3').style.display = 'block'; // Show close button
      } else {
        section3.style.display = 'none';
        document.getElementById('close-section3').style.display = 'none'; // Hide close button
      }
    });
    
    // Add click event listener to close button for section 2
    document.getElementById('close-section3').addEventListener('click', function() {
      section3.style.display = 'none';
      document.getElementById('close-section3').style.display = 'none'; // Hide close button
    });
  });