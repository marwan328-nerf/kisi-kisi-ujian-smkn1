document.addEventListener('DOMContentLoaded', () => {
    
    // Dapatkan elemen burung yang sudah ada di HTML
    const manualBird = document.getElementById('manualBird');
    
    if (manualBird) {
        // Beri izin mouse untuk berinteraksi dengan burung
        manualBird.style.pointerEvents = 'auto'; 
        
        // Tambahkan event listener untuk klik
        manualBird.addEventListener('click', function() {
            // 1. Matikan klik berulang
            this.style.pointerEvents = 'none';
            
            // 2. Tambahkan kelas CSS 'exploding'
            this.classList.add('exploding');
            
            // 3. Hapus elemen setelah animasi ledakan selesai (0.5 detik)
            setTimeout(() => {
                this.remove();
            }, 500); 
        });
    }

    // CATATAN: Fungsi 'spawnBird' yang membuat burung secara acak telah dihapus 
    // karena kita menggunakan burung manual ('manualBird').

});
