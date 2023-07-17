import React from 'react';

function IntegrationInfo() {

  return (
    <div className="text-white font-light font-sm">
      <p className="mb-5">Silakan ikuti langkah-langkah di bawah ini untuk Integrasi Shipdeo Anda:</p>

      <p>1. Jika belum memiliki akun Shipdeo, buat akun terlebih dahulu.</p>
      <p>2. Setelah memiliki akun, upgrade akun ke business jika belum dilakukan.</p>
      <p>3. Verifikasi akun business membutuhkan waktu 1x24 jam.</p>
      <p>4. Jika sudah memiliki akun business, login ke Shipdeo dan masuk ke Pengaturan. Pilih tab &quot;API key&quot;.</p>
      <p>5. Pada halaman API key, klik tombol &quot;Add&quot; di kiri bawah, kemudian pilih Flag Kloola dan pilih layanan yang dibutuhkan.</p>
      <p>6. Simpan dan salin Client ID dan Client Secret.</p>
      <p>7. Kembali ke portal Kloola, masuk ke halaman Pengiriman, dan masukkan Client ID dan Client Secret yang telah disalin.</p>
      <p> 8. Login untuk mengintegrasikan Shipdeo dengan Kloola.</p>
    </div>
  );
}

export default IntegrationInfo;