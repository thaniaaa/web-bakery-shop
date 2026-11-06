# Product Requirements Document — Bakery Landing Page

## 1. Ringkasan

Landing page toko bakery dibangun menggunakan **React**, **Vite**, dan **Tailwind CSS**. Halaman menampilkan produk unggulan, informasi toko, serta formulir newsletter dengan pengalaman pengguna yang responsif dan konsisten.

## 2. Tujuan

- Memperkenalkan brand dan kategori produk bakery.
- Menampilkan daftar makanan unggulan dari backend.
- Mengumpulkan email pelanggan melalui newsletter.
- Menjaga kode tetap bersih, modular, dan mudah dirawat.

## 3. Breakdown Komponen UI

| Section | Tanggung Jawab |
| --- | --- |
| `Navbar` | Logo, navigasi utama, dan aksi terkait pengguna. |
| `HeroSection` | Headline, deskripsi singkat, CTA, dan visual utama. |
| `CategoriesSection` | Menampilkan kategori produk bakery. |
| `FeaturedFood` | Mengambil dan menampilkan produk unggulan dalam bentuk kartu. |
| `AboutUsSection` | Menjelaskan profil, nilai, dan keunggulan toko. |
| `NewsletterSection` | Form berlangganan newsletter menggunakan email. |
| `Footer` | Navigasi tambahan, informasi kontak, dan hak cipta. |

## 4. Arsitektur Komponen

Aplikasi menggunakan prinsip **Component Composition** dengan dua tingkatan komponen:

### Base UI Components

Komponen dasar yang dapat digunakan ulang dan menerima props fleksibel:

- `Button`
- `Card`
- `Input`
- `Skeleton`

### Section Components

Komponen halaman yang menyusun Base UI Components menjadi section utuh, antara lain:

- `Navbar`
- `HeroSection`
- `CategoriesSection`
- `FeaturedFood`
- `AboutUsSection`
- `NewsletterSection`
- `Footer`

`App.jsx` menjadi entrypoint yang ramping dan hanya menyusun rangkaian Section Components sesuai urutan halaman.

## 5. Kontrak API Backend

### GET `/api/menu`

Mengambil daftar produk bakery.

**Respons berhasil — `200 OK`**

```json
[
  {
    "id": 1,
    "name": "Butter Croissant",
    "price": 25000,
    "image": "https://example.com/images/butter-croissant.jpg"
  }
]
```

| Field | Tipe | Keterangan |
| --- | --- | --- |
| `id` | number | Identitas unik produk. |
| `name` | string | Nama produk. |
| `price` | number | Harga produk dalam rupiah. |
| `image` | string | URL gambar produk. |

### POST `/api/subscribe`

Mendaftarkan email pelanggan ke newsletter.

**Payload**

```json
{
  "email": "customer@example.com"
}
```

**Respons berhasil — `200 OK`**

```json
{
  "success": true,
  "message": "Berhasil berlangganan newsletter."
}
```

**Validasi gagal — `400 Bad Request`**

Terjadi jika email kosong atau format email tidak valid.

```json
{
  "success": false,
  "message": "Email wajib diisi dan harus valid."
}
```

## 6. Handling UI States

### Loading

- Tampilkan `Skeleton` saat data produk sedang dimuat.
- Tombol submit newsletter berada dalam keadaan disabled dan menampilkan indikator proses selama request berlangsung.

### Error

- Tampilkan pesan error yang jelas ketika pengambilan data produk gagal.
- Sediakan tombol **Coba Lagi** untuk mengulang request.
- Tampilkan pesan validasi di dekat input jika proses subscribe gagal.

### Success

- Produk berhasil ditampilkan dalam kumpulan `Card`.
- Setelah subscribe berhasil, tampilkan pesan sukses dan kosongkan input email.

## 7. Penyimpanan Data

Data menu dan daftar email pelanggan disimpan sementara dalam **in-memory array** di backend. Data akan kembali ke kondisi awal ketika server dimulai ulang; belum ada penyimpanan persisten atau database.

## 8. Kriteria Selesai

- Seluruh section utama tampil dan tersusun responsif.
- Data produk berasal dari `GET /api/menu` dan memiliki loading, error, serta success state.
- Form newsletter terhubung ke `POST /api/subscribe` dan menangani respons `200` maupun `400`.
- `App.jsx` hanya berfungsi sebagai penyusun section utama.
- Base UI Components dapat digunakan ulang tanpa bergantung pada satu section tertentu.
