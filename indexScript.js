function daysAgo(date) {
    var now = new Date();
    var past = new Date(date);
    var diff = Math.abs(now - past);
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return days;
}

window.onload = function() {
    var dates = ["2024-03-03", "2024-03-23" ,"2024-05-04" ,"2024-05-06", "2024-05-05" ,"2024-05-11"]; // Replace with your dates
    for (var i = 0; i < dates.length; i++) {
        var days = daysAgo(dates[i]);
        document.getElementById("daysAgo" + (i + 1)).textContent = days + " days ago";
    }
};