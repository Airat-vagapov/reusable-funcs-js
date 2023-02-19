const getTime = () => {
    const clientTime = new Date();

    let year = clientTime.getFullYear();
    let month = clientTime.getMonth() + 1;
    let day = clientTime.getDate();
    let hour = clientTime.getHours();
    let minute = clientTime.getMinutes();
    let second = clientTime.getSeconds();

    if (month < 10) {
      month = "0" + month;
    }
    if (day < 10) {
      day = "0" + day;
    }
    if (hour < 10) {
      hour = "0" + hour;
    }
    if (minute < 10) {
      minute = "0" + minute;
    }
    if (second < 10) {
      second = "0" + second;
    }
    let date = day + "-" + month + "-" + year;
    let time = hour + ":" + minute + ":" + second;
}