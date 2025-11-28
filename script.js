document.getElementById("absensiForm").addEventListener("submit", function(e){
    e.preventDefault();

    let data = {
        nama: document.getElementById("nama").value,
        house: document.getElementById("house").value,
        status: document.getElementById("status").value,
        waktu: new Date().toLocaleString("id-ID")
    };

    // Ganti URL berikut dengan URL Apps Script kamu
    let scriptURL = "PASTE_URL_GOOGLE_SCRIPT_DI_SINI";

    fetch(scriptURL, { method: "POST", body: JSON.stringify(data) })
        .then(res => {
            document.getElementById("successMsg").style.display = "block";
            document.getElementById("absensiForm").reset();
        })
        .catch(err => alert("Gagal mengirim absensi"));
});
