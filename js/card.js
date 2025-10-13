import { workInfo } from './work.js'
const workCardContainer = document.getElementsByClassName("work-card-container")[0];

let workDetails;
let companyDetailsDesc;
let workCompany;
let workCard;
let companyName;
let downArr;
let workTitleDate;
let jobTitle;
let duration;

let workProfile;
let jobDesc;
let companyDetails;
let myRole;
let ul;
let myRoleDetails;

displayWorkExpCard();
appendListeners();

function displayWorkExpCard() {

    for (let i = 0; i < workInfo.length; i++) {

        workCompany = createElement('div', 'work-company');
        workCard = createElement('div', 'work-card');
        let imgContainer = createElement('div', 'img-container');

        companyName = createElement('p', '', workInfo[i].company);
        downArr = createImg('./img/down-arrow-1.png', 'Down Arrow', 'toggle-button');
        workCompany.appendChild(companyName);
        imgContainer.appendChild(downArr);
        workCompany.appendChild(imgContainer);
        workCard.appendChild(workCompany);

        workDetails = createElement('div', 'work-details');
        workTitleDate = createElement('div', 'work-title-date');
        jobTitle = createElement('p', '', workInfo[i].jobTitle);
        duration = createElement('span', '', `${workInfo[i].from} - ${workInfo[i].to}`);
        workTitleDate.appendChild(jobTitle);
        workTitleDate.appendChild(duration);
        workDetails.appendChild(workTitleDate);

        workProfile = createElement('div', 'work-profile');
        jobDesc = createElement('div', 'job-desc');
        companyDetails = createElement('p', '', 'About');
        companyDetailsDesc = createElementAndAppend('p', '', workInfo[i].companyDetails);
        jobDesc.appendChild(companyDetails);
        jobDesc.appendChild(companyDetailsDesc);

        myRole = createElement('div', 'my-role');
        ul = createElement('ul', '', '');
        myRoleDetails = createElement('p', '', 'Roles & Responsibilities');
        ul.appendChild(myRoleDetails);
        for (let j = 0; j < workInfo[i].jobDetails.length; j++) {
            const li = createElementAndAppend('li', '', workInfo[i].jobDetails[j]);
            ul.appendChild(li);
        }
        myRole.appendChild(ul);
        workProfile.appendChild(jobDesc);
        workProfile.appendChild(myRole);

        workDetails.appendChild(workProfile);
        workCard.appendChild(workDetails);

        // console.log(workCardContainer);
        // console.log(workCard);
        workCardContainer.appendChild(workCard);
    }
    // workExperience.appendChild(workCardContainer);
}

function appendListeners() {
    // Event Listener

    toggleWorkCard();

}

function toggleWorkCard() {

    workDetails = document.getElementsByClassName('work-details');
    for (let i = 0; i < workDetails.length; i++) {
        let isShown = false;
        const toggleButton = workDetails[i].previousSibling.childNodes[1].firstChild;

        toggleButton.parentNode.parentNode.addEventListener('click', () => {
            if (!isShown) {
                toggleButton.parentNode.parentNode.nextSibling.style.display = 'flex';
                toggleButton.src = './img/up-arrow-1.png';
                toggleButton.alt = 'up arrow';
                isShown = true;
            } else {
                toggleButton.parentNode.parentNode.nextSibling.style.display = 'none';
                toggleButton.src = './img/down-arrow-1.png';
                toggleButton.alt = 'down arrow';
                isShown = false;
            }
        });
    }
}

function createImg(imgSrc, altTxt, className) {
    const el = document.createElement('img');
    el.src = imgSrc;
    el.alt = altTxt;
    el.classList.add(className);
    return el;
}

function createElement(elName, className, content) {
    const el = document.createElement(elName);
    if (className) {
        el.classList.add(className);
    }
    if (content) {
        el.innerText = content;
    }
    return el;
}

function createElementAndAppend(elName, className, content) {
    const el = document.createElement(elName);
    if (className) {
        el.classList.add(className);
    }
    if (content) {
        el.innerHTML = content;
    }
    return el;
}