const PageState = function() {
  let currentState = new homeState(this);

  this.init = function() {
    this.change(new homeState());
  };

  this.change = function(state) {
    currentState = state;
  };
};

//Home State

const homeState = function(page) {
  document.querySelector("#heading").textContent = null;
  document.querySelector("#content").innerHTML = `
    <div class="jumbotron">
    <h1 class="display-4">Hello, world!</h1>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr class="my-4">
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </div>
  `;
};

//About state

const aboutState = function(page) {
  document.querySelector("#heading").textContent = "About Us";
  document.querySelector("#content").innerHTML = `
    <p>This is the about page!!!</p>
  `;
};

//Contact state

const contactState = function(page) {
  document.querySelector("#heading").textContent = "Contact Us";
  document.querySelector("#content").innerHTML = `
  <!-- Default form login -->
  <form class="text-center border border-light p-5" action="#!">
  
      <p class="h4 mb-4">Sign in</p>
  
      <!-- Email -->
      <input type="email" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="E-mail">
  
      <!-- Password -->
      <input type="password" id="defaultLoginFormPassword" class="form-control mb-4" placeholder="Password">
  
      <div class="d-flex justify-content-around">
          <div>
              <!-- Remember me -->
              <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember">
                  <label class="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
              </div>
          </div>
          <div>
              <!-- Forgot password -->
              <a href="">Forgot password?</a>
          </div>
      </div>
  
      <!-- Sign in button -->
      <button class="btn btn-info btn-block my-4" type="submit">Sign in</button>
  
      <!-- Register -->
      <p>Not a member?
          <a href="">Register</a>
      </p>
  
      <!-- Social login -->
      <p>or sign in with:</p>
  
      <a href="#" class="mx-2" role="button"><i class="fab fa-facebook-f light-blue-text"></i></a>
      <a href="#" class="mx-2" role="button"><i class="fab fa-twitter light-blue-text"></i></a>
      <a href="#" class="mx-2" role="button"><i class="fab fa-linkedin-in light-blue-text"></i></a>
      <a href="#" class="mx-2" role="button"><i class="fab fa-github light-blue-text"></i></a>
  
  </form>
  <!-- Default form login -->
  `;
};

// Instantiate pageState

const page = new PageState();

// Init the first state

page.init();

// UI Vars

const home = document.getElementById("home"),
      about = document.getElementById("about"),
      contact = document.getElementById("contact");

// Home

home.addEventListener("click", e => {
  page.change(new homeState());

  e.preventDefault();
});

// About

about.addEventListener("click", e => {
  page.change(new aboutState());

  e.preventDefault();
});

// Contact
contact.addEventListener("click", e => {
  page.change(new contactState());

  e.preventDefault();
});
