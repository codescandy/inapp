const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    const topbar = document.getElementById('topbar');
    const toggleBtn = document.getElementById('toggleBtn');
    const mobileBtn = document.getElementById('mobileBtn');
    const overlay = document.getElementById('overlay');

    // Desktop collapse
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
      content.classList.toggle('full');
      topbar.classList.toggle('full');
    });

    // Mobile sidebar open
    mobileBtn.addEventListener('click', () => {
      sidebar.classList.add('mobile-show');
      overlay.classList.add('show');
    });

    // 🔥 Click outside to close
    overlay.addEventListener('click', () => {
      sidebar.classList.remove('mobile-show');
      overlay.classList.remove('show');
    });



     const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.sidebar .nav-link');

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
      }
    });