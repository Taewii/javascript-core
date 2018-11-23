function template(input) {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<quiz>\n';

    for (let i = 0; i < input.length; i += 2) {
        xml += `  <question>\n    ${input[i]}\n  </question>\n`;
        xml += `  <answer>\n    ${input[i + 1]}\n  </answer>\n`;
    }

    xml += '</quiz>';
    return xml;
}

console.log([
    "Who was the forty-second president of the U.S.A.?",
    "William Jefferson Clinton"
]);

console.log(template([
    "Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"
]));