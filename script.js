// Alert Me 
document.getElementById('alert-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const name = document.getElementById('name').value;
    alert(`Hi ${name}!`);
  });
  
  // Change Color
  document.getElementById('change-color-btn').addEventListener('click', function() {
    const body = document.body;
    if (body.style.backgroundColor === 'blue') {
      body.style.backgroundColor = 'green';
    } else {
      body.style.backgroundColor = 'blue';
    }
  });
  
  // Text Tester
  document.getElementById('text-tester-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const text = document.getElementById('text-input').value;
    const validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  
    if (validation.test(text)) {
      alert('Text contains special characters!');
    } else {
      alert('Text is valid!');
    }
  });
  
  // Add Text
  document.getElementById('add-text-btn').addEventListener('click', function() {
    const heading = document.getElementById('page-heading');
    heading.textContent += ' Add Text';
  });