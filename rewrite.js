//  yes this project is probably too difficult and infringement of copyright.
const APP_NAME = "WebReco Utility";
var link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.head.appendChild(link);
}
link.href = "img/icons/icon32.png";
document.documentElement.innerHTML = document.documentElement.innerHTML.replaceAll("{{\"APP_NAME\" | translate}}", APP_NAME);

const imageMap = ["Acer C7 Chromebook", "Acer C7 Chromebook IVB", "Acer AC700-1099 Wifi", "Acer AC700-1529 3G", "Acer C720 Chromebook", "ASUS Chromebox", "Cr-48", "Dell Chromebook 11", "Google Chromebook Pixel", "HP Pavilion Chromebook 14", "HP Chromebook 14 q000-q099 / HP Chromebook 14-SMB Atheros", "HP Chromebook 14 q000-q099 WP2 / HP Chromebook 14-SMB Intel Corp", "HP Chromebook 11 1100-1199 / HP Chromebook 11 G1", "HP Chromebox CB1-(000-099) / HP Chromebox G1", "Lenovo Thinkpad X131e Chromebook", "Samsung Chromebook", "Samsung Chromebook Series 5 Non-US-Wifi", "Samsung Chromebook Series 5 Non-US 3G", "Samsung Chromebook Series 5 US-Wifi", "Samsung Chromebook Series 5 US-3G", "Samsung Chromebook Series 5 550", "Samsung Chromebox Series 3", "Toshiba Chromebook"]
imageMap.forEach(item => {
    option = document.createElement("option");
    option.textContent = item;
    document.getElementById("device_model").appendChild(option);
});