/*
Write a program that prints the zodiac sign(Aries, Taurus, Gemini, etc.) based on a person’s birth month. Make it month bases, not date based. Like March and April borns are Aries, Aplil and May born are Taurus, and so on. Do not use if-else.
*/

// task 5: Horoscope Sign Checker

let month = "April"; 
let zodiacSign;

switch(month) {
    case "January":
        zodiacSign = "Capricorn";
        break;
    case "February":
        zodiacSign = "Aquarius";
        break;
    case "March":
        zodiacSign = "Pisces";
        break;
    case "April":
        zodiacSign = "Aries";
        break;
    case "May":
        zodiacSign = "Taurus";
        break;
    case "June":
        zodiacSign = "Gemini";
        break;
    case "July":
        zodiacSign = "Cancer";
        break;
    case "August":
        zodiacSign = "Leo";
        break;
    case "September":
        zodiacSign = "Virgo";
        break;
    case "October":
        zodiacSign = "Libra";
        break;
    case "November":
        zodiacSign = "Scorpio";
        break;
    case "December":
        zodiacSign = "Sagittarius";
        break;
    default:
        zodiacSign = "Invalid month";
}

console.log("Month:", month);
console.log("Zodiac Sign:", zodiacSign);
