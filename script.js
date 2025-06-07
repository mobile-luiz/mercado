const firebaseConfig = {
  apiKey: "AIzaSyDOYhFAUl9eytYMdLA-kyhNvrV5GrXgJQU",
  authDomain: "mercado-8d654.firebaseapp.com",
  projectId: "mercado-8d654",
  storageBucket: "mercado-8d654.firebasestorage.app",
  messagingSenderId: "269749626632",
  appId: "1:269749626632:web:8c30643a1cc52b56672ebd",
  measurementId: "G-9DGXDT4451"

};


firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function login() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, senha)
    .then(() => {
      window.location.href = "home.html"; // ✅ Redireciona para tela de opções
    })
    .catch(e => {
      document.getElementById("msg").innerText = "Erro: " + e.message;
    });
}

function register() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, senha)
    .then(() => {
      document.getElementById("msg").innerText = "✅ Cadastrado! Agora faça login.";
    })
    .catch(e => {
      document.getElementById("msg").innerText = "Erro: " + e.message;
    });
}
