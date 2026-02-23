
// DECLARE VARIABLE:
// For Header Calculator & Update Info:
let totalCount = document.getElementById('total-count');

let updateInfo = document.getElementById('update-job-info');

// For interview + rejected btn:
const interviewContainer = document.getElementById('interview-container'); 

const rejectedContainer = document.getElementById('rejected-container');

// For interview + rejected Count:
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');

// For changing Header Btn colors:
const allJobsBtn = document.getElementById('all-jobs-btn')
const headInterviewBtn = document.getElementById('head-interview-btn')
const headRejectedBtn = document.getElementById('head-rejected-btn')

// For jobs container:
const jobsCardsContainer = document.getElementById('jobs-cards');


// ALL CALCULATOR:
// Call function for counting:
function updateJobInfo(){
    const total = jobsCardsContainer.children.length;
    const interview = interviewContainer.children.length;
    const rejected = rejectedContainer.children.length;
    
    totalCount.innerText = total;
    interviewCount.innerText = interview;
    rejectedCount.innerText = rejected;

    updateInfo.innerText = `Total: ${total} | Interview: ${interview} | Rejected: ${rejected}`


    checkNoJob();
}
updateJobInfo();



// HEADER BTN COLORS:
// Declare variables to change Head btn colors:

function resetBtnColors(){
    const buttons = [allJobsBtn, headInterviewBtn, headRejectedBtn];
    buttons.forEach(btn => {
        btn.classList.remove('bg-blue-600', 'bg-green-600', 'bg-red-600', 'text-white')
    });
}

allJobsBtn.addEventListener('click', function(){
    resetBtnColors();
    allJobsBtn.classList.add('bg-blue-600', 'text-white')
});

headInterviewBtn.addEventListener('click', function(){
    resetBtnColors();
    headInterviewBtn.classList.add('bg-green-600', 'text-white')
});

headRejectedBtn.addEventListener('click', function(){
    resetBtnColors();
    headRejectedBtn.classList.add('bg-red-600', 'text-white')
});


// INTERVIEW + REJECTED:
function moveJobCard(card, targetContainer, move=false){
    let cardClone;
    
    if(move){
        cardClone = card;
    }
    else{
        cardClone = card.cloneNode(true);
    }
    
    targetContainer.appendChild(cardClone);
}

document.addEventListener('click', function(event){
    const btn = event.target.closest('.interview-btn, .rejected-btn');
    
    if(!btn){
        return;
    }

    const card = btn.closest('.job-card');
    const sourrceContainer = card.parentNode;

    let destinationContainer;

    if(btn.classList.contains('interview-btn')){
        destinationContainer = interviewContainer;
    }
    else{
        destinationContainer = rejectedContainer;
    }

    const isFromAllJobs = sourrceContainer === jobsCardsContainer;
    const isMove = !isFromAllJobs;


    const otherContainer = destinationContainer === interviewContainer ? rejectedContainer : interviewContainer;

    const existingOther = otherContainer.querySelector(`#${card.id}`);
    const existingdestination = destinationContainer.querySelector(`#${card.id}`);

    if(existingOther){
        existingOther.remove();
    }

    if(existingdestination){
        existingdestination.remove();
    }

    moveJobCard(card, destinationContainer, isMove);

    updateJobInfo();

})


// DELETE CARDS:
// Delete Job Card after clicking '.delete-btn':
document.addEventListener('click', function(event){
    const deleteBtn = event.target.closest('.delete-btn');

    if(!deleteBtn){
        return;
    }

    const card = deleteBtn.closest('.job-card');

    if(!card){
        return;
    }

    card.remove();

    updateJobInfo();

})