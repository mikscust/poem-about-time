const poemLines = [
    "Time, the great enigma,",
    "Ever-flowing, never ending.",
    "A force beyond our understanding,",
    "A puzzle that we'll never solve.",
    "It governs all of our lives,",
    "A ruler with no mercy or grace.",
    "We measure it in hours and days,",
    "But it's a concept that has no true face.",
    "Some say it's an illusion,",
    "A mere construct of the mind.",
    "Others believe it has its own solution,",
    "A path that we must find.",
    "But one thing is certain,",
    "Time marches on, unyielding.",
    "It shapes our world, our fate,",
    "Leaves its mark, forever revealing.",
    "So let us embrace the present,",
    "Embrace each moment with care.",
    "For time, it waits for no one,",
    "And it's a journey we must share."
];

let lineIndex = 0;

    document.getElementById("btn").addEventListener("click", function() {
        if (lineIndex < poemLines.length) {
            document.getElementById("poem").innerHTML += poemLines[lineIndex] + "<br>";
        lineIndex++;
        }
    });