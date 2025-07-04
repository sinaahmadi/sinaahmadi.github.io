function toggleYear(header) {
  const yearContent = header.nextElementSibling;
  const isCollapsed = header.classList.contains('collapsed');
  
  if (isCollapsed) {
    // Expand
    header.classList.remove('collapsed');
    yearContent.classList.remove('collapsed');
    yearContent.style.maxHeight = yearContent.scrollHeight + 'px';
  } else {
    // Collapse
    header.classList.add('collapsed');
    yearContent.classList.add('collapsed');
    yearContent.style.maxHeight = '0';
  }
}

// Initialize all year sections as expanded
document.addEventListener('DOMContentLoaded', function() {
  const yearContents = document.querySelectorAll('.year-content');
  yearContents.forEach(content => {
    // Use a larger buffer to ensure content fits
    content.style.maxHeight = (content.scrollHeight + 1000) + 'px';
  });
  
  // Add resize observer to handle dynamic content changes
  if (window.ResizeObserver) {
    const resizeObserver = new ResizeObserver(entries => {
      entries.forEach(entry => {
        const yearContent = entry.target;
        if (!yearContent.classList.contains('collapsed')) {
          // Recalculate height when content changes
          yearContent.style.maxHeight = (yearContent.scrollHeight + 200) + 'px';
        }
      });
    });
    
    yearContents.forEach(content => {
      resizeObserver.observe(content);
    });
  }
});

function toggleBibtex(link, bibUrl, pubId) {
  const bibContainer = document.getElementById('bibtex-' + pubId);
  const isCollapsed = link.classList.contains('collapsed');
  
  if (isCollapsed) {
    // Expand - load content if not already loaded
    if (bibContainer.querySelector('code').textContent === 'Loading...') {
      fetch(bibUrl)
        .then(response => response.text())
        .then(data => {
          bibContainer.querySelector('code').textContent = data;
          bibContainer.classList.add('expanded');
          link.classList.remove('collapsed');
          
          // Update parent year section max-height to accommodate new content
          setTimeout(() => {
            updateParentYearHeight(bibContainer);
          }, 50); // Small delay to ensure content is rendered
        })
        .catch(error => {
          console.error('Error loading BibTeX:', error);
          bibContainer.querySelector('code').textContent = 'Error loading BibTeX entry.';
          bibContainer.classList.add('expanded');
          link.classList.remove('collapsed');
          
          // Update parent year section max-height to accommodate new content
          setTimeout(() => {
            updateParentYearHeight(bibContainer);
          }, 50);
        });
    } else {
      // Already loaded, just show
      bibContainer.classList.add('expanded');
      link.classList.remove('collapsed');
      
      // Update parent year section max-height to accommodate new content
      setTimeout(() => {
        updateParentYearHeight(bibContainer);
      }, 50);
    }
  } else {
    // Collapse
    bibContainer.classList.remove('expanded');
    link.classList.add('collapsed');
    
    // Update parent year section max-height after content is collapsed
    setTimeout(() => {
      updateParentYearHeight(bibContainer);
    }, 350); // Wait for transition to complete
  }
}

function updateParentYearHeight(element) {
  // Find the parent year-content section
  const yearContent = element.closest('.year-content');
  if (yearContent && !yearContent.classList.contains('collapsed')) {
    // Temporarily disable transition to prevent flickering
    const originalTransition = yearContent.style.transition;
    yearContent.style.transition = 'none';
    
    // Reset max-height to auto to measure actual content height
    yearContent.style.maxHeight = 'auto';
    const newHeight = yearContent.scrollHeight;
    
    // Re-enable transition and set new height
    yearContent.style.transition = originalTransition;
    yearContent.style.maxHeight = newHeight + 'px';
  }
}

// Handle window resize to recalculate heights
window.addEventListener('resize', function() {
  const yearContents = document.querySelectorAll('.year-content:not(.collapsed)');
  yearContents.forEach(content => {
    content.style.maxHeight = (content.scrollHeight + 200) + 'px';
  });
});

// Touch event handling for mobile devices
document.addEventListener('touchstart', function() {
  // Enable hover effects on touch devices
  document.body.classList.add('touch-device');
});

// Improve accessibility
document.addEventListener('keydown', function(e) {
  if (e.key === 'Enter' || e.key === ' ') {
    const target = e.target;
    if (target.classList.contains('year-header')) {
      e.preventDefault();
      toggleYear(target);
    } else if (target.classList.contains('bibtex-toggle')) {
      e.preventDefault();
      target.click();
    }
  }
});

// Add ARIA attributes for accessibility
document.addEventListener('DOMContentLoaded', function() {
  const yearHeaders = document.querySelectorAll('.year-header');
  yearHeaders.forEach((header, index) => {
    header.setAttribute('role', 'button');
    header.setAttribute('aria-expanded', 'true');
    header.setAttribute('aria-controls', 'year-content-' + index);
    header.setAttribute('tabindex', '0');
    
    const yearContent = header.nextElementSibling;
    if (yearContent) {
      yearContent.setAttribute('id', 'year-content-' + index);
      yearContent.setAttribute('role', 'region');
    }
  });
  
  const bibtexToggles = document.querySelectorAll('.bibtex-toggle');
  bibtexToggles.forEach((toggle, index) => {
    toggle.setAttribute('role', 'button');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('tabindex', '0');
  });
});