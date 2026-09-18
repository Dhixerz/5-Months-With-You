# 💖 5 Months With You - Anniversary Webbie

Sebuah website romantis interaktif yang dibuat khusus untuk merayakan 5 bulan anniversary! Website ini menggunakan HTML, CSS, dan JavaScript murni (zero-dependency) sehingga **100% langsung siap di-hosting secara gratis di GitHub Pages**.

---

## ✨ Fitur & Alur Website

1. **Halaman 1 (Cover / Pembuka):**
   - Ucapan romantis: *"Happy 5 Months of Dating Baby!!"*
   - Efek partikel hati melayang (*floating hearts canvas*) dan background glow romantis.
   - Tombol interaktif: *"Do you still remember?"*

2. **Halaman 2 (Video Kenangan 1 - Soda Pop):**
   - Fullscreen video `Soda Poppie` dengan background vignette lembut.
   - Default suara hidup (*sound on*) dengan gesture klik saat transisi.
   - Tombol kontrol audio melayang di pojok kanan bawah (*Audio On / Muted*).
   - Kotak kaca (*glassmorphism*) di tengah: *"I asked you out that day with this song."*
   - Tombol: *"We went from Soda Pop to..."*

3. **Halaman 3 (Video Kenangan 2 - Digi Daga):**
   - Layout portrait aesthetic dengan frame khusus untuk video portrait `Digi Daga`.
   - Tetap ada kontrol audio di pojok kanan bawah.
   - Kalimat: *"To this unclie <3 I love your humor babe!"*
   - Tombol: *"Something for you 💌"*

4. **Halaman 4 (Surat Cinta & Kejutan):**
   - Surat cinta dengan gaya kertas surat mewah dan stempel lilin (*wax seal*).
   - Isi surat lengkap sesuai request dengan tipografi romantis (*Playfair Display* & *Outfit*).
   - Kartu surat dilengkapi *smooth scroll* khusus agar nyaman dibaca di iPhone / HP.
   - Tombol pulsing: *"Press Me 🎁"* yang langsung membuka tautan kejutan `https://love.for-you-always.my.id/gift-1789655270053` di tab yang sama.

5. **Responsif iPhone & Mobile:**
   - Mendukung `100dvh` (dynamic viewport height) agar pas di layar iPhone tanpa tertutup safari bar.
   - Mendukung `env(safe-area-inset-*)` untuk notch dan dynamic island iPhone.
   - Dilengkapi atribut `playsinline` dan `webkit-playsinline` agar video tidak dipaksa fullscreen oleh iOS Safari.

---

## 🚀 Cara Hosting di GitHub Pages (Gratis & Cepat)

### Langkah 1: Buat Repository di GitHub
1. Buka [GitHub](https://github.com/) dan login ke akun kamu.
2. Klik tombol **New** (Buat Repository Baru).
3. Beri nama repository, misalnya: `5-months` atau `for-my-baby`.
4. Pastikan pilih **Public**.
5. Klik **Create repository**.

### Langkah 2: Upload File ke Repository
Kamu bisa upload file lewat terminal git atau langsung lewat web GitHub:

#### Opsi A: Lewat Web GitHub (Paling Mudah & Tanpa Instal Git)
1. Di halaman repository baru kamu, klik tombol **"uploading an existing file"**.
2. Drag & drop file berikut dari folder ini:
   - `index.html`
   - `style.css`
   - `script.js`
3. Klik tombol hijau **Commit changes**.

#### Opsi B: Lewat Terminal / Git
Jalankan perintah berikut di folder ini:
```bash
git init
git add index.html style.css script.js README.md
git commit -m "feat: 5 months anniversary webbie"
git branch -M main
git remote add origin https://github.com/<USERNAME-KAMU>/<NAMA-REPO>.git
git push -u origin main
```

---

### Langkah 3: Aktifkan GitHub Pages (1 Klik)
1. Di repository kamu di GitHub, buka tab **Settings** (di menu atas).
2. Di menu sebelah kiri, klik **Pages**.
3. Pada bagian **Build and deployment** -> **Branch**:
   - Ubah dari *None* menjadi **`main`**.
   - Folder biarkan **`/(root)`**.
4. Klik **Save**.
5. Tunggu sekitar 1–2 menit, GitHub akan menampilkan link website kamu, contohnya:
   ```
   https://<username-kamu>.github.io/<nama-repo>/
   ```
6. Salin link tersebut dan kirimkan ke pacar kamu! 💕
