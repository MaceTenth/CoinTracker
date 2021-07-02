//The functions in this file are intended to create dynamic content of the pages when the user selects one of the relevant buttons

$("nav button").click(SetPage);

function SetPage(event) {
  const btn = event.target.id;
  if (btn === "LiveReports" && checkedm.length === 0) {
    alertError("<h2>Please select at least one coin</h2>");

    $("#divHomePage").show();
    $("#divLiveReportsPage").remove();
    $("#divAboutPage").remove();
    changeBtnColor("#Home");
    return;
  }
  actions = { HomePage, LiveReportsPage, AboutPage };

  stopSetT();
  $("#divLiveReportsPage").remove();
  $("#divAboutPage").remove();

  actions[btn + "Page"]();

  changeBtnColor("#" + btn);

  window.scrollTo(0, 0);
}

function HomePage() {
  $("#divHomePage").show();
}

function LiveReportsPage() {
  $("#divHomePage").hide();
  liveReportsFunc();
}

function AboutPage() {
  $("#divHomePage").hide();
  var element = document.createElement("div");
  element.id = "divAboutPage";
  element.innerHTML = `<h1>About the project</h1>
    <div id="imgandauthor">
      
                <div class="imgiglobal" style="background-image:url(imgs/profile.jpg)"></div>
            </div>
        </div>

  
        <div id="theauthor">
            <div class="firstinfoaut">
                <div class="infoauthor"><div class="winfoauthor"><i class="fa fa-user" aria-hidden="true"></i></div><div class="xinfoauthor">Shimon Moyal</div></div>
                <div class="infoauthor"><div class="winfoauthor"><i class="fa fa-map-marker" aria-hidden="true"></i></div><div class="xinfoauthor">Ashdod</div></div>
            </div>
            <div class="secondinfoaut">
                <div class="infoauthor"><div class="winfoauthor"><i class="fa fa-phone" aria-hidden="true"></i></div><div class="xinfoauthor">050-7888734</div></div>
                <div class="infoauthor"><div class="winfoauthor"><i class="fa fa-envelope" aria-hidden="true"></i></div><div class="xinfoauthor">macetenth@gmail.com</div></div>
            </div>
        </div>
    </div>
    <div id="aboutproject">
        <div id="titleabpr">JQuery-Ajax API Project</div><br>
        <div id="lgsused">
            <div>Technology used in the project</div>
            <div class="about-info">HTML</div>
            <div class="about-info">CSS3</div>
            <div class="about-info">JavaScript</div>
            <div class="about-info">JQuery&Ajax</div>
         
        </div><br>

        <div id="lgsused">
            <div>Libraries used in the project</div>
       
            <div class="about-info">Bootstrap</div>
            <div class="about-info">Font Awsome</div>
            <div class="about-info">Pace.js</div>
            <div class="about-info">Canvas.js</div>
            
        </div><br>
        <div class="titleapi">CoinGecko API</div>
        <div>CoinGecko provides data for live pricing, trading volume, tickers, exchanges, historical data, coin info & images, developer & community stats, events, global markets, and CoinGecko Beam coins & exchanges status updates directly.</div><br>
        <div class="titleapi">CryptoCompare API</div>
        <div>CryptoCompare is the independent global cryptocurrency market data provider, giving institutional and retail investors access to real-time, high-quality, reliable market and pricing data. A central authority for clear and concise information, CryptoCompare offers unrivalled breadth, scope and depth of data, bridging the gap between the crypto asset and traditional financial markets.</div><br>

    </div>
    `;
  document.getElementById("root").appendChild(element);
}
