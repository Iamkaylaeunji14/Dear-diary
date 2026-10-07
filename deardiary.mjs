const diaryEntries = [
    {
        date: "Oct 1st, 2026",
        text: "This is the first entry on my first html diary! If I'm being honest I have no idea what I'm doing..."
    },
    {
        date: "Oct 2nd, 2026",
        text: "Today I took an saq test in APUSH... pretty sure I failed it. The teacher said 5 min left when I had one part of the SAQ done... RIP MY GRADE :("
    },

    {
        date: "Oct 4th, 2026",
        text: "Today I have marching band practice. I think it's going to be really cold so I have to make sure to dress warm!"
    },
    {
        date: "Oct 6th, 2026",
        text: "Today I really wanted to play Dress to Impress but had homework to finish up instead. I've really been slacking on my schoolwork and the quarter's over in a few weeks. I really hope I can get my grades up before then..."
    }
];

let currentPage = 0;

const date = document.getElementById("date");
const diaryText = document.getElementById("diarytext");
const backButton = document.getElementById("backButton");
const forwardButton = document.getElementById("forwardButton");

function showEntry() {
    date.textContent = diaryEntries[currentPage].date;
    diaryText.textContent = diaryEntries[currentPage].text;
}

forwardButton.addEventListener("click", function() {
    if (currentPage < diaryEntries.length - 1) {
        currentPage++;
        showEntry();
    }
});

backButton.addEventListener("click", function() {
    if (currentPage > 0) {
        currentPage--;
        showEntry();
    }
});