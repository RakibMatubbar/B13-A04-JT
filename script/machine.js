
// Hidden / Show function:
function showOnly(id){
    const jobsCards = document.getElementById('jobs-cards');
    const interviewCards = document.getElementById('interview-cards');
    const rejectedCards = document.getElementById('rejected-cards');

    jobsCards.classList.add('hidden');
    interviewCards.classList.add('hidden');
    rejectedCards.classList.add('hidden');

    const selected = document.getElementById(id);
    selected.classList.remove('hidden')
}