function random_bg_color() {
    let x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);

    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);

    /* for testing it you can paste the below code in browser console and it will change the background color for the current page.
    document.body.style.background = bgColor;
    */
}

random_bg_color();