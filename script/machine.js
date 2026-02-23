
// Hidden / Show function:
let currentSection = 'jobs-cards';

function showOnly(id){

    currentSection = id;
    
    const jobsCards = document.getElementById('jobs-cards');
    const interviewCards = document.getElementById('interview-cards');
    const rejectedCards = document.getElementById('rejected-cards');

    jobsCards.classList.add('hidden');
    interviewCards.classList.add('hidden');
    rejectedCards.classList.add('hidden');

    const selected = document.getElementById(id);
    selected.classList.remove('hidden')

    checkNoJob();
}


// No Job Section:
function checkNoJob(){
    const noJob = document.getElementById('no-job');

    let length;

    if(currentSection === 'jobs-cards'){
        length = document.getElementById('jobs-cards').children.length;
    }
    else if(currentSection === 'interview-cards'){
        length = document.getElementById('interview-container').children.length;
    }
    else if(currentSection === 'rejected-cards'){
        length = document.getElementById('rejected-container').children.length;
    }

    if(length === 0){
        noJob.classList.remove('hidden');
    }
    else{noJob.classList.add('hidden')

    }
}

// Status Btn:
function updateStatusBtn(card, type){
    const statusBtn = card.querySelector('.status-btn');

    statusBtn.classList.remove('bg-[#EEF4FF]', 'text-[#002C5C]', 'bg-green-100', 'text-green-600', 'bg-red-100', 'text-red-600');

    if(type === 'interview'){
        statusBtn.classList.add('bg-green-100', 'text-green-600')

        statusBtn.innerText = 'INTERVIEW';
    }
    else if(type === 'rejected'){
        statusBtn.classList.add('bg-red-100', 'text-red-600');
        statusBtn.innerText = 'REJECTED';
    }
}