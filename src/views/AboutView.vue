<template>
  <div class="container">
    <div class="header">
      <h1>See on harjutamise leht </h1>
    </div>
    <div>
      <form class="form" id="form">
        <div class="form-control success">
          <label>Kasutajanimi</label>
          <input type="text" placeholder="e-mail" id="userName">
          <i class="fas fa-check-circle"></i>
          <i class="fas fa-exclamation-circle"></i>
          <small>Error message</small>
        </div>
        <div class="form-control error">
          <label>Parool</label>
          <input type="text" placeholder="parool" id="password">
          <i class="fas fa-check-circle"></i>
          <i class="fas fa-exclamation-circle"></i>
          <small>Error message</small>
        </div>
        <div class="form-control error">
          <label>Parool uuesti</label>
          <input type="text" placeholder="parool uuesti" id="password2">
          <i class="fas fa-check-circle"></i>
          <i class="fas fa-exclamation-circle"></i>
          <small>Error message</small>
        </div>
        <button>Submit</button>
      </form>
    </div>
  </div>
</template>


<script>
const form = document.getElementById(`form`);
const userName = document.getElementById(`UserName`);
const password = document.getElementById(`password`);
const password2 = document.getElementById(`password2`);

form.addEventListener(`submit`, (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const userNameValue = userName.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if(userNameValue === ``) {
    setErrorFor(userName, `Kasutajanime lahter peab olema täidetud`);
  } else if(!isuserName(userNameValue)) {
    setErrorFor(userName, `not valid`);
    } else {
    setSucessFor(userName);
    }
  }
  if(passwordValue === ``) {
    setErrorFor(password, `Parooli lahter peab olema täidetud`);
  } else {
    setSucessFor(password);
  }
  if(password2Value === ``) {
    setErrorFor(password2, `Korda parooli`);
  } else {
    setSucessFor(password2);
  }

}
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector(`small`);

  small.innerText = message;

  formControl.className = `form-control error`;
}
function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = `form-control success`;
}

function isuserName (userName) {
  return /@/.test(userName);
}



</script>

<style scoped>

* {
  box-sizing: border-box;
}

body {
  background-color: azure;
  font-family: Georgia;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0;
}

.container {
  background-color: lightgray;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  with: 400px;
  max-width: 100%;
}

.header {
  background-color: azure;
  border-bottom: 1px solid lightgray;
  padding: 20px 40px;
}

.header h2 {
  margin: 0;
}

.form {
  padding: 30px 40px;
}

.form-control {
  margin-bottom: 10px;
  padding-bottom: 20px;
  position: relative;
}

.form-control label {
  display: inline-block;
  margin-bottom: 5px;
}

.form-control input {
  border: 2px solid yellow;
  border-radius: 4px;
  display: block;
  font-family: inherit;
  font-size: 14px;
  padding: 10px;
  width: 100%;
}

.form-control.success input {
  border-color: #2c3e50;

}

.form-control.error input {
  border-color: darkred;

}

.form-control i {
  position: absolute;
  top: 40px;
  right: 10px;
  visibility: hidden;
}

.form-control.success i.fa-check-circle {
  color: #2c3e50;
  visibility: visible;
}

.form-control.error i.fa-exclamation-circle {
  color: darkred;
  visibility: visible;
}

.form-control small {
  visibility: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
}

.form-control.error mall {
  border-color: darkred;
  visibility: visible;

}

.form button {
  background-color: darksalmon;
  border: 2px solid saddlebrown;
  border-radius: 4px;
  color: azure;
  display: block;
  font-family: inherit;
  font-size: 16px;
  padding: 14px;
  width: 100%;
}
</style>