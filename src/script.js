import "./style.scss";
const rainIcon = "./assets/icons/cloud-rain.svg";
const snowIcon = "./assets/icons/cloud-snow.svg";
const sunIcon = "./assets/icons/sun.svg";

const rainSound = "./assets/sounds/rain.mp3";
const snowSound = "./assets/sounds/winter.mp3";
const sunSound = "./assets/sounds/summer.mp3";

const rainBgImage = "./assets/rainy-bg.jpg";
const snowBgImage = "./assets/winter-bg.jpg";
const sunBgImage = "./assets/summer-bg.jpg";

const weather = [
    { name: "rain", icon: rainIcon, sound: rainSound, image: rainBgImage },
    { name: "snow", icon: snowIcon, sound: snowSound, image: snowBgImage },
    { name: "sun", icon: sunIcon, sound: sunSound, image: sunBgImage },
];

const soundItems = document.querySelector(".sound__items");
const soundRange = document.querySelector(".sound__range");

function addWrapperImage(weatherImage) {
    const wrapperImage = document.querySelector(".wrapper__image");
    wrapperImage.src = weatherImage.src;
}

let current = null;

soundItems.addEventListener("click", (e) => {
    const allAudio = document.querySelectorAll("audio");
    const currentItem = e.target.closest(".sound__item");
    const clickAudio = currentItem.querySelector("audio");
    const clickImage = currentItem.querySelector(".sound__image");

    allAudio.forEach((item) => {
        if (item === clickAudio && item !== current) {
            current = clickAudio;
            addWrapperImage(clickImage);
            item.play();
        } else if (item === current) {
            current = null;
            item.pause();
        } else {
            item.pause();
        }
    });
});

soundRange.addEventListener("change", (e) => {
    const value = e.target.value;
    if (current) {
        current.volume = value;
    }
});

function createWeatherItems(weatherArray) {
    weatherArray.forEach((element) => {
        const body = document.createElement("div");
        body.className = "sound__item";
        body.dataset.name = element.name;
        const image = document.createElement("img");
        image.className = "sound__image";
        image.src = element.image;
        const icon = document.createElement("img");
        icon.className = "sound__icon";
        icon.src = element.icon;
        const sound = document.createElement("audio");
        sound.className = "sound__audio";
        sound.src = element.sound;
        sound.loop = true;

        body.append(image);
        body.append(icon);
        body.append(sound);

        soundItems.append(body);
    });
}

createWeatherItems(weather);
