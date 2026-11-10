document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('feedbackForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Extract values from the inputs
    const formData = {
      name: document.getElementById('name').value.trim(),
      department: document.getElementById('department').value.trim(),
      sessionTitle: document.getElementById('sessionTitle').value.trim(),
      feedback: document.getElementById('feedback').value.trim(),
      suggestions: document.getElementById('suggestions').value.trim()
    };

    console.log('Submitted Feedback Data:', formData);

    // Provide user feedback & reset
    alert('Thank you! Your feedback has been submitted.');
    form.reset();
  });
});