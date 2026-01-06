const PASSWORD = "mdzz"; // GANTI PASSWORD ADMIN

function login(){
  if(document.getElementById("pass").value === PASSWORD){
    document.getElementById("login").style.display="none";
    document.getElementById("panel").classList.remove("hidden");

    document.getElementById("orders").innerText =
      localStorage.getItem("orders") || 0;

    document.getElementById("users").innerText =
      localStorage.getItem("users") || 0;
  } else {
    alert("Password salah");
  }
}

function generate(){
  const p = document.getElementById("product").value;
  const key = `MDZZX-${p}-${Math.random().toString(36).substr(2,4).toUpperCase()}-${new Date().getFullYear()}`;
  document.getElementById("license").innerText = "LICENSE: " + key;
}
