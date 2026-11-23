# 📝 Pertemuan 4: JavaScript Fundamentals & DOM (LKP 3A)

Folder ini berisi hasil pengerjaan **Lembar Kerja Praktikum (LKP) 3A** untuk mata kuliah Pemrograman Berbasis Platform, yaitu **Aplikasi To-Do List dengan JavaScript Murni**.

## 🎯 Tujuan Praktikum
1. Menggunakan JavaScript ES6+ (`let`/`const`, *arrow function*, *template literal*, dan *array methods*) untuk logika aplikasi.
2. Menerapkan manipulasi DOM dan *event delegation* untuk interaksi dinamis (tambah, tandai selesai, hapus tugas).
3. Menerapkan `localStorage` agar daftar tugas tetap tersimpan secara persisten setelah halaman di-*refresh*.

## 📂 Struktur File
*   `index.html` - Struktur halaman utama aplikasi To-Do List.
*   `style.css` - Styling antarmuka aplikasi To-Do List.
*   `app.js` - Logika state, manipulasi DOM, event handling, dan persistensi `localStorage`.
*   `screenshot-hasil.png` - Screenshot hasil akhir pengujian aplikasi.
*   `screenshots/` - Dokumentasi screenshot tahapan pengujian (kondisi awal, tambah 3 tugas, toggle selesai, hapus tugas, dan setelah *refresh*).

## 🚀 Cara Menjalankan & Pengujian
1. Buka file `index.html` menggunakan web browser (Chrome/Edge/Firefox).
2. Tambahkan 3 tugas baru melalui form input dan tombol **Tambah** (atau tekan Enter).
3. Centang 1 tugas untuk menandainya sebagai selesai (teks tercoret dan penghitung tugas belum selesai berkurang).
4. Klik tombol **Hapus** pada 1 tugas untuk menghapusnya dari daftar.
5. *Refresh* halaman (`F5` / `Ctrl+R`) untuk memastikan data tetap tersimpan di `localStorage`.
