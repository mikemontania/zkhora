var ZKLib = require("zklib");
ZK = new ZKLib({
    ip: "192.168.20.130",
    port: 4370,
    inport: 5200
});

// connect to access control device
ZK.connect(function () {
    // Modificar la hora y la fecha (puedes establecer la nueva fecha y hora según tus necesidades)
    var newDateTime = new Date("2023-10-23 16:10:00");

    // Establecer la nueva hora y fecha en el dispositivo
    ZK.setTime(newDateTime, function (err) {
        if (err) {
            console.error("Error al establecer la nueva hora y fecha:", err);
        } else {
            console.log("Nueva hora y fecha establecida con éxito en el dispositivo:", newDateTime);
        }
        ZK.disconnect();
    });


});  