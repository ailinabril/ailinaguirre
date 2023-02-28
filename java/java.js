function abrirWhatsApp() {
    window.open("whatsapp://send?phone=+543547678036&text=Hola, me comunico con usted porque acabo de ver su curriculum");
  }
  
  function abrirGmail() {
    window.open("mailto:ailinaguirreabril.521@gmail.com");
  }
  
  function abrirInstagram() {
    window.open("https://www.instagram.com/ailinaguirre2/");
  }
  
  
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    }
    function showPosition(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      var url = "https://www.google.com/maps?q=" + lat + "," + lng;
      window.open(url);
    }
  