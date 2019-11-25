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
  <!-- Default form contact -->
  <form class="text-center border border-light p-5" action="#!">
  
      <p class="h4 mb-4">Contact us</p>
  
      <!-- Name -->
      <input type="text" id="defaultContactFormName" class="form-control mb-4" placeholder="Name">
  
      <!-- Email -->
      <input type="email" id="defaultContactFormEmail" class="form-control mb-4" placeholder="E-mail">
  
      <!-- Subject -->
      <label>Subject</label>
      <select class="browser-default custom-select mb-4">
          <option value="" disabled>Choose option</option>
          <option value="1" selected>Feedback</option>
          <option value="2">Report a bug</option>
          <option value="3">Feature request</option>
          <option value="4">Feature request</option>
      </select>
  
      <!-- Message -->
      <div class="form-group">
          <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" placeholder="Message"></textarea>
      </div>
  
      <!-- Copy -->
      <div class="custom-control custom-checkbox mb-4">
          <input type="checkbox" class="custom-control-input" id="defaultContactFormCopy">
          <label class="custom-control-label" for="defaultContactFormCopy">Send me a copy of this message</label>
      </div>
  
      <!-- Send button -->
      <button class="btn btn-info btn-block" type="submit">Send</button>
  
  </form>
  <!-- Default form contact -->
        
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
