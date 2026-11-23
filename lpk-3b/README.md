# ⚛️ Pertemuan 5: React Fundamentals (LKP 3B)

Folder ini berisi hasil pengerjaan **Lembar Kerja Praktikum (LKP) 3B** untuk mata kuliah Pemrograman Berbasis Platform, yaitu **Konversi To-Do List ke React** menggunakan Vite.

## 🎯 Tujuan Praktikum
1. Membangun aplikasi web berbasis komponen menggunakan React dan Vite.
2. Menerapkan komunikasi data antar komponen (*parent* ke *child*) menggunakan **Props**.
3. Mengelola state lokal dan global aplikasi menggunakan hook **`useState`**.
4. Menerapkan persistensi data ke `localStorage` menggunakan hook **`useEffect`**.

## 📂 Struktur Proyek
```text
lpk-3b/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── App.css
│   └── components/
│       ├── TodoForm.jsx
│       ├── TodoList.jsx
│       ├── TodoItem.jsx
│       └── TodoStats.jsx
├── screenshot-hasil.png
└── screenshots/
```

## 🚀 Cara Menjalankan
1. Buka terminal pada folder `lpk-3b`.
2. Pasang dependensi proyek:
   ```bash
   npm install
   ```
3. Jalankan server pengembangan Vite:
   ```bash
   npm run dev
   ```
4. Buka alamat `http://localhost:5173` di web browser untuk menguji fitur tambah tugas, toggle selesai, hapus tugas, dan *refresh* halaman.
