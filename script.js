/**
 * Menangani event submit pada form.
 * - Mencegah perilaku default submit form.
 * - Mengambil nilai dari input: nama, email, password, dan konfirmasi password.
 * - Memvalidasi agar semua field tidak kosong.
 * - Memastikan password dan konfirmasi password sama.
 * - Jika valid, menyimpan data user (nama, email, password) ke localStorage dengan key 'userData'.
 *
 * @param {Event} event - Event submit form.
 */
// Saat event onsubmit terjadi, lakukan event.preventDefault(), lalu ambil nilai dari input nama, email, password, dan konfirmasi password.
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    /**
     * Memvalidasi input pengguna dan menampilkan nilainya ke konsol.
     *
     * @param {string} name - Nama pengguna.
     * @param {string} email - Email pengguna.
     * @param {string} password - Password pengguna.
     * @param {string} confirmPassword - Konfirmasi password pengguna.
     */
    function validateInput(name, email, password, confirmPassword) {
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Confirm Password:", confirmPassword);
    }
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    

    // tambahkan validasi sederhana sperti pengecekan masing masing input nama, email, password dan konfirmasi password tidak kosong
    if (!name || !email || !password || !confirmPassword) {
        alert("Semua field harus diisi!");
        return;
    }

    // cek password dan konfirmasi password harus sama kalo tidak sama kasih alert password dan konfirmasi password tidak sama
    if (password !== confirmPassword) {
        alert("Password dan Konfirmasi Password tidak sama!");
        return;
    }

    // tolong buat penampung sementara nilai dalam bentuk object lalu simpan di localstorage dengan key userData
    const userData = { name, email, password };
    localStorage.setItem("userData", JSON.stringify(userData));
});
