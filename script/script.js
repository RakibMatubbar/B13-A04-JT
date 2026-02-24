
// DECLARE VARIABLE: DOM Elements & Selectors:

// To Calculate update-job-info & Total:
let totalCount = document.getElementById('total-count');
let updateInfo = document.getElementById('update-job-info');

// Get btnContainer To Change it's Color:
const btnContainer = document.getElementById('jobs-btn-container');

// To Get All Jobs Container:
const jobsCardsContainer = document.getElementById('jobs-cards');

// For Calculating Interview + Rejected Cards:
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');

// To Store Data in Interview + Rejected Cards:
const interviewContainer = document.getElementById('interview-container'); 
const rejectedContainer = document.getElementById('rejected-container');


// DASHBOARD CALCULATING FUNCTION:

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
    
    // Daynamic Status of Counting Cards:
    if(currentSection === 'interview-cards'){
        updateInfo.innerText = `${interview} of ${total} Jobs`;
    }
    else if(currentSection === 'rejected-cards'){
        updateInfo.innerText = `${rejected} of ${total} Jobs`;
    }
    else{
        updateInfo.innerText = `${total} Jobs `
    }

    // Call the function to get No Job Card if any Container's Length === 0 :
    checkNoJob();
}
// Call the function to Update Calculating Dashboard:
updateJobInfo();



// TO CHANGE HEADER BTN COLORS:

btnContainer.addEventListener('click', function(event){
    const btn = event.target.closest('button');

    if(!btn){
        return;
    }

    const allButtons = btnContainer.querySelectorAll('button');

    // Looping ALl to Remove Default Color:
    for(const button of allButtons){
        button.classList.remove('bg-blue-600', 'bg-green-600', 'bg-red-600', 'text-white');
    }

    if(btn.id === 'all-jobs-btn'){
        btn.classList.add('bg-blue-600', 'text-white')
    }
    else if(btn.id === 'head-interview-btn'){
        btn.classList.add('bg-green-600', 'text-white')
        
    }
    else if(btn.id === 'head-rejected-btn'){
        btn.classList.add('bg-red-600', 'text-white')
        
    }
});


// TO CLONE A CARD WITHIN INTERVIEW/REJECTED CONTAINER:

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

});



// TO DELETE CARDS FROM ANYWHERE:

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
    alert('Delete Card.')

    updateJobInfo();

});



