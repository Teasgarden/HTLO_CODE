function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');
    setTimeout(function() {
      notification.classList.remove('show');
    }, 3000); // Hide after 3 seconds
  }