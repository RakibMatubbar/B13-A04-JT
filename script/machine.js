// MACHINE.JS - The Engine of the Application:

// Hidden / Show function: Which Section Want to Show or Hide:

// Tracking which section is currently visible:
let currentSection = 'jobs-cards';

// Controls which main section to display:
function showOnly(id){

    currentSection = id;
    
    //  Select all main containers:
    const jobsCards = document.getElementById('jobs-cards');
    const interviewCards = document.getElementById('interview-cards');
    const rejectedCards = document.getElementById('rejected-cards');

    // Hide everything first to reset the view
    jobsCards.classList.add('hidden');
    interviewCards.classList.add('hidden');
    rejectedCards.classList.add('hidden');

    // Show only the requested section by removing the 'hidden' class:
    const selected = document.getElementById(id);
    selected.classList.remove('hidden')

    // Re-check isEmpty or not:
    checkNoJob();
}


// No Job Section: According to Active Card > Get Length:
function checkNoJob(){
    const noJob = document.getElementById('no-job');

    let length;

    // Count > Based on the Active Section's Children:
    if(currentSection === 'jobs-cards'){
        length = document.getElementById('jobs-cards').children.length;
    }
    else if(currentSection === 'interview-cards'){
        length = document.getElementById('interview-container').children.length;
    }
    else if(currentSection === 'rejected-cards'){
        length = document.getElementById('rejected-container').children.length;
    }

    // Show > "No Job Card" if length is zero:
    if(length === 0){
        noJob.classList.remove('hidden');
    }
    else{noJob.classList.add('hidden')

    }
}

// Status Btn: Dynamically Changes Card Style:
function updateStatusBtn(card, type){
    const statusBtn = card.querySelector('.status-btn');

    card.classList.remove('border-l-4', 'border-green-500', 'border-red-500');

    if(type === 'interview'){
        statusBtn.classList.remove('bg-red-100', 'text-red-600');
        statusBtn.classList.add('bg-green-100', 
        'text-green-600');

        statusBtn.innerText = 'INTERVIEW';

        card.classList.add('border-l-4', 'border-green-500');
    }
    else if(type === 'rejected'){
        statusBtn.classList.remove('bg-green-100', 'text-green-600');
        statusBtn.classList.add('bg-red-100', 'text-red-600');

        statusBtn.innerText = 'REJECTED';

        card.classList.add('border-l-4', 'border-red-500');
    }
}


