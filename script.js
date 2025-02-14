function updateTime() {
    let now = new Date();

    // Format Date
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("date").innerText = now.toLocaleDateString("en-US", options);

    // Format Time
    let time = now.toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    document.getElementById("time").innerText = time;
          // to also get the seconds :- let time = now.toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

// Update time every second
setInterval(updateTime, 1000);
updateTime();


