
// DECLARE VARIABLE: DOM Elements & Selectors:

// Dynamic Changing of Cards Length | Calculator:
let totalCount = document.getElementById('total-count');
let updateInfo = document.getElementById('update-job-info');

// To Store Data in Interview + Rejected Cards:
const interviewContainer = document.getElementById('interview-container'); 
const rejectedContainer = document.getElementById('rejected-container');

// For Calculating Interview + Rejected Cards:
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');

// To Chnage Buttons Color after Clicking | Filter Btn:
const allJobsBtn = document.getElementById('all-jobs-btn')
const headInterviewBtn = document.getElementById('head-interview-btn')
const headRejectedBtn = document.getElementById('head-rejected-btn')

// To Get All Jobs Container:
const jobsCardsContainer = document.getElementById('jobs-cards');



// CALCULATING FUNCTION:

// Calculate Card Counts:
function updateJobInfo(){
    
    // To Get All Jobs Section's Children's Length:
    const total = jobsCardsContainer.children.length;

    // To Get Interview + Rejected Container's Children's Length:
    const interview = interviewContainer.children.length;
    const rejected = rejectedContainer.children.length;
    
    // Update Dashboard Numbers: 
    totalCount.innerText = total;
    interviewCount.innerText = interview;
    rejectedCount.innerText = rejected;

    // Update Status line:
    updateInfo.innerText = `Total: ${total} | Interview: ${interview} | Rejected: ${rejected}`

    // Call the function to get No Job Card if any Container's Length === 0 :
    checkNoJob();
}
// Call the function to Update Calculating Dashboard:
updateJobInfo();



// HEADER BTN COLORS FUNCTION:

function resetBtnColors(){

    // Set 3 Variable's within an Array for Looping:
    const buttons = [allJobsBtn, headInterviewBtn, headRejectedBtn];

    buttons.forEach(btn => {
        btn.classList.remove('bg-blue-600', 'bg-green-600', 'bg-red-600', 'text-white')
    });
}

 // After Clicking Buttons > Call the Function to Remove Active Class form Buttons: and Add classlist to Activate and to Exicute:
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



// CARD MOVE FUNCTION:

// To Move a Card within Interview + Rejected's Container:
function moveJobCard(card, targetContainer, move = false){

    let cardClone;
    
    // Conditional Statement: if move = true then Move Original Card and I don't Want it. move = false then create a clone and I want it.
    if(move){
        cardClone = card;
    }
    else{
        cardClone = card.cloneNode(true);
    }
    
    targetContainer.appendChild(cardClone);
}

// Event Delegation for Inerview/Rejected Buttons:
document.addEventListener('click', function(event){
    const btn = event.target.closest('.interview-btn, .rejected-btn');
    
    // if the Click wasn't on Relevant Btn, stop function immediately:
    if(!btn){
        return;
    }

    // To Get the Card where Clicked: Locate the job card and its current parent container:
    const card = btn.closest('.job-card');
    const sourceContainer = card.parentNode;

    // Destination Box where the Card Go:
    let destinationContainer; 


    // Update Text / Color NOT APPLIED Btn:

    // Set destination and update card styling based on the button clicked:

    if(btn.classList.contains('interview-btn')){
        destinationContainer = interviewContainer;
        updateStatusBtn(card, 'interview');
    }
    else{
        destinationContainer = rejectedContainer;
        updateStatusBtn(card, 'rejected');
    }


    // if the card is taken from the main list, the original will be left there and a copy (clone) will be sent. But once the copy is made, if it is later sent to Rejected from the interview, it will be removed directly.
    const isFromAllJobs = sourceContainer === jobsCardsContainer;
    const isMove = !isFromAllJobs;

    // Prevent Duplicate Card in Both Lists:
    const otherContainer = destinationContainer === interviewContainer ? rejectedContainer : interviewContainer;

    // Remove existing instances of this card from both sub-containers to keep data clean:
    const existingOther = otherContainer.querySelector(`#${card.id}`);
    const existingdestination = destinationContainer.querySelector(`#${card.id}`);

    if(existingOther){
        existingOther.remove();
    }

    if(existingdestination){
        existingdestination.remove();
    }

    // Execute the move/clone and refresh the dashboard numbers:
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


