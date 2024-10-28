class UI {
  constructor() {
      this.tagsManager = new TagsManager(tagsData);
      this.tabs = ['All', 'Engine', 'Technical', 'Language', 'Genre', 'Kinks', 'Characters', 'Meta', 'Other'];
      this.init();
  }

  init() {
      this.initializeTabs();
      this.initializeSearchListener();
      this.initializeModalListener();
      this.updateUI();
  }

  initializeTabs() {
      const tabContainer = document.getElementById('tabContainer');
      this.tabs.forEach(tab => {
          const button = document.createElement('button');
          button.textContent = tab;
          button.className = `tab-button ${tab === this.tagsManager.activeTab ? 'active' : ''}`;
          button.addEventListener('click', () => {
              this.tagsManager.setTab(tab);
              this.updateUI();
          });
          tabContainer.appendChild(button);
      });
  }

  initializeSearchListener() {
      const searchInput = document.getElementById('searchInput');
      searchInput.addEventListener('input', (e) => {
          this.tagsManager.setSearchQuery(e.target.value);
          this.updateUI();
      });
  }

  initializeModalListener() {
      const modal = document.getElementById('tagModal');
      const closeButton = document.getElementById('closeModal');
      
      closeButton.addEventListener('click', () => {
          modal.classList.add('hidden');
      });

      window.addEventListener('click', (e) => {
          if (e.target === modal) {
              modal.classList.add('hidden');
          }
      });
  }

  updateUI() {
      this.updateTabs();
      this.updateTagsGrid();
      this.updatePagination();
  }

  updateTabs() {
      const buttons = document.querySelectorAll('.tab-button');
      buttons.forEach(button => {
          button.classList.toggle('active', button.textContent === this.tagsManager.activeTab);
      });
  }

  updateTagsGrid() {
      const grid = document.getElementById('tagsGrid');
      grid.innerHTML = '';

      this.tagsManager.getCurrentPageTags().forEach(tag => {
          const button = document.createElement('button');
          button.className = `tag-button ${tag.isExtreme ? 'extreme' : ''}`;
          button.innerHTML = `
              <span class="block font-medium">${tag.name}</span>
              <span class="text-sm text-gray-400">${tag.category}</span>
          `;
          button.addEventListener('click', () => this.showTagDetails(tag));
          grid.appendChild(button);
      });
  }

  updatePagination() {
      const pagination = document.getElementById('pagination');
      pagination.innerHTML = '';

      const totalPages = this.tagsManager.getTotalPages();
      if (totalPages <= 1) return;

      for (let i = 1; i <= totalPages; i++) {
          const button = document.createElement('button');
          button.textContent = i;
          button.className = `pagination-button ${i === this.tagsManager.currentPage ? 'active' : ''}`;
          button.addEventListener('click', () => {
              this.tagsManager.setPage(i);
              this.updateUI();
          });
          pagination.appendChild(button);
      }
  }

  showTagDetails(tag) {
      const modal = document.getElementById('tagModal');
      const content = document.getElementById('modalContent');

      content.innerHTML = `
          <h2 class="text-2xl font-bold mb-4">${tag.name}</h2>
          ${tag.isExtreme ? `
              <div class="mb-4 bg-red-900 border border-red-700 p-4 rounded">
                  <p class="text-white">This tag is marked as extreme content</p>
              </div>
          ` : ''}
          <div class="space-y-4">
              <div>
                  <span class="text-gray-400">Category:</span>
                  <span class="ml-2">${tag.category}</span>
              </div>
              <div>
                  <span class="text-gray-400">Description:</span>
                  <p class="mt-1">${tag.description}</p>
              </div>
              ${tag.comment ? `
                  <div>
                      <span class="text-gray-400">Comment:</span>
                      <p class="mt-1">${tag.comment}</p>
                  </div>
              ` : ''}
          </div>
      `;

      modal.classList.remove('hidden');
  }
}

// Initialize the UI when the document is loaded
document.addEventListener('DOMContentLoaded', () => {
  new UI();
});