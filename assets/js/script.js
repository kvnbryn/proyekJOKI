document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');

    if (searchForm) {
        searchForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah form mengirim data secara tradisional
            
            const query = searchInput.value.trim(); // Ambil nilai input & hapus spasi
            
            if (query) {
                // Redirect ke halaman pencarian dengan query sebagai parameter
                window.location.href = `search.html?q=${encodeURIComponent(query)}`;
            }
        });
    }
});