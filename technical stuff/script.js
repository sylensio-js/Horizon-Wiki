/* ==========================
  Forbidden West Wiki - JS
   (external file)
   ========================== */

/* Elements */
const articleContainer = document.getElementById('article-container');
const homeSection = document.getElementById('home-section');
const searchBar = document.getElementById('searchBar');
const searchResults = document.getElementById('search-results');
const ctaExplore = document.getElementById('cta-explore');

/* HTML escaping function to prevent XSS */
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Delegate clicks on generated article links to loadArticle
document.addEventListener('click', (ev) => {
  try {
    const a = ev.target.closest && ev.target.closest('a[data-article-link]');
    if (!a) return;
    ev.preventDefault();
    const id = a.getAttribute('data-article-link') || (a.getAttribute('href') || '').replace(/^#/, '');
    // delegated click on data-article-link: (diagnostic logging removed)

    // diagnostic toast removed

    if (!id) return;
    if (window.articles[id]) {
      try { console.log('[delegate] document click delegate to loadArticle', id); loadArticle(id); } catch (e) { console.error('loadArticle threw', e); }
    } else {
      console.warn('delegated click - article not found for id:', id);
    }
  } catch (e) {
    // swallow to avoid breaking page when event model differs
    console.warn('delegated article link click failed', e);
  }
});

// capture listener removed

/* Breadcrumb / current article tracking */
let currentArticleId = null;

function clearArticleHistory() {
  // Clear only the current article tracking; historical session stacks removed.
  currentArticleId = null;
}

function renderBreadcrumbs(container, id) {
  if (!container) return;
  // remove old crumbs if present
  const existing = container.querySelector('.breadcrumbs');
  if (existing) existing.remove();

  const nav = document.createElement('nav');
  nav.className = 'breadcrumbs';

  // Home button
  const homeBtn = document.createElement('button');
  homeBtn.className = 'crumb home';
  homeBtn.type = 'button';
  homeBtn.textContent = 'Home';
  homeBtn.addEventListener('click', () => {
    // clear article view and history
    articleContainer.innerHTML = '';
    homeSection.style.display = 'flex';
    homeSection.classList.add('fade-in');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => homeSection.classList.remove('fade-in'), 400);
    clearArticleHistory();
    const backToHomeBtn = document.getElementById('back-to-home');
    if (backToHomeBtn) backToHomeBtn.hidden = true;
  });
  nav.appendChild(homeBtn);

  // NOTE: Session-based forward/back navigation has been removed. We keep a
  // simple Home button and the current title only.

  // Current title indicator
  const titleSpan = document.createElement('span');
  titleSpan.className = 'current-title';
  titleSpan.textContent = (window.articles[id]?.match(/<h1[^>]*class=["']title["'][^>]*>([\s\S]*?)<\/h1>/i) || [])[1] || id;
  nav.appendChild(titleSpan);

  // (no forward button — session forward navigation removed)

  // (single forward button handled above)

  // Insert at the top of the article container
  container.insertBefore(nav, container.firstChild);
  // Prevent accidental clicks caused by in-flight mouse events during the
  // article transition (e.g., mousedown before replace, mouseup after).
  nav.style.pointerEvents = 'none';
  setTimeout(() => { try { nav.style.pointerEvents = 'auto'; } catch (e) {} }, 250);
}






/* Utility: close search results */
function closeSearchResults() {
  searchResults.innerHTML = '';
  searchResults.style.display = 'none';
  currentHighlight = -1;
}

let currentHighlight = -1;

/* Render results list with enhanced features */
function showSearchMatches(query) {
  closeSearchResults();
  currentHighlight = -1;
  
  if (!query) return;
  const q = query.toLowerCase();
  const matches = [];

  // helpers
  function escapeRegExp(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
  function highlightMatch(text, qRaw) {
    if (!qRaw) return text;
    const re = new RegExp(escapeRegExp(qRaw), 'ig');
    return text.replace(re, (m) => `<strong class="search-hit">${m}</strong>`);
  }
  
  function getArticleType(id) {
    // Normalize id so comparisons are consistent regardless of
    // hyphenation, spacing, or case (e.g. "sun-king-avad" vs "sun-king avad").
    const normalized = String(id).toLowerCase().replace(/-/g, ' ').replace(/\s+/g, ' ').trim();

    const elements = ['acid', 'freeze', 'fire', 'plasma', 'shock', 'purgewater', 'adhesive'];
    const characters = ['rost', 'gaia', 'sun king avad', 'varl', 'elisabet sobeck', 'aloy', 'erend', 'kotallo', 'sylens', 'tilda'];
    const lore = ['carja', 'tenakth', 'nora', 'far zenith', 'ted faro', 'utaru', 'nemesis', 'extinction signal', 'cradle facilities', 'the old world', 'the new world', 'technology as myth', 'red raids'];
    const tribes = ['carja', 'tenakth', 'nora', 'utaru', 'oseram', 'banuk', 'quen'];
    const subfunctions = ['hades', 'hephaestus', 'apollo', 'artemis', 'minerva', 'aether', 'poseidon', 'demeter', 'eleuthia'];

    if (elements.includes(normalized)) return 'Element';
    if (characters.includes(normalized)) return 'Character';
    if (lore.includes(normalized)) return 'Lore';
    if (tribes.includes(normalized)) return 'Tribe';
    if (subfunctions.includes(normalized)) return 'Subfunction';

    return 'Machine';
  }
  function matchesCategory(id, query) {
    const type = getArticleType(id).toLowerCase();
    const q = query.toLowerCase();
    
    if (q === 'machines' || q === 'machine') return type === 'machine';
    if (q === 'elements' || q === 'element') return type === 'element';
    if (q === 'characters' || q === 'character') return type === 'character';
    if (q === 'lore') return type === 'lore';
    if (q === 'subfunctions' || q === 'subfunction') return type === 'subfunction';
    return false;
  }
  


  for (const id in window.articles) {
    const titleMatch = window.articles[id].match(/<h1[^>]*class=["']title["'][^>]*>([\s\S]*?)<\/h1>/i);
    const title = titleMatch ? titleMatch[1].trim() : id;
    
    const categoryMatches = matchesCategory(id, query);
    
    // For category searches, ONLY show category matches
    if (['machines', 'elements', 'characters', 'lore', 'subfunctions', 'subfunction'].includes(query.toLowerCase())) {
      if (categoryMatches) {
        matches.push({ 
          id, 
          title, 
          type: getArticleType(id),
          priority: 1
        });
      }
    } else {
      // For regular searches, use all matching methods
      const titleMatches = title.toLowerCase().includes(q);
      const idMatches = id.includes(q);
      const contentMatches = window.articles[id].toLowerCase().includes(q);
      
      if (titleMatches || idMatches || contentMatches || categoryMatches) {
        let priority = 4;
        if (titleMatches) priority = 1;
        else if (idMatches) priority = 2;
        else if (categoryMatches) priority = 3;
        
        matches.push({ 
          id, 
          title, 
          type: getArticleType(id),
          priority
        });
      }
    }
  }

  if (!matches.length) {
    const noResults = document.createElement('div');
    noResults.className = 'no-results';
    noResults.textContent = `No results found for "${query}"`;
    searchResults.appendChild(noResults);
    searchResults.style.display = 'block';
    return;
  }

  // Sort by priority first, then alphabetically
  matches.sort((a, b) => {
    if (a.priority !== b.priority) {
      return a.priority - b.priority;
    }
    return a.title.localeCompare(b.title);
  });

  // For category searches, show more results
  const isCategory = ['machines', 'elements', 'characters', 'lore', 'subfunctions', 'subfunction'].includes(query.toLowerCase());
  const limit = isCategory ? 15 : 8;
  const limitedMatches = matches.slice(0, limit);

  // create result nodes
  limitedMatches.forEach((m, index) => {
    const item = document.createElement('div');
    item.className = 'result-item';
    item.setAttribute('role','option');
    item.dataset.index = index;

    const highlightedTitle = highlightMatch(m.title, query);
    const highlightedId = highlightMatch(m.id, query);

    item.innerHTML = `
      <div class="result-content">
        <div class="result-title">${highlightedTitle}</div>
        <div class="result-meta">/${highlightedId}</div>
      </div>
      <div class="result-type">${m.type}</div>
    `;
    
    // Click to directly load the article
    item.addEventListener('click', () => {
      loadArticle(m.id);
      closeSearchResults();
      searchBar.value = '';
    });
    
    searchResults.appendChild(item);
  });

  if (matches.length > limit) {
    const moreResults = document.createElement('div');
    // Use a dedicated class for the "more results" footer so it doesn't
    // inherit the empty-state icon/animation from `.no-results`.
    moreResults.className = 'more-results';
    moreResults.textContent = `+${matches.length - limit} more results...`;
    searchResults.appendChild(moreResults);
  }

  searchResults.style.display = 'block';
}

/* Keyboard navigation for search results */
function highlightResult(index) {
  const items = searchResults.querySelectorAll('.result-item');
  items.forEach(item => item.classList.remove('highlighted'));
  
  if (index >= 0 && index < items.length) {
    items[index].classList.add('highlighted');
    items[index].scrollIntoView({ block: 'nearest' });
  }
}

function selectHighlightedResult() {
  const highlighted = searchResults.querySelector('.result-item.highlighted');
  if (highlighted) {
    highlighted.click();
  }
}

/* Lazy load article content */
function lazyLoadArticle(id) {
  return new Promise((resolve) => {
    // Simulate network delay for demonstration
    setTimeout(() => {
      resolve(window.articles[id]);
    }, Math.random() * 200 + 100);
  });
}

/* Service Worker Registration */
/* Service Worker Registration */
if ('serviceWorker' in navigator && location.protocol !== 'file:') {
  window.addEventListener('load', () => {
    // register the SW from the same packaged location used in index.html
    navigator.serviceWorker.register('technical stuff/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

/* Cache article for offline viewing */
function cacheArticleForOffline(articleId, content) {
  if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage({
      type: 'CACHE_ARTICLE',
      articleId: articleId,
      content: content
    });
  }
}

/* Load article by id (inject into articleContainer) */
function loadArticle(id, opts) {
  if (typeof window.__isLoadingArticle === 'undefined') window.__isLoadingArticle = false;
  if (window.__isLoadingArticle) {
    console.log('[loadArticle] another load in progress, ignoring request for', id);
    return;
  }
  window.__isLoadingArticle = true;
  console.log('[loadArticle] start', { id, opts, currentArticleId });
  if (!window.articles[id]) { console.warn('[loadArticle] no article for id', id); return; }
  // If already viewing this article, do nothing
  if (id === currentArticleId) { console.log('[loadArticle] no-op, already current', id); return; }
  
  // Track article view
  trackArticleView(id);
  
  // Cache article for offline viewing
  cacheArticleForOffline(id, window.articles[id]);
  
  // Add to recent searches
  addToRecent(id);
  
  // Show back to home button
  const backToHomeBtn = document.getElementById('back-to-home');
  if (backToHomeBtn) backToHomeBtn.hidden = false;
  
  // Add loading state
  articleContainer.innerHTML = '<div class="loading">Loading...</div>';
  
  // Lazy load the article
  lazyLoadArticle(id).then((content) => {
    console.log('[loadArticle] lazyLoad resolved for', id, 'contentLen=', content ? content.length : 0);
    // fade out home
    homeSection.classList.add('fade-out');
    
    setTimeout(() => {
      homeSection.style.display = 'none';
      homeSection.classList.remove('fade-out');
      
      // inject article HTML
      articleContainer.innerHTML = content;
          // auto-link capitalized words to existing articles
          if (typeof autoLinkCapitalizedWords === 'function') autoLinkCapitalizedWords(articleContainer, id);
          // apply synonym-based links
          if (typeof applySynonymLinks === 'function') applySynonymLinks(articleContainer);
          // Ensure every generated link has a click handler (defensive fallback)
          if (typeof bindArticleLinkHandlers === 'function') bindArticleLinkHandlers(articleContainer);

          // Breadcrumbs: we no longer maintain a session history stack — only
          // track the currently viewed article id for UI purposes.
          console.log('[loadArticle] setting currentArticleId=', id, 'opts=', opts);
          currentArticleId = id;
          console.log('[loadArticle] set currentArticleId=', currentArticleId);
          renderBreadcrumbs(articleContainer, id);
          console.log('[loadArticle] breadcrumbs rendered for', id);
      // init UI bits inside article

      setupAccordionAndTabs();

      // fade in article
      articleContainer.classList.add('show');
      
      // scroll to top of article container
      articleContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      // Add back to home button and favorite button
      addBackButton();
      addFavoriteButton(id);
      // finished loading
      window.__isLoadingArticle = false;
    }, 300);
  }, 100);
}

// Ensure anchors created anywhere inside an article will navigate correctly.
function bindArticleLinkHandlers(container) {
  if (!container) return;
  const selector = 'a[data-article-link], a.auto-link';
  container.querySelectorAll(selector).forEach(a => {
    // Avoid double-binding
    if (a.__articleHandlerBound) return;
    a.__articleHandlerBound = true;
    a.addEventListener('click', (e) => {
      try {
        e.preventDefault();
        const id = a.getAttribute('data-article-link') || (a.getAttribute('href') || '').replace(/^#/, '');
        if (!id) return;
        if (typeof loadArticle === 'function' && window.articles[id]) {
          loadArticle(id);
        } else {
          location.hash = id;
        }
      } catch (err) {
        console.warn('bindArticleLinkHandlers handler failed', err);
      }
    });
  });
}

/* Add back to home functionality */
function addBackButton() {
  if (document.querySelector('.back-home')) return;
  
  const backBtn = document.createElement('button');
  backBtn.className = 'back-home';
  backBtn.innerHTML = '← Back to Home';
  backBtn.addEventListener('click', () => {
    // fade out article
    articleContainer.classList.remove('show');
    
    setTimeout(() => {
      articleContainer.innerHTML = '';
      homeSection.style.display = 'flex';
      homeSection.classList.add('fade-in');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      setTimeout(() => {
        homeSection.classList.remove('fade-in');
      }, 400);
    }, 300);
  });
  
  articleContainer.insertBefore(backBtn, articleContainer.firstChild);
}

/* Favorites functionality */
let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

function addFavoriteButton(articleId) {
  const isFavorite = favorites.includes(articleId);
  const favBtn = document.createElement('button');
  favBtn.className = 'favorite-btn';
  favBtn.innerHTML = isFavorite ? '⭐ Favorited' : '☆ Add to Favorites';
  favBtn.style.cssText = 'background: rgba(255,215,0,0.2); border: 1px solid rgba(255,215,0,0.5); color: #ffd700; padding: 8px 16px; border-radius: 6px; margin-left: 12px; cursor: pointer; transition: all 0.2s ease;';
  
  favBtn.addEventListener('click', () => {
    if (favorites.includes(articleId)) {
      favorites = favorites.filter(id => id !== articleId);
      favBtn.innerHTML = '☆ Add to Favorites';
    } else {
      favorites.push(articleId);
      favBtn.innerHTML = '⭐ Favorited';
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavorites();
  });
  
  const backBtn = document.querySelector('.back-home');
  if (backBtn) {
    backBtn.parentNode.insertBefore(favBtn, backBtn.nextSibling);
  }
}

function updateFavorites() {
  const container = document.getElementById('favorites-links');
  if (!container) return;
  
  if (favorites.length === 0) {
    container.innerHTML = '<div class="no-favorites">No favorites yet - click ⭐ on any article</div>';
    return;
  }
  
  container.innerHTML = favorites.map(id => {
    const titleMatch = window.articles[id]?.match(/<h1[^>]*class=["']title["'][^>]*>([\s\S]*?)<\/h1>/i);
    const title = titleMatch ? titleMatch[1].trim() : id;
    return `<button class="favorite-item" data-article="${id}">${title}</button>`;
  }).join('');
  
  container.querySelectorAll('.favorite-item').forEach(item => {
    item.addEventListener('click', () => {
      const articleId = item.dataset.article;
      if (window.articles[articleId]) loadArticle(articleId);
    });
  });
}

// Initialize favorites on page load
updateFavorites();

/* Setup accordion and tabs inside the injected article */
function setupAccordionAndTabs() {
  const article = document.getElementById('article-container');

  if (!article) return;

  // --- 1. Setup machine variant tabs FIRST ---
  const variants = article.querySelectorAll('.machine-variant');
  const buttons = article.querySelectorAll('.machine-tabs button');

  // Hide all variants initially
  variants.forEach(sec => {
    sec.style.display = 'none';
  });
  
  // Show normal variant
  const normalVariant = article.querySelector('.machine-variant[data-variant-section="normal"]');
  if (normalVariant) normalVariant.style.display = 'block';
  
  // Set active button
  buttons.forEach(btn => btn.classList.remove('active'));
  const normalBtn = article.querySelector('.machine-tabs button[data-variant="normal"]');
  if (normalBtn) normalBtn.classList.add('active');

  // Tab click events
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const variant = btn.dataset.variant;
      
      variants.forEach(sec => {
        sec.style.display = 'none';
      });
      
      const targetVariant = article.querySelector(`.machine-variant[data-variant-section="${variant}"]`);
      if (targetVariant) targetVariant.style.display = 'block';
      
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // --- 2. Setup accordions ---
  const accordionItems = article.querySelectorAll('.accordion-item');
  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');
    const chev = header.querySelector('.chev');

    if (!header || !content) return;

    // Force closed state with !important
    header.setAttribute('aria-expanded', 'false');
    content.classList.remove('open');
    content.style.setProperty('max-height', '0px', 'important');
    content.style.setProperty('overflow', 'hidden', 'important');
    content.style.setProperty('padding-top', '0px', 'important');
    content.style.setProperty('padding-bottom', '0px', 'important');
    content.style.setProperty('display', 'block', 'important');
    if (chev) chev.style.transform = 'rotate(0deg)';

    // Add click event
    header.addEventListener('click', () => {
      const isOpen = content.classList.contains('open');

      // Close all other accordions in same container
      const parentAccordion = header.closest('.accordion');
      if (parentAccordion) {
        parentAccordion.querySelectorAll('.accordion-content').forEach(c => {
          if (c !== content) {
            c.classList.remove('open');
            c.style.maxHeight = '0px';
            c.style.paddingTop = '0px';
            c.style.paddingBottom = '0px';
            const h = c.previousElementSibling;
            if (h) h.setAttribute('aria-expanded', 'false');
            const cv = h.querySelector('.chev');
            if (cv) cv.style.transform = 'rotate(0deg)';
          }
        });
      }

      // Toggle current
      if (!isOpen) {
        content.classList.add('open');
        content.style.paddingTop = '14px';
        content.style.paddingBottom = '14px';
        content.style.maxHeight = (content.scrollHeight + 20) + 'px';
        header.setAttribute('aria-expanded', 'true');
        if (chev) chev.style.transform = 'rotate(180deg)';
      } else {
        content.classList.remove('open');
        content.style.maxHeight = '0px';
        content.style.paddingTop = '0px';
        content.style.paddingBottom = '0px';
        header.setAttribute('aria-expanded', 'false');
        if (chev) chev.style.transform = 'rotate(0deg)';
      }
    });
  });
}

/* Enhanced SEARCH behavior with keyboard navigation */
const searchLoading = document.getElementById('search-loading');
const searchIcon = document.querySelector('.search-icon');

searchBar.addEventListener('input', (e) => {
  const q = e.target.value.trim();
  currentHighlight = -1;
  
  if (!q) {
    articleContainer.innerHTML = '';
    homeSection.style.display = 'flex';
    closeSearchResults();
    hideSearchLoading();
    return;
  }
  
  showSearchLoading();
  setTimeout(() => {
    showSearchMatches(q);
    hideSearchLoading();
  }, 150);
});

function showSearchLoading() {
  if (searchLoading) searchLoading.hidden = false;
  if (searchIcon) searchIcon.style.opacity = '0';
}

function hideSearchLoading() {
  if (searchLoading) searchLoading.hidden = true;
  if (searchIcon) searchIcon.style.opacity = '1';
}

/* Back to home button */
const backToHomeBtn = document.getElementById('back-to-home');
if (backToHomeBtn) {
  backToHomeBtn.addEventListener('click', () => {
    // Hide article and show home
    articleContainer.innerHTML = '';
    homeSection.style.display = '';
    homeSection.classList.remove('fade-out');
    
    // Hide back to home button
    backToHomeBtn.hidden = true;
    
    // Clear search
    searchBar.value = '';
    closeSearchResults();
  });
}

/* Keyboard navigation */
searchBar.addEventListener('keydown', (e) => {
  const items = searchResults.querySelectorAll('.result-item');
  
  switch(e.key) {
    case 'ArrowDown':
      e.preventDefault();
      currentHighlight = Math.min(currentHighlight + 1, items.length - 1);
      highlightResult(currentHighlight);
      break;
      
    case 'ArrowUp':
      e.preventDefault();
      currentHighlight = Math.max(currentHighlight - 1, -1);
      highlightResult(currentHighlight);
      break;
      
    case 'Enter':
      e.preventDefault();
      if (currentHighlight >= 0) {
        selectHighlightedResult();
      } else if (items.length > 0) {
        items[0].click();
      }
      break;
      
    case 'Escape':
      closeSearchResults();
      searchBar.blur();
      break;
  }
});

/* Global keyboard shortcuts */
document.addEventListener('keydown', (e) => {
  // Ctrl/Cmd + K to focus search
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    searchBar.focus();
    searchBar.select();
  }
  
  // Escape to go home
  if (e.key === 'Escape' && !searchResults.querySelector('.result-item')) {
    const backBtn = document.getElementById('back-to-home');
    if (backBtn && !backBtn.hidden) {
      backBtn.click();
    }
  }
});

/* Close results when clicking outside */
document.addEventListener('click', (ev) => {
  if (!ev.target.closest('.search-wrap') && !ev.target.closest('#search-results') && ev.target !== searchBar) {
    closeSearchResults();
  }
});

/* Category navigation */
document.querySelectorAll('.category-card').forEach(card => {
  card.addEventListener('click', () => {
    const category = card.dataset.category;
    searchBar.value = category;
    searchBar.dispatchEvent(new Event('input'));
  });
});



/* CTA button: open "explore first match" by showing results focused */
ctaExplore?.addEventListener('click', () => {
  searchBar.value = 'machines';
  searchBar.focus();
  searchBar.dispatchEvent(new Event('input'));
});

/* Analytics tracking */
let analytics = JSON.parse(localStorage.getItem('analytics') || '{}');

function trackArticleView(articleId) {
  analytics[articleId] = (analytics[articleId] || 0) + 1;
  localStorage.setItem('analytics', JSON.stringify(analytics));
}

function getPopularArticles() {
  return Object.entries(analytics)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 5)
    .map(([id]) => id);
}

/* Recent searches functionality */
let recentSearches = JSON.parse(localStorage.getItem('recentSearches') || '[]');

function addToRecent(articleId) {
  const titleMatch = window.articles[articleId].match(/<h1[^>]*class=["']title["'][^>]*>([\s\S]*?)<\/h1>/i);
  const title = titleMatch ? titleMatch[1].trim() : articleId;
  
  recentSearches = recentSearches.filter(item => item.id !== articleId);
  recentSearches.unshift({ id: articleId, title });
  recentSearches = recentSearches.slice(0, 6);
  
  localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
  updateRecentLinks();
}

function updateRecentLinks() {
  const container = document.getElementById('recent-links');
  if (!container) return;
  
  if (recentSearches.length === 0) {
    container.innerHTML = '<div class="no-recent">No recent searches yet</div>';
    return;
  }
  
  container.innerHTML = recentSearches.map(item => 
    `<button class="quick-link" data-article="${item.id}">${item.title}</button>`
  ).join('');
  
  container.querySelectorAll('.quick-link').forEach(link => {
    link.addEventListener('click', () => {
      const articleId = link.dataset.article;
      if (articleId && window.articles[articleId]) {
        loadArticle(articleId);
      }
    });
  });
}

// Initialize recent links on page load
updateRecentLinks();

/* Theme toggle functionality */
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
let isDark = localStorage.getItem('theme') !== 'light';

function updateTheme() {
  if (isDark) {
    document.body.classList.remove('light-theme');
    themeIcon.textContent = '🌙';
  } else {
    document.body.classList.add('light-theme');
    themeIcon.textContent = '☀️';
  }
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

themeToggle?.addEventListener('click', () => {
  isDark = !isDark;
  updateTheme();
});

// Initialize theme
updateTheme();

/* Back to top button functionality */
const backToTopBtn = document.getElementById('back-to-top');

function updateBackToTop() {
  if (window.scrollY > 300) {
    backToTopBtn.hidden = false;
  } else {
    backToTopBtn.hidden = true;
  }
}

backToTopBtn?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', updateBackToTop);

/* Start state: show home */
homeSection.style.display = 'flex';
closeSearchResults();

/* ============================
   Dynamic scroll-based lighting
   ============================ */
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    document.body.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
  }

  // Parallax effect
  document.body.style.backgroundPositionY = -(window.scrollY * 0.15) + "px";
});


/* --- Auto-link capitalized words to article IDs (robust version) --- */


/* --- Auto-link capitalized words to article IDs (robust version, with "no self-link" rule) --- */
function slugifyForArticle(word) {
  const splitCamel = word.replace(/([a-z])([A-Z])/g, '$1-$2');
  return splitCamel
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, '-')
    .replace(/[^a-z0-9\-]+/g, '')
    .replace(/\-+/g, '-')
    .replace(/^\-+|\-+$/g, '');
}

function autoLinkCapitalizedWords(container, currentID) {
  if (!container) return;

  // All available article IDs
  const articleIDs = new Set(Object.keys(articles || {}));

  // Walk text nodes safely
  const walker = document.createTreeWalker(
    container,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;

        const forbidden = ['A','SCRIPT','STYLE','TEXTAREA','CODE','PRE','H1','H2','H3','H4','H5','H6'];
        let parent = node.parentNode;
        while (parent && parent.nodeType === 1) {
          if (forbidden.includes(parent.nodeName)) return NodeFilter.FILTER_REJECT;
          parent = parent.parentNode;
        }

        return NodeFilter.FILTER_ACCEPT;
      }
    }
  );

  const nodes = [];
  let node;
  while (node = walker.nextNode()) nodes.push(node);

  // Match a capitalized word or Title Case phrase (subsequent words must also be capitalized)
  const capitalizedPattern = /\b([A-Z][A-Za-z0-9]*(?:[ \-][A-Z][A-Za-z0-9]*)*)([.,;:!?)\]\"]?)/g;

  nodes.forEach(textNode => {
    const text = textNode.nodeValue;
    let match;
    let lastIndex = 0;
    const frag = document.createDocumentFragment();
    let replacedAnything = false;

    while ((match = capitalizedPattern.exec(text)) !== null) {
      const fullMatch = match[0];
      const wordGroup = match[1];
      const punct = match[2] || '';

      if (match.index > lastIndex) {
        frag.appendChild(document.createTextNode(text.slice(lastIndex, match.index)));
      }

      // Generate ID candidates with some tolerant variants
      const candidates = [];
      const slugified = slugifyForArticle(wordGroup);
      const lower = wordGroup.toLowerCase();                     // original lowercased phrase
      candidates.push(slugified);                                // slugified/hyphenated
      candidates.push(lower);                                    // lowercased with spaces
      candidates.push(lower.replace(/\s+/g, '-'));              // spaces -> hyphen
      candidates.push(lower.replace(/-/g, ''));                  // remove hyphens
      const firstWord = wordGroup.split(/\s|-/)[0];              // first segment
      if (firstWord && firstWord !== wordGroup)
        candidates.push(slugifyForArticle(firstWord));
      // remove duplicates while preserving order
      const seen = new Set();
      const uniqCandidates = [];
      for (const c of candidates) if (c && !seen.has(c)) { seen.add(c); uniqCandidates.push(c); }
      // swap to use uniqCandidates below
      const _candidates = uniqCandidates;

      let foundID = null;
      for (const c of _candidates) {
        if (articleIDs.has(c)) {
          foundID = c;
          break;
        }
      }

      // 🛑 Rule: do NOT link the article to itself
      if (foundID && foundID === currentID) {
        frag.appendChild(document.createTextNode(fullMatch));
      } else if (foundID) {
        replacedAnything = true;
        // autoLink mapping created

        const a = document.createElement('a');
        a.href = `#${foundID}`;
        // do not add/modify classes on existing elements — keep anchor minimal
        a.setAttribute('data-article-link', foundID);
        a.textContent = wordGroup;
        // Fallback: bind a direct click handler so links work even if delegation
        // is prevented by other listeners or a service-worker cached script.
        a.addEventListener('click', (e) => {
          e.preventDefault();
          try {
            if (typeof loadArticle === 'function') loadArticle(foundID);
            else location.hash = foundID;
          } catch (err) {
            console.warn('Direct article link handler failed', err);
          }
        });
        // Diagnostic: ensure anchor receives pointer events and bind a direct handler
        // diagnostic attributes/handlers removed

        frag.appendChild(a);
        if (punct) frag.appendChild(document.createTextNode(punct));
      } else {
        frag.appendChild(document.createTextNode(fullMatch));
      }

      lastIndex = match.index + fullMatch.length;
    }

    if (lastIndex < text.length) {
      frag.appendChild(document.createTextNode(text.slice(lastIndex)));
    }

    if (replacedAnything) {
      try {
        if (textNode.parentNode) {
          textNode.parentNode.replaceChild(frag, textNode);
        }
      } catch (e) {
        console.warn('Failed to replace text node in autoLinkCapitalizedWords:', e);
      }
    }
  });

  // diagnostic counter removed
}

// Synonym dictionary: articleID → synonyms you choose
const linkSynonyms = {
    "acid": ["corrosion", "corroding"],
    "fire": ["heat", "burning"],
    "freeze": ["freeze", "brittle"],
    "plasma": ["charged", "energized"],
    "shock": ["electricity", "shocked"],
    "purgewater": ["drenched", "wet"],
    "adhesive": ["sticky", "slowed"],
    // Add more here
};

// Apply auto-linking for synonyms after article loads - safer DOM-based approach
function applySynonymLinks(container) {
    if (!container) return;
    
    // Get current article ID to prevent self-linking
    const currentArticleId = container.querySelector('article')?.id;
    
    // Create a map for faster lookup
    const synonymMap = new Map();
    for (const articleID in linkSynonyms) {
        linkSynonyms[articleID].forEach(word => {
            synonymMap.set(word.toLowerCase(), articleID);
        });
    }
    
    // Walk text nodes safely
    const walker = document.createTreeWalker(
        container,
        NodeFilter.SHOW_TEXT,
        {
            acceptNode(node) {
                if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
                
                const forbidden = ['A', 'SCRIPT', 'STYLE', 'TEXTAREA', 'CODE', 'PRE'];
                let parent = node.parentNode;
                while (parent && parent.nodeType === 1) {
                    if (forbidden.includes(parent.nodeName)) return NodeFilter.FILTER_REJECT;
                    parent = parent.parentNode;
                }
                
                return NodeFilter.FILTER_ACCEPT;
            }
        }
    );
    
    const nodes = [];
    let node;
    while (node = walker.nextNode()) nodes.push(node);
    
    nodes.forEach(textNode => {
        const text = textNode.nodeValue;
        const words = text.split(/(\b\w+\b)/g);
        let hasChanges = false;
        const frag = document.createDocumentFragment();
        
        words.forEach(word => {
            const lowerWord = word.toLowerCase();
            const targetArticleId = synonymMap.get(lowerWord);
            
            // Don't auto-link if synonym points to the same article we're currently viewing
            if (synonymMap.has(lowerWord) && targetArticleId !== currentArticleId) {
                hasChanges = true;
                const a = document.createElement('a');
                a.href = `#${targetArticleId}`;
                // Do not mutate classes on existing elements; use a data attribute for delegation
                a.setAttribute('data-article-link', targetArticleId);
                a.textContent = word;
              a.addEventListener('click', (e) => {
                e.preventDefault();
                try {
                  if (typeof loadArticle === 'function') loadArticle(targetArticleId);
                  else location.hash = targetArticleId;
                } catch (err) {
                  console.warn('Direct synonym link handler failed', err);
                }
              });
                frag.appendChild(a);
            } else {
                frag.appendChild(document.createTextNode(word));
            }
        });
        
        if (hasChanges) {
            try {
                textNode.parentNode.replaceChild(frag, textNode);
            } catch (e) {
                console.warn('Failed to replace text node:', e);
            }
        }
    });
}

// Tips carousel functionality
let currentTipIndex = 0;
const tipCards = document.querySelectorAll('.tip-card');

function showNextTip() {
  if (tipCards.length === 0) return;
  
  // Remove active class from current tip
  tipCards[currentTipIndex].classList.remove('active');
  tipCards[currentTipIndex].classList.add('prev');
  
  // Move to next tip
  currentTipIndex = (currentTipIndex + 1) % tipCards.length;
  
  // Add active class to new tip
  tipCards[currentTipIndex].classList.add('active');
  tipCards[currentTipIndex].classList.remove('prev');
  
  // Clean up prev class after transition
  setTimeout(() => {
    tipCards.forEach(card => {
      if (!card.classList.contains('active')) {
        card.classList.remove('prev');
      }
    });
  }, 500);
}

// Start tips carousel
if (tipCards.length > 0) {
  setInterval(showNextTip, 20000); // Change tip every 20 seconds
}

/* Enhanced search with fuzzy matching and better UX */
class EnhancedSearch {
  constructor() {
    this.searchIndex = new Map();
    this.searchHistory = JSON.parse(localStorage.getItem('searchHistory') || '[]');
    this.maxHistory = 10;
    this.resultCache = new Map();
    this.suggestions = new Set();
    this.init();
  }

  init() {
    this.buildSearchIndex();
    this.setupSearchUI();
  }

  buildSearchIndex() {
    Object.entries(window.articles).forEach(([id, content]) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(content, 'text/html');
      
      const title = doc.querySelector('.title')?.textContent || id;
      const type = doc.querySelector('.infobox')?.textContent || '';
      const tags = Array.from(doc.querySelectorAll('.tag')).map(t => t.textContent);
      const textContent = doc.body.textContent.toLowerCase();
      
      this.searchIndex.set(id, {
        title,
        type,
        tags,
        content: textContent,
        keywords: this.extractKeywords(textContent)
      });
      
      this.suggestions.add(title.toLowerCase());
      tags.forEach(tag => this.suggestions.add(tag.toLowerCase()));
    });
  }

  extractKeywords(text) {
    const commonWords = new Set(['the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'is', 'are', 'was', 'were', 'be', 'been', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may', 'might', 'can', 'cannot', 'this', 'that', 'these', 'those']);
    
    return text
      .split(/\W+/)
      .filter(word => word.length > 2 && !commonWords.has(word))
      .slice(0, 20);
  }

  fuzzyMatch(query, target, threshold = 0.6) {
    if (!query || !target) return 0;
    
    query = query.toLowerCase();
    target = target.toLowerCase();
    
    if (target.includes(query)) return 1;
    
    const matrix = Array(query.length + 1).fill().map(() => Array(target.length + 1).fill(0));
    
    for (let i = 0; i <= query.length; i++) matrix[i][0] = i;
    for (let j = 0; j <= target.length; j++) matrix[0][j] = j;
    
    for (let i = 1; i <= query.length; i++) {
      for (let j = 1; j <= target.length; j++) {
        const cost = query[i - 1] === target[j - 1] ? 0 : 1;
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j - 1] + cost
        );
      }
    }
    
    const distance = matrix[query.length][target.length];
    const similarity = 1 - distance / Math.max(query.length, target.length);
    
    return similarity >= threshold ? similarity : 0;
  }

  getArticleType(id) {
    const normalized = String(id).toLowerCase().replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
    const elements = ['acid', 'freeze', 'fire', 'plasma', 'shock', 'purgewater', 'adhesive'];
    const characters = ['rost', 'gaia', 'sun king avad', 'varl', 'elisabet sobeck', 'aloy', 'erend', 'kotallo', 'sylens', 'tilda'];
    const lore = ['carja', 'tenakth', 'nora', 'far zenith', 'ted faro', 'utaru', 'nemesis', 'extinction signal', 'cradle facilities', 'the old world', 'the new world', 'technology as myth', 'red raids'];
    const subfunctions = ['hades', 'hephaestus', 'apollo', 'artemis', 'minerva', 'aether', 'poseidon', 'demeter', 'eleuthia'];
    
    if (elements.includes(normalized)) return 'Element';
    if (characters.includes(normalized)) return 'Character';
    if (lore.includes(normalized)) return 'Lore';
    if (subfunctions.includes(normalized)) return 'Subfunction';
    return 'Machine';
  }

  search(query) {
    if (!query || query.length < 2) return [];
    
    const cacheKey = query.toLowerCase();
    if (this.resultCache.has(cacheKey)) {
      return this.resultCache.get(cacheKey);
    }
    
    const queryLower = query.toLowerCase();
    const categoryKeywords = ['machines', 'machine', 'elements', 'element', 'characters', 'character', 'lore', 'subfunctions', 'subfunction'];
    const isCategory = categoryKeywords.includes(queryLower);
    
    const results = [];
    
    this.searchIndex.forEach((data, id) => {
      let score = 0;
      let matchType = '';
      
      if (isCategory) {
        const articleType = this.getArticleType(id).toLowerCase();
        const targetType = queryLower.replace(/s$/, '');
        
        if (articleType === targetType) {
          score = 10;
          matchType = 'category';
        }
      } else {
        if (data.title.toLowerCase().includes(queryLower)) {
          score += 10;
          matchType = 'title';
        }
        
        const titleScore = this.fuzzyMatch(query, data.title);
        if (titleScore > 0) {
          score += titleScore * 8;
          matchType = matchType || 'title-fuzzy';
        }
        
        data.tags.forEach(tag => {
          if (tag.toLowerCase().includes(queryLower)) {
            score += 5;
            matchType = matchType || 'tag';
          }
        });
        
        if (data.content.includes(queryLower)) {
          score += 2;
          matchType = matchType || 'content';
        }
        
        data.keywords.forEach(keyword => {
          const keywordScore = this.fuzzyMatch(query, keyword);
          if (keywordScore > 0) {
            score += keywordScore;
            matchType = matchType || 'keyword';
          }
        });
      }
      
      if (score > 0) {
        results.push({
          id,
          title: data.title,
          type: this.getArticleType(id),
          score,
          matchType
        });
      }
    });
    
    const finalResults = results
      .sort((a, b) => b.score - a.score)
      .slice(0, isCategory ? 50 : 8);
    
    this.resultCache.set(cacheKey, finalResults);
    if (this.resultCache.size > 50) {
      const firstKey = this.resultCache.keys().next().value;
      this.resultCache.delete(firstKey);
    }
    
    return finalResults;
  }

  setupSearchUI() {
    if (!searchBar || !searchResults) return;
    
    let searchTimeout;
    
    searchBar.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      const query = e.target.value.trim();
      
      if (query.length === 0) {
        searchResults.hidden = true;
        return;
      }
      
      if (query.length === 1) {
        this.showSuggestions(query);
        return;
      }
      
      searchTimeout = setTimeout(() => {
        this.displayResults(query);
      }, 150);
    });
    
    searchBar.addEventListener('keydown', (e) => {
      const items = searchResults.querySelectorAll('.result-item');
      const current = searchResults.querySelector('.result-item.highlighted');
      
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const next = current?.nextElementSibling || items[0];
        this.highlightResult(next);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prev = current?.previousElementSibling || items[items.length - 1];
        this.highlightResult(prev);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (current) {
          current.click();
        }
      } else if (e.key === 'Escape') {
        searchResults.hidden = true;
        searchBar.blur();
      }
    });
    
    document.addEventListener('click', (e) => {
      if (!searchBar.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.hidden = true;
      }
    });
    
    if (window.innerWidth <= 768) {
      searchBar.addEventListener('focus', () => {
        setTimeout(() => searchBar.scrollIntoView({ behavior: 'smooth', block: 'center' }), 300);
      });
    }
  }

  displayResults(query) {
    const results = this.search(query);
    
    if (results.length === 0) {
      searchResults.innerHTML = '<div class="no-results">No results found</div>';
      searchResults.hidden = false;
      return;
    }
    
    const html = results.map(result => `
      <div class="result-item" data-id="${result.id}" data-match-type="${result.matchType}">
        <div class="result-content">
          <div class="result-title">${this.highlightMatch(result.title, query)}</div>
          <div class="result-meta">${result.type.split(' - ')[0]}</div>
        </div>
        <div class="result-type">${result.type.split(' - ')[0]}</div>
      </div>
    `).join('');
    
    searchResults.innerHTML = html;
    searchResults.hidden = false;
    
    searchResults.querySelectorAll('.result-item').forEach(item => {
      item.addEventListener('click', () => {
        const id = item.dataset.id;
        this.addToHistory(query, id);
        loadArticle(id);
        searchResults.hidden = true;
        searchBar.value = '';
      });
    });
  }

  highlightMatch(text, query) {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<span class="search-hit">$1</span>');
  }

  highlightResult(item) {
    document.querySelectorAll('.result-item').forEach(el => el.classList.remove('highlighted'));
    if (item) item.classList.add('highlighted');
  }

  addToHistory(query, resultId) {
    const entry = { query, resultId, timestamp: Date.now() };
    this.searchHistory = this.searchHistory.filter(h => h.query !== query);
    this.searchHistory.unshift(entry);
    this.searchHistory = this.searchHistory.slice(0, this.maxHistory);
    localStorage.setItem('searchHistory', JSON.stringify(this.searchHistory));
  }

  showSuggestions(query) {
    const matches = Array.from(this.suggestions)
      .filter(s => s.startsWith(query.toLowerCase()))
      .slice(0, 5);
    
    if (matches.length === 0) return;
    
    const html = matches.map(match => `
      <div class="suggestion-item" data-query="${match}">
        <span class="suggestion-text">${match}</span>
      </div>
    `).join('');
    
    searchResults.innerHTML = html;
    searchResults.hidden = false;
    
    searchResults.querySelectorAll('.suggestion-item').forEach(item => {
      item.addEventListener('click', () => {
        const query = item.dataset.query;
        searchBar.value = query;
        this.displayResults(query);
      });
    });
  }
}

// Initialize enhanced search when DOM is loaded
// REMOVED - EnhancedSearch will be initialized after articles load

/* =====================
   Enhanced Performance Manager
   Merged from performance-enhanced.js
   ===================== */
class EnhancedPerformanceManager {
  constructor() {
    this.imageCache = new Map();
    this.lazyImages = [];
    this.intersectionObserver = null;
    this.searchCache = new Map();
    this.searchDebounceTimer = null;
    this.virtualScrollEnabled = false;
    this.prefetchQueue = [];
    this.init();
  }

  init() {
    this.setupLazyLoading();
    this.preloadCriticalResources();
    this.optimizeScrolling();
    this.setupSearchOptimizations();
    this.enableResourceHints();
    this.setupMemoryManagement();
  }

  setupLazyLoading() {
    if ('IntersectionObserver' in window) {
      this.intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            this.loadImage(img).catch(() => {});
          }
        });
      }, {
        rootMargin: '50px 0px',
        threshold: 0.05
      });

      // Observe all lazy images (img[data-src])
      document.querySelectorAll('img[data-src]').forEach(img => {
        img.classList.add('lazy');
        this.intersectionObserver.observe(img);
      });
    }
  }

  loadImage(img) {
    return new Promise((resolve, reject) => {
      const imageUrl = img.dataset.src;
      if (!imageUrl) return resolve();
      if (this.imageCache.has(imageUrl)) {
        img.src = imageUrl;
        img.classList.remove('lazy');
        img.classList.add('lazy-loaded');
        this.intersectionObserver && this.intersectionObserver.unobserve(img);
        resolve();
        return;
      }

      const tempImg = new Image();
      tempImg.onload = () => {
        img.src = imageUrl;
        img.classList.remove('lazy');
        img.classList.add('lazy-loaded');
        this.imageCache.set(imageUrl, true);
        this.intersectionObserver && this.intersectionObserver.unobserve(img);
        resolve();
      };
      tempImg.onerror = () => {
        this.imageCache.set(imageUrl, false);
        reject(new Error('image failed to load'));
      };
      tempImg.src = imageUrl;
    });
  }

  preloadCriticalResources() {
    // Only preload the critical 192 icon and styles; the 512 icon is large and
    // may not be used immediately, avoiding preload prevents "preloaded but not used" warnings.
    const criticalResources = [
      { href: 'images/icon-192.png', as: 'image' },
      { href: 'css/Variables.css', as: 'style' },
      { href: 'css/global.css', as: 'style' }
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = resource.as;
      link.href = resource.href;
      if (resource.as === 'style') link.onload = () => link.rel = 'stylesheet';
      document.head.appendChild(link);
    });
  }

  optimizeScrolling() {
    let ticking = false;
    let lastScrollY = 0;
    const updateScrollElements = () => {
      const scrollY = window.pageYOffset;
      const scrollDirection = scrollY > lastScrollY ? 'down' : 'up';
      this.updateNavigationElements(scrollY);
      this.handleScrollPrefetch(scrollY, scrollDirection);
      lastScrollY = scrollY;
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) { requestAnimationFrame(updateScrollElements); ticking = true; }
    }, { passive: true });
  }

  updateNavigationElements(scrollY) {
    const backToTop = document.getElementById('back-to-top');
    const backToHome = document.getElementById('back-to-home');
    const homeSectionEl = document.getElementById('home-section');
    if (backToTop) backToTop.hidden = scrollY < 300;
    if (backToHome && homeSectionEl) backToHome.hidden = scrollY < 300 || (homeSectionEl.style.display !== 'none');
  }

  handleScrollPrefetch(scrollY, direction) {
    if (direction === 'down' && scrollY > 500 && this.prefetchQueue.length > 0) {
      const nextArticle = this.prefetchQueue.shift();
      this.prefetchArticle(nextArticle);
    }
  }

  setupSearchOptimizations() {
    const searchInput = document.getElementById('searchBar');
    if (!searchInput) return;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(this.searchDebounceTimer);
      this.searchDebounceTimer = setTimeout(() => this.performOptimizedSearch(e.target.value), 150);
    });
    searchInput.addEventListener('keydown', (e) => this.handleSearchKeyboard(e));
  }

  performOptimizedSearch(query) {
    if (query.length < 2) return;
    if (this.searchCache.has(query)) { this.displaySearchResults(this.searchCache.get(query)); return; }
    if (window.Worker) this.searchWithWorker(query); else this.searchWithMainThread(query);
  }

  searchWithWorker(query) { this.searchWithMainThread(query); }
  searchWithMainThread(query) { const results = this.fuzzySearch(query); this.searchCache.set(query, results); this.displaySearchResults(results); }

  fuzzySearch(query) {
    const out = [];
    const q = query.toLowerCase();
    for (const id of Object.keys(window.articles)) {
      const titleMatch = window.articles[id].match(/<h1[^>]*class=["']title["'][^>]*>([\s\S]*?)<\/h1>/i);
      const title = titleMatch ? titleMatch[1].toLowerCase() : id.toLowerCase();
      if (title.includes(q)) out.push({ id, title });
    }
    return out.slice(0, 30);
  }

  displaySearchResults(results) {
    const resultsContainer = document.getElementById('search-results');
    if (!resultsContainer) return; if (!results || results.length === 0) { resultsContainer.hidden = true; return; }
    resultsContainer.innerHTML = results.map(r => `<div class="result-item" data-article="${r.id}">${r.title}</div>`).join('');
    resultsContainer.hidden = false;
  }

  handleSearchKeyboard(e) {
    const results = document.querySelectorAll('#search-results .result-item');
    let currentFocus = document.querySelector('.keyboard-focused');
    switch(e.key) {
      case 'ArrowDown': e.preventDefault(); this.focusNextResult(results, currentFocus, 1); break;
      case 'ArrowUp': e.preventDefault(); this.focusNextResult(results, currentFocus, -1); break;
      case 'Enter': if (currentFocus) currentFocus.click(); break;
      case 'Escape': this.clearSearchFocus(); break;
    }
  }

  focusNextResult(results, current, direction) {
    if (current) current.classList.remove('keyboard-focused');
    let index = current ? Array.from(results).indexOf(current) : -1; index += direction;
    if (index < 0) index = results.length - 1; if (index >= results.length) index = 0;
    if (results[index]) { results[index].classList.add('keyboard-focused'); results[index].scrollIntoView({ block: 'nearest' }); }
  }

  clearSearchFocus() { document.querySelectorAll('.keyboard-focused').forEach(el => el.classList.remove('keyboard-focused')); }

  enableResourceHints() {
    const dnsPrefetch = ['fonts.googleapis.com', 'fonts.gstatic.com']; dnsPrefetch.forEach(domain => { const link = document.createElement('link'); link.rel = 'dns-prefetch'; link.href = `//${domain}`; document.head.appendChild(link); });
    const preconnect = ['https://fonts.googleapis.com']; preconnect.forEach(origin => { const link = document.createElement('link'); link.rel = 'preconnect'; link.href = origin; link.crossOrigin = 'anonymous'; document.head.appendChild(link); });
  }

  setupMemoryManagement() {
    setInterval(() => { if (this.searchCache.size > 100) { const entries = Array.from(this.searchCache.entries()); const recentEntries = entries.slice(-50); this.searchCache.clear(); recentEntries.forEach(([key, value]) => this.searchCache.set(key, value)); } }, 300000);
  }

  prefetchArticle(articleId) {
    if (!articleId || this.imageCache.has(`article-${articleId}`)) return;
    fetch(`#${articleId}`).then(() => this.imageCache.set(`article-${articleId}`, true)).catch(() => {});
  }

  debounce(func, wait) { let timeout; return function executedFunction(...args) { const later = () => { clearTimeout(timeout); func(...args); }; clearTimeout(timeout); timeout = setTimeout(later, wait); }; }
  throttle(func, limit) { let inThrottle; return function() { const args = arguments; const context = this; if (!inThrottle) { func.apply(context, args); inThrottle = true; setTimeout(() => inThrottle = false, limit); } }; }
  measurePerformance(name, fn) { const start = performance.now(); const result = fn(); const end = performance.now(); console.log(`${name} took ${end - start} milliseconds`); return result; }
  getMemoryUsage() { if (performance.memory) { return { used: Math.round(performance.memory.usedJSHeapSize / 1048576), total: Math.round(performance.memory.totalJSHeapSize / 1048576), limit: Math.round(performance.memory.jsHeapSizeLimit / 1048576) }; } return null; }
}

// Initialize and expose
const enhancedPerfManager = new EnhancedPerformanceManager();
window.enhancedPerfManager = enhancedPerfManager;


/* Articles will be loaded from separate script tag as window.articles */
let articlesLoaded = false;

// Show loading state while articles load
function showArticlesLoading() {
  const searchBar = document.getElementById('searchBar');
  if (searchBar) {
    searchBar.disabled = true;
    searchBar.placeholder = 'Loading articles...';
  }
}

// Hide loading state when articles are ready
function hideArticlesLoading() {
  const searchBar = document.getElementById('searchBar');
  if (searchBar) {
    searchBar.disabled = false;
    searchBar.placeholder = "Try: Thunderjaw, Frost, GAIA, or 'machines'";
    searchBar.focus();
  }
}

// Check if articles are loaded (they come from articles.js script tag)
function checkArticlesLoaded() {
  if (typeof window.articles !== 'undefined' && Object.keys(window.articles).length > 0) {
    articlesLoaded = true;
    console.log('Articles loaded:', Object.keys(window.articles).length, 'articles');
    hideArticlesLoading();
    
    // Initialize EnhancedSearch after articles are loaded
    if (typeof enhancedSearch === 'undefined') {
      window.enhancedSearch = new EnhancedSearch();
      console.log('EnhancedSearch initialized');
    }
    
    if (window.pendingArticleLoad) {
      loadArticle(window.pendingArticleLoad);
      window.pendingArticleLoad = null;
    }
  } else {
    setTimeout(checkArticlesLoaded, 50);
  }
}

// Start checking when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    showArticlesLoading();
    checkArticlesLoaded();
  });
} else {
  showArticlesLoading();
  checkArticlesLoaded();
}

