class TagsManager {
    constructor(data) {
        this.tags = data.tags;
        this.currentPage = 1;
        this.tagsPerPage = 12;
        this.activeTab = 'All';
        this.searchQuery = '';
    }

    getFilteredTags() {
        const query = this.searchQuery.toLowerCase();
        return this.tags.filter(tag => {
            const matchesSearch = tag.name.toLowerCase().includes(query) || (tag.aliases && tag.aliases.some(alias => alias.toLowerCase().includes(query)));
            const matchesTab = this.activeTab === 'All' || tag.category === this.activeTab;
            return matchesSearch && matchesTab // && tag.status !== 3; // Exclude obsolete tags
        });
    }

    getCurrentPageTags() {
        const filteredTags = this.getFilteredTags();
        const start = (this.currentPage - 1) * this.tagsPerPage;
        const end = start + this.tagsPerPage;
        return filteredTags.slice(start, end);
    }

    getTotalPages() {
        return Math.ceil(this.getFilteredTags().length / this.tagsPerPage);
    }

    setPage(page) {
        this.currentPage = page;
    }

    setTab(tab) {
        this.activeTab = tab;
        this.currentPage = 1;
    }

    setSearchQuery(query) {
        this.searchQuery = query;
        this.currentPage = 1;
    }

    getTagById(id) {
        return this.tags.find(tag => tag.id === id);
    }

    getMasterTag(slaveTag) {
        return this.tags.find(tag => tag.slaveTags && tag.slaveTags.includes(slaveTag));
    }

}
