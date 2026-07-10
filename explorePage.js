let viewAll=()=>{
    document.querySelector("#destination").innerHTML=`
            <div id="destination">
                <div class="dest">
                    <img src="images/hundrufall3.avif" class="destimg">
                    <h4 id="Hundru">Hundru Falls, Ranchi</h4>
                    <h5>From 1999/-</h5>
                </div>
                <div class="dest">
                    <img src="images/Dassam_fall.avif" class="destimg">
                    <h4>Dassam Falls, Ranchi</h4>
                    <h5>From 1999/-</h5>
                </div>
                <div class="dest">
                    <img src="images/betla-national-park.jpg" class="destimg">
                    <h4 id="Betla">Betla National Park, Latehar</h4>
                    <h5>From 2699/-</h5>
                </div>
                <div class="dest">
                    <img src="images/dalma-1.jpg" class="destimg">
                    <h4>Dalma Wildlife Sanctuary, Jamshedpur</h4>
                    <h5>From 2999/-</h5>
                </div>
                <div class="dest">
                    <img src="images/Maithon0.webp" class="destimg">
                    <h4 id="Maithon">Maithon Dam, Dhanbad</h4>
                    <h5>From 2499/-</h5>
                </div>
                <div class="dest">
                    <img src="images/chandil_dam.jpg" class="destimg">
                    <h4>Chandil Dam, Chandil</h4>
                    <h5>From 2499/-</h5>
                </div>
                <div class="dest">
                    <img src="images/deghar2.webp" class="destimg">
                    <h4 id="Baidyanath">Baidyanath Dham, Deoghar</h4>
                    <h5>From 3499/-</h5>
                </div>
                <div class="dest">
                    <img src="images/rajappa1.webp" class="destimg">
                    <h4>Chhinnamasta Temple, Rajrappa</h4>
                    <h5>From 2999/-</h5>
                </div>
                <div class="dest">
                    <img src="images/Jagannath2.jpg" class="destimg">
                    <h4>Jagannath Temple, Ranchi</h4>
                    <h5>From 2499/-</h5>
                </div>
            </div>`;     
}
const view=document.querySelector("#all");
view.addEventListener("click", viewAll);

let view_Waterfalls=()=>{
    document.querySelector("#destination").innerHTML=`
                <div class="dest">
                    <img src="images/hundrufall3.avif" class="destimg">
                    <h4 id="Hundru">Hundru Falls, Ranchi</h4>
                    <h5>From 1999/-</h5>
                </div>
                <div class="dest">
                    <img src="images/Dassam_fall.avif" class="destimg">
                    <h4>Dassam Falls, Ranchi</h4>
                    <h5>From 1999/-</h5>
                </div>`;
}
const Water=document.querySelector("#Waterfall");
Water.addEventListener("click", view_Waterfalls);

let view_Wildelife=()=>{
    document.querySelector("#destination").innerHTML=`
    <div class="dest">
        <img src="images/betla-national-park.jpg" class="destimg">
        <h4 id="Betla">Betla National Park, Latehar</h4>
        <h5>From 2699/-</h5>
    </div>
    <div class="dest">
        <img src="images/dalma-1.jpg" class="destimg">
        <h4>Dalma Wildlife Sanctuary, Jamshedpur</h4>
        <h5>From 2999/-</h5>
    </div>`;
}
const Wild=document.querySelector("#Wilde");
Wild.addEventListener("click", view_Wildelife);

let view_Dams=()=>{
    document.querySelector("#destination").innerHTML=`
                <div class="dest">
                    <img src="images/Maithon0.webp" class="destimg">
                    <h4 id="Maithon">Maithon Dam, Dhanbad</h4>
                    <h5>From 2499/-</h5>
                </div>
                <div class="dest">
                    <img src="images/chandil_dam.jpg" class="destimg">
                    <h4>Chandil Dam, Chandil</h4>
                    <h5>From 2499/-</h5>
                </div>`;
}
const Dams=document.querySelector("#Dam").addEventListener("click", view_Dams);

let view_temples=()=>{
    document.querySelector("#destination").innerHTML=`
    <div class="dest">
                    <img src="images/deghar2.webp" class="destimg">
                    <h4 id="Baidyanath">Baidyanath Dham, Deoghar</h4>
                    <h5>From 3499/-</h5>
                </div>
                <div class="dest">
                    <img src="images/rajappa1.webp" class="destimg">
                    <h4>Chhinnamasta Temple, Rajrappa</h4>
                    <h5>From 2999/-</h5>
                </div>
                <div class="dest">
                    <img src="images/Jagannath2.jpg" class="destimg">
                    <h4>Jagannath Temple, Ranchi</h4>
                    <h5>From 2499/-</h5>
                </div>`;
}
const Temple=document.querySelector("#Temple").addEventListener("click", view_temples);