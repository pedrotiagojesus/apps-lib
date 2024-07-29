const imcData = [
    {
        min: 0,
        max: 18.4,
        classification: "Less than 18,5",
        info: "Thinness",
        obesity: "0",
        infoClass: "medium",
    },
    {
        min: 18.5,
        max: 24.9,
        classification: "Between 18.5 and 24.9",
        info: "Normal",
        obesity: "0",
        infoClass: "good",
    },
    {
        min: 25,
        max: 29.9,
        classification: "Between 25 and 29.9",
        info: "Overweight",
        obesity: "I",
        infoClass: "low",
    },
    {
        min: 30,
        max: 39.9,
        classification: "Between 30 and 39.9",
        info: "Obesity",
        obesity: "II",
        infoClass: "medium",
    },
    {
        min: 40,
        max: 99,
        classification: "Greater than 40",
        info: "Severe obesity",
        obesity: "III",
        infoClass: "hight",
    },
];

export default imcData;
