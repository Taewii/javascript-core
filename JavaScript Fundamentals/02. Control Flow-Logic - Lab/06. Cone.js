function coneVolumeAndArea(r, h) {
    let volume = Math.PI * r * r * h / 3;
    console.log(`volume = ${volume}`);

    let area = Math.PI * r * (r + Math.sqrt(h * h + r * r));
    console.log(`area = ${area}`);
}

coneVolumeAndArea(3.3, 7.8);