function findMostDominantColor(imageUrl, callback) {
    // Yeni bir görüntü öğesi oluştur
    var img = new Image();
    img.crossOrigin = "Anonymous"; // CORS hatasını önlemek için crossOrigin özelliğini ayarla
    img.src = imageUrl;

    // Görüntü yüklendikten sonra çalışacak fonksiyon
    img.onload = function() {
        // Canvas oluştur
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;

        // Canvas'a resmi çiz
        ctx.drawImage(img, 0, 0, img.width, img.height);

        // Resmin verilerini al
        var imageData = ctx.getImageData(0, 0, img.width, img.height).data;

        // Renk yoğunluklarını sayacak nesne
        var colorCount = {};

        // Her pikselin rengini analiz et
        for (var i = 0; i < imageData.length; i += 4) {
            // Rengi RGBA formatından al
            var color = imageData.slice(i, i + 3);

            // Renk anahtarını oluştur
            var key = color.join(",");

            // Renk yoğunluğunu artır
            colorCount[key] = (colorCount[key] || 0) + 1;
        }

        // En yoğun renki bul
        var mostDominantColor = Object.keys(colorCount).reduce(function(a, b) {
            return colorCount[a] > colorCount[b] ? a : b;
        });

        // Geri çağrı fonksiyonunu çağır ve en yoğun rengi iletsin
        callback(mostDominantColor);
    };
}

function getContrastColor(rgbColor) {
    // RGB renk değerlerini parçala
    var rgbValues = rgbColor.match(/\d+/g);
    var r = parseInt(rgbValues[0]);
    var g = parseInt(rgbValues[1]);
    var b = parseInt(rgbValues[2]);

    // Luminance değerini hesapla
    var luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // Eşik değeri belirle
    var threshold = 0.3;

    // Koyu ise beyaz, açık ise siyah döndür
    return luminance > threshold ? "black" : "white";
}

var banner=document.getElementById("banner");
var backgroundImageURL = "url('https://picsum.photos/1920/1080')";
banner.style.backgroundImage = backgroundImageURL;
findMostDominantColor("https://picsum.photos/1920/1080", function(result) {
   banner.querySelector("h1").style.color = getContrastColor(result);
   banner.querySelector("p").style.color = getContrastColor(result);
});