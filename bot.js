const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");
const loaders = document.getElementById("loaders");
const container = document.getElementsByClassName("container");

let init = 0;

const botSay = (data) => {
  return [
    "Hallo, perkenalkan nama saya Zarvis, siapa nama anda?",
    `Halo ${data?.nama}, berapa usia kamu?`,
    `Owalahh ${data?.usia}, hobi lu apa btw?`,
    `Wihhh ${data?.hobi} sama nihh hobi kita, klo makanan favorit lu apa bro?`,
    `${data?.makanan}? simple banget ya makanan favorit lu`,
  ];
};

pertanyaan.innerHTML = botSay()[0];

let userData = [];

function botStart() {
  if (jawaban.value.length < 1) return alert("Silahkan isi jawaban dulu.");
  init++;
  if (init === 1) {
    botDelay({ nama: jawaban.value });
  } else if (init === 2) {
    botDelay({ usia: jawaban.value });
  } else if (init === 3) {
    botDelay({ hobi: jawaban.value });
  } else if (init === 4) {
    botDelay({ makanan: jawaban.value });
  } else if (init === 5) {
    finishing();
  } else {
    botEnd();
  }
}

function botDelay(jawabanUser) {
  loaders.style.display = "block";
  container[0].style.filter = "blur(8px)";
  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init];
    loaders.style.display = "none";
    container[0].style.filter = "none";
  }, [1000]);
  userData.push(jawaban.value);
  jawaban.value = "";
}

function finishing() {
  pertanyaan.innerHTML = `Yaudah deh ${userData[0]}, data yang ada di program saya cuma sampai sini saja, mungkin kedepanya akan di update lagi oleh Azhar selaku orang yang telah membuat program Fake Bot ini, THX banget ya, byee!`;
  jawaban.value = "Oke";
}

function botEnd() {
  alert(
    `Terimakasih ${userData[0]}, karena sudah menggunakan Zay Fake Bot , sekarang anda akan diarahkan ke halaman utama.`
  );
  window.location.reload();
}
