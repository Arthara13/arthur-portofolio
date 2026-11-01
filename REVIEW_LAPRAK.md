# Audit & Kurasi LAPRAKKU — Arthur Fikry Swara

## Ringkasan

- **19 dokumen** ditemukan dalam `LAPRAKKU.zip`: **18 PDF + 1 DOCX**.
- **0 salinan biner identik** ditemukan (perbandingan SHA-256 untuk semua file).
- Ada **3 kelompok laporan yang sangat terkait temanya**, tetapi **tidak identik**: (1) peta kendali variabel & atribut pada produksi amplop, (2) exponential smoothing CPO, (3) ACF/PACF & simulasi AR. Masing-masing ditempatkan sebagai satu studi kasus di galeri agar tidak tampak duplikat.
- **13 dokumen** dipakai sebagai sumber **10 kartu studi kasus** pada halaman Statistical Lab.
- **6 dokumen** disimpan sebagai kandidat pengembangan selanjutnya, bukan dihapus dari file asli.
- Empat proyek utama dan dua link dashboard Streamlit yang sudah ada tetap dipertahankan.

> Pengecekan duplikat didasarkan pada hash file serta tema, judul, dan metodologi. Ini bukan audit independen atas keakuratan seluruh perhitungan statistik di setiap laporan.

## Dokumen yang ditampilkan

| Dokumen asli | Studi kasus pada website | Perlakuan |
|---|---|---|
| `Lapres_M1_23076_Arthur Fikry Swara.pdf` | Faktor yang Memengaruhi Rata-rata Lama Sekolah | Satu studi kasus |
| `Lapres_M4_076_098_100.pdf` | Segmentasi Kinerja Keuangan Perusahaan BEI | Satu studi kasus |
| `LAPRES M2_046_073_076.pdf` | MANOVA: IPM dan Pendapatan Pekerja Informal | Satu studi kasus |
| `LAPRES_M5_76_098_100.pdf` | Klasifikasi Status Gizi Antarprovinsi | Satu studi kasus |
| `M1_073_076.pdf` | Model Kepemilikan Dana Darurat Mahasiswa | Satu studi kasus |
| `Laporan Akhir Praktikum 3_Arthur Fikry Swara_2043231076.docx` | Peramalan Produksi Crude Palm Oil | Digabung dengan laporan double/triple smoothing |
| `Tugas Praktikum 4_Arthur Fikry Swara_2043231076.pdf` | Peramalan Produksi Crude Palm Oil | Digabung dengan laporan single smoothing |
| `Tugas Praktikum 7_Arthur Fikry Swara_2043231076.pdf` | Peramalan Produksi Almond dengan ARIMA | Satu studi kasus |
| `LAPRES_M1_076_094.pdf` | Pengendalian Kualitas Produksi Amplop | Digabung dengan studi peta kendali atribut |
| `LAPRES M2_046_076.pdf` | Pengendalian Kualitas Produksi Amplop | Digabung dengan studi peta kendali variabel |
| `Project Matkeu_055_076_096.pdf` | Futures & Options: TTF Gas × Volkswagen | Satu studi kasus |
| `Praktikum ACF PACF_Arthur Fikry Swara_076.pdf` | Simulasi Model AR, ACF, dan PACF | Digabung dengan tugas simulasi AR(1) |
| `Praktikum_AR1_Arthur Fikry Swara_076.pdf` | Simulasi Model AR, ACF, dan PACF | Digabung dengan tugas ACF/PACF |

## Arsip — belum dipilih untuk galeri utama

| Dokumen asli | Pertimbangan |
|---|---|
| `KELOMPOK 1.pdf` | Poster SDGs 9, lebih bersifat infografik daripada laporan analisis statistik. |
| `LAPRESM2_Arthur Fikry Swara_076_Azizah Al Khaer_084[1].pdf` | Estimasi parameter dan uji dua populasi; kompetensi dasar sudah diwakili beragam studi pemodelan lebih lanjut. |
| `Laporan Kuliah Lapangan.pdf` | Observasi lapangan pengendalian mutu, cocok untuk bagian kegiatan lapangan pada pengembangan berikutnya. |
| `M1_076_088_100.pdf` | Poster preprocessing data demografi dan migrasi India; dapat masuk ketika ada koleksi Data Preparation khusus. |
| `M2 REGLOG MULTINOMIAL.pdf` | Studi regresi logistik multinomial gangguan kesehatan mental; dapat dijadikan tambahan setelah konteks data, izin, dan keterlibatan diperiksa. |
| `PDK_Multinom_Revisi_073_076.pdf` | Regresi logistik multinomial tentang gaya belajar dengan **data bangkitan/simulasi**; tidak ditampilkan sebagai temuan survei nyata. |

## Catatan atribusi, izin, dan publikasi

1. Laporan yang mencantumkan beberapa penulis diberi label **Group Project**, bukan diklaim sepenuhnya pekerjaan individu.
2. Kontribusi spesifik per mahasiswa **belum dapat dipastikan dari semua dokumen**; karena itu kolom kontribusi belum diisi secara spekulatif.
3. Yang disertakan ke website hanya **cuplikan visual dari halaman bagian dalam** dan ringkasan metode. **PDF/DOCX penuh tidak disertakan** dalam paket website, untuk mengurangi risiko menampilkan NRP, alamat email, respons survei, atau identitas kolaborator.
4. Sebelum memasang tombol *View Full Report*, periksa izin publikasi teman sekelompok dan hilangkan informasi yang tidak patut dipublikasikan.
5. Bahasa pemrograman atau software tidak ditambahkan hanya berdasarkan dugaan; beberapa kartu menggunakan **nama metode statistik** sebagai tag bila tool pelaksanaannya tidak eksplisit.

## Memperbarui koleksi nanti

- Tambahkan objek ke `src/data/academic.js`.
- Tambahkan satu atau beberapa gambar pratinjau ke `public/lab/`, lalu isi field `images`.
- Jika dua file membahas studi kasus sama dengan metode yang saling melengkapi, gabungkan di satu objek `sources`/`images` daripada membuat kartu ganda.
- Filter bidang dan tampilan otomatis mengikuti data.
