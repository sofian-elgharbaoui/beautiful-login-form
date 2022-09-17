let signIn = document.querySelector(".sign-in");
let signInH = document.querySelector(".sign-in h1");
let signInP = document.querySelector(".sign-in p");
let switchBtn = document.querySelector(".switch");

let signUp = document.querySelector(".sign-up");
let signUpH = document.querySelector(".sign-up h1");
let signUpForm = document.querySelector(".sign-up form");
let signUpBtn = document.querySelector("#sign-up-btn");

let content = document.querySelectorAll(".content");

let beforeOfSignIn = document.querySelector(".sign-in .before");
let afterOfSignIn = document.querySelector(".sign-in .after");

switchBtn.onclick = () => {
  if (switchBtn.id == "sign-in-btn") {
    signIn.style.cssText = "left: 65%; box-shadow: -5px -5px 10px #fff;";
    signUp.style.right = "35%";

    content[0].style.opacity = "0";
    content[1].style.opacity = "0";
    setTimeout(() => {
      // signIn
      signInH.innerText = "Hello Friend!";
      signInP.innerText =
        "Enter your personal details and start journney with us";
      switchBtn.innerText = "SIGN UP";
      switchBtn.id = "sign-up-btn";

      content[0].style.opacity = "1";

      // signUp
      signUpH.innerText = "Sign in to the Website";
      signUpForm.innerHTML = `
    <input type="email" name="email" placeholder="Email" />
    <input type="password" name="password" placeholder="Password" />
    <input id="sign-up" type="submit" value="SIGN IN" />`;

      content[1].style.opacity = "1";
    }, 500);

    beforeOfSignIn.style.cssText = " right: calc(100% - 150px);";
    afterOfSignIn.style.cssText = " left:  calc(100% - 160px);";
  } else if (switchBtn.id == "sign-up-btn") {
    signIn.style.cssText = "left: 0; box-shadow: 5px 5px 10px #bbb;";
    signUp.style.right = "0";

    content[0].style.opacity = "0";
    content[1].style.opacity = "0";
    setTimeout(() => {
      // signIn
      signUpH.innerText = "Create Account";
      signUpForm.innerHTML = `
      <input type="text" name="name" placeholder="Name" />
      <input type="email" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Password" />
      <input id="sign-up" type="submit" value="SIGN UP" />`;

      content[0].style.opacity = "1";

      // signUp
      signInH.innerText = "Welcome Back!";
      signInP.innerText =
        "To keep connected with us please login with your personal info";
      switchBtn.innerText = "SIGN IN";
      switchBtn.id = "sign-in-btn";

      content[1].style.opacity = "1";
    }, 500);
    beforeOfSignIn.style.cssText = " right: -100px;";
    afterOfSignIn.style.cssText = " left: -150px;";
  }
};
