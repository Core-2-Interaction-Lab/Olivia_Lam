// staten island chart //

var canvasElement = document.getElementById("statenChart");
var config = {
    type: "bar",
    data: {
        labels: ["10/10", "9/10", "8/10", "7/10", "6/10", "5/10", "4/10", "3/10", "2/10", "1/10"], 
        datasets: [{
            label: "No. of Streets",
            data: [400, 38790, 46984, 20055, 21408, 8050, 184, 885, 180, 26],
            backgroundColor: [
                'rgba(252, 3, 3, 0.3)', //red//
                'rgba(252, 94, 3, 0.3)', //orange//
                'rgba(252, 194, 3, 0.3)', //yellow//
                'rgba(173, 252, 3, 0.3)', //lime//
                'rgba(3, 252, 98, 0.3)', //teal//
                'rgba(3, 252, 252, 0.3)', //blue//
                'rgba(3, 94, 252, 0.3)', //darkblue//
                'rgba(115, 3, 252, 0.3)', //purple//
                'rgba(252, 3, 177, 0.3)', //pink//
                'rgba(255, 255, 255, 0.3)', //white//
            ],
            borderColor: [
                'rgba(252, 3, 3, 1)', //red//
                'rgba(252, 94, 3, 1)', //orange//
                'rgba(252, 194, 3, 1)', //yellow//
                'rgba(173, 252, 3, 1)', //lime//
                'rgba(3, 252, 98, 1)', //teal//
                'rgba(3, 252, 252, 1)', //blue//
                'rgba(3, 94, 252, 1)', //darkblue//
                'rgba(115, 3, 252, 1)', //purple//
                'rgba(252, 3, 177, 1)', //pink//
                'rgba(255, 255, 255, 1)', //white//
            ],
            borderWidth: 0.5,
            borderRadius: 5,
            barThickness: 40,
            minBarLength: 8,
            hoverBackgroundColor: 1,
        }],
    },
};

var statenChart = new Chart (canvasElement, config)

// navbar //

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}