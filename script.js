//Login Button Content.....................................after click
let login_Fun=()=>{
    document.querySelector("main").innerHTML =`
    <section class="adiv0" id="loginB">
        <div class="adiv1" id="l_div">
            <h1>Welocme Back !</h1>
            <h3>Login to continue your journy with us and explore Jharkhand.</h3>
        </div>
        <form class="form">
            <h1>Login</h1>
            <p>Enter your details to accese your account</p>
            <label for="Email">Email Address</label>
            <input type="email" placeholder="Enter your email" class="Cinput">
            <label for="password">Password</label>
            <input type="password" placeholder="Enter Your Password" class="Cinput">
            <span id="l_span">Forgot Password?</span>
            <input type="checkbox">Remember Me <br>
            <button>Login</button>
            <p class="l_p">Don't have an Account? <span onclick="create_New()">Sign Up</span></p>
        </form>
    </section>`;
}

let butt=document.querySelector("#login");
butt.addEventListener("click", login_Fun);


// Create new account......................................after click
let create_New=()=>{
    document.querySelector("main").innerHTML=`
    <section class="adiv0" id="loginB">
        <div class="adiv1" id="l_div">
            <h1>Welcome...!!!!!</h1>
            <h3>Sign Up to continue your journy with us and explore Jharkhand.</h3>
        </div>
        <form class="form">
            <h1>Create New Account</h1>
            <p>Enter your details to accese your account</p>
            <label for="Name">Name</label>
            <input type="text" placeholder="Enter your name " class="Cinput">
            <label for="Email">Email Address</label>
            <input type="email" placeholder="Enter your email" class="Cinput">
            <label for="password">Password</label>
            <input type="password" placeholder="Enter Your Password" class="Cinput">
            <label for="password">Confirm password</label>
            <input type="password" placeholder="Enter Your Password" class="Cinput">
            <button>Create</button>
            <p class="l_p">Already have an Account? <span onclick="login_Fun()">Login</span></p>
        </form>
    </section>`;
}
