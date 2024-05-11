function daysAgo(date) {
    var now = new Date();
    var past = new Date(date);
    var diff = Math.abs(now - past);
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return days;
}

window.onload = function() {
    var dates = ["2024-03-04", "2024-02-26" ,"2024-02-28" ,"2024-03-04", "2024-03-11" ,"2024-03-18" ,"2024-03-25"]; // Replace with your dates
    for (var i = 0; i < dates.length; i++) {
        var days = daysAgo(dates[i]);
        document.getElementById("daysAgo" + (i + 1)).textContent = days + " days ago";
    }
};