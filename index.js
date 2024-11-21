// ALGORITHM ITU PENTING , PROGRAMMER JANGAN NGANDELIN CHATGPT MULU ANJINKKKKKKKKKKK

// Pengelolaan penumpang

// Penumpang naik
// function tambahPenumpang(namaPenumpang , penumpang)

// rules
// jika angkot kosong penumpang naik di kursi pertama , penumpang berikutnya pasti naik di kursi berikutnya

// Penumpang Turun
// function turunPenumpang()
// jika ada kursi kosong (karena penumpang turun) penumpang yang naik berikutnya duduk di kursi kosong terlebih dahulu
// asumsi kolom kursi itu tidak akan penuh

const penumpang = [];
function tambahPenumpang(namaPenumpang, penumpang) {
  if (penumpang.length === 0 || penumpang.length < 1) {
    penumpang.push(namaPenumpang);
    return penumpang;
  } else {
    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == undefined) {
        penumpang[i] = namaPenumpang;
        return penumpang;
      } else if (penumpang[i] == namaPenumpang) {
        alert("nama penumpang has beetween");
        return penumpang;
      } else if (i === penumpang.length - 1) {
        penumpang.push(namaPenumpang);
        return penumpang;
      }
    }
  }
}

function hapusPenumpang(namaPenumpang, penumpang) {
  if (penumpang.length === 0) {
    alert("Angkot masih kosong");
    return penumpang;
  } else {
    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i] === namaPenumpang) {
        penumpang[i] = undefined;
        return penumpang;
      } else if (i == penumpang.length - 1) {
        console.log(`Nama penumpang ${namaPenumpang} tidak ada didalam angkot`);
      }
    }
  }
}
