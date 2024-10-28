

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
          button.className = `tag-button ${tag.status === 2 ? 'extreme' : ''} ${tag.status === 3 ? 'obsolete' : ''} ${this.tagsManager.getMasterTag(tag.name) ? 'slave' : ''}`;
          button.innerHTML = `
              <span class="block font-medium ${tag.status === 3 ? 'line-through' : ''}">${tag.name}</span>
              <span class="text-sm text-gray-400">${tag.category}</span>
          `;
  
          button.addEventListener('click', () => this.showTagDetails(tag.id));
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

  showTagDetails(tagId) {
    const tag = this.tagsManager.getTagById(tagId);

    if (!tag) {
        console.error("Tag not found:", tagId);
        return;
    }

      const modal = document.getElementById('tagModal');
      const content = document.getElementById('modalContent');

      let statusWarning = '';
      let icon = '';
      let warningClass = '';

      if (tag.status === 2) {
        statusWarning = '<p class="text-white">This tag is marked as extreme content. Viewer discretion is advised.</p>';
        icon = '<i data-lucide="zap" class="h-6 w-6 text-red-500 mr-2"></i>';
        warningClass = 'bg-red-900 border-red-700'; // Red for extreme
    } else if (tag.status === 3) {
        statusWarning = '<p class="text-gray-200">This tag is obsolete and no longer in use.</p>'; // Lighter text for gray background
        icon = '<i data-lucide="x-circle" class="h-6 w-6 text-gray-500 mr-2"></i>';
        warningClass = 'bg-gray-700 border-gray-500'; // Gray for obsolete
    }
    
      let aliasesDisplay = '';
      if (tag.aliases) {
          aliasesDisplay = `<div>
              <span class="text-gray-400">Aliases:</span>
              <span class="ml-2">${tag.aliases.join(', ')}</span>
          </div>`;
      }

      let slaveTagWarning = '';
      const masterTag = this.tagsManager.getMasterTag(tag.name);
      if (masterTag) {
          slaveTagWarning = `
              <div class="mb-4 bg-green-900 border border-green-700 p-4 rounded">
                  <p class="text-white"><i data-lucide="link" class="h-6 w-6 text-green-300 mr-2"></i>This tag is a slave tag of <a href="#" class="underline" onclick="ui.showTagDetails(${masterTag.id})">${masterTag.name}</a>.</p>
              </div>
          `;
      }
  
      let masterTagDisplay = '';
      if (tag.slaveTags) {
          masterTagDisplay = `
             <div>
                 <span class="text-gray-400">Slave Tags:</span>
                 <ul class="mt-1 ml-4 list-disc">
                     ${tag.slaveTags.map(slaveTag => {
                          const slaveTagObj = this.tagsManager.tags.find(t => t.name === slaveTag);  // Find the slave tag object
                          return `<li><a href="#" class="underline" onclick="ui.showTagDetails(${slaveTagObj.id})">${slaveTag}</a></li>`
                      }).join('')}
                 </ul>
             </div>
           `;
      }
      
  


      content.innerHTML = `
          <h2 class="text-2xl font-bold mb-4">${tag.name}</h2>
          ${statusWarning ? `
                    <div class="mb-4 ${warningClass} p-4 rounded border">
                  ${icon}${statusWarning}
              </div>
          ` : ''}
          ${slaveTagWarning}
          <div class="space-y-4">
              <div>
                  <span class="text-gray-400">Category:</span>
                  <span class="ml-2">${tag.category}</span>
              </div>
              <div>
                  <span class="text-gray-400">Description:</span>
                  <p class="mt-1">${tag.description}</p>
              </div>
              ${aliasesDisplay}
              ${tag.comment ? `
                  <div>
                      <span class="text-gray-400">Comment:</span>
                      <p class="mt-1">${tag.comment}</p>
                  </div>
              ` : ''}
              ${masterTagDisplay}
          </div>
      `;


      modal.classList.remove('hidden');
      lucide.createIcons();
  }
}

// Initialize the UI when the document is loaded
document.addEventListener('DOMContentLoaded', () => {

});