Notification.requestPermission().then(function(result) {
  console.log(result);
});

function prep() {

  var now = new Date().getTime();

  var countDownDate = now + 900000;

  var tenMinNoti = false;

  var fiveMinNoti = false;

  var twoMinNoti = false;

  var x = setInterval(function() {

    now = new Date().getTime();

    var distance = countDownDate - now;

    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";
    
    document.getElementById("prep").disabled = true

    document.getElementById("speech").disabled = true

    document.getElementById("intermission").disabled = true

    document.getElementById("feedbackPrep").disabled = true
    
    document.getElementById("feedbackSpeech").disabled = true

    document.getElementById("reset").disabled = false

    if (minutes == 10 && seconds < 5 && tenMinNoti == false) {

      var notification = new Notification('10 Minutes Remaining', {icon: 'icon.png'});

      tenMinNoti = true

    }

    if (minutes == 5 && seconds < 5 && fiveMinNoti == false) {

      var notification = new Notification('5 Minutes Remaining', {icon: 'icon.png'});

      fiveMinNoti = true

    }

    if (minutes == 2 && seconds < 5 && twoMinNoti == false) {

      var notification = new Notification('2 Minutes Remaining', {icon: 'icon.png'});

      twoMinNoti = true

    }

    if (distance < 0) {

      clearInterval(x);

      var notification = new Notification('Time up!', {icon: 'icon.png'});

      document.getElementById("demo").innerHTML = "TIME UP";

    }
  }, 1000);
}

function speech() {

  var now = new Date().getTime();

  var countDownDate = now + 240000;

  var twoMinNoti = false;

  var oneMinNoti = false;

  var x = setInterval(function() {

    now = new Date().getTime();

    var distance = countDownDate - now;

    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";
    
    document.getElementById("prep").disabled = true

    document.getElementById("speech").disabled = true

    document.getElementById("intermission").disabled = true

    document.getElementById("feedbackPrep").disabled = true
    
    document.getElementById("feedbackSpeech").disabled = true

    document.getElementById("reset").disabled = false

    if (minutes == 2 && seconds < 5 && twoMinNoti == false) {

      var notification = new Notification('2 Minutes Remaining', {icon: 'icon.png'});

      twoMinNoti = true

    }

    if (minutes == 1 && seconds < 5 && oneMinNoti == false) {

      var notification = new Notification('1 Minute Remaining', {icon: 'icon.png'});

      oneMinNoti = true

    }

    if (distance < 0) {

      clearInterval(x);

      var notification = new Notification('Time up!', {icon: 'icon.png'});

      document.getElementById("demo").innerHTML = "TIME UP";

    }
  }, 1000);
}

function intermission() {

  var now = new Date().getTime();

  var countDownDate = now + 60000;

  var halfMinNoti = false

  var x = setInterval(function() {

    now = new Date().getTime();

    var distance = countDownDate - now;

    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";
    
    document.getElementById("prep").disabled = true

    document.getElementById("speech").disabled = true

    document.getElementById("intermission").disabled = true

    document.getElementById("feedbackPrep").disabled = true
    
    document.getElementById("feedbackSpeech").disabled = true

    document.getElementById("reset").disabled = false

    if (minutes == 0 && seconds < 30 && halfMinNoti == false) {

      var notification = new Notification('30 Seconds Remaining', {icon: 'icon.png'});

      halfMinNoti = true

    }

    if (distance < 0) {

      clearInterval(x);

      var notification = new Notification('Time up!', {icon: 'icon.png'});

      document.getElementById("demo").innerHTML = "TIME UP";

    }
  }, 1000);
}

function feedbackPrep() {

  var now = new Date().getTime();

  var countDownDate = now + 90000;

  var halfMinNoti = false

  var x = setInterval(function() {

    now = new Date().getTime();

    var distance = countDownDate - now;

    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";
    
    document.getElementById("prep").disabled = true

    document.getElementById("speech").disabled = true

    document.getElementById("intermission").disabled = true

    document.getElementById("feedbackPrep").disabled = true
    
    document.getElementById("feedbackSpeech").disabled = true

    document.getElementById("reset").disabled = false

    if (minutes == 0 && seconds < 30 && halfMinNoti == false) {

      var notification = new Notification('30 Seconds Remaining', {icon: 'icon.png'});

      halfMinNoti = true

    }

    if (distance < 0) {

      clearInterval(x);

      var notification = new Notification('Time up!', {icon: 'icon.png'});

      document.getElementById("demo").innerHTML = "TIME UP";

    }
  }, 1000);
}

function feedbackSpeech() {

  var now = new Date().getTime();

  var countDownDate = now + 90000;

  var halfMinNoti = false

  var x = setInterval(function() {

    now = new Date().getTime();

    var distance = countDownDate - now;

    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";
    
    document.getElementById("prep").disabled = true

    document.getElementById("speech").disabled = true

    document.getElementById("intermission").disabled = true

    document.getElementById("feedbackPrep").disabled = true
    
    document.getElementById("feedbackSpeech").disabled = true

    document.getElementById("reset").disabled = false

    if (minutes == 0 && seconds < 30 && halfMinNoti == false) {

      var notification = new Notification('30 Seconds Remaining', {icon: 'icon.png'});

      halfMinNoti = true

    }

    if (distance < 0) {

      clearInterval(x);

      var notification = new Notification('Time up!', {icon: 'icon.png'});

      document.getElementById("demo").innerHTML = "Done!";

    }
  }, 1000);
}

function reset() {

  location.reload();

}