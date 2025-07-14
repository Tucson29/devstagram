
const container = document.getElementById("container");
const descriptions = document.querySelectorAll('.description');

var modal_postManu = document.getElementById('m-post-menu')
var modal_comment = document.getElementById('m-comment')
var modal_proposal = document.getElementById('m-proposal')
var modal_question = document.getElementById('m-question')
var modal_description = document.getElementById('m-description')
var modal_report = document.getElementById('m-report')
var modal_answerMenu = document.getElementById('m-answer-menu')


var fake_modal = document.getElementById('fake-m')
const searchIcon = document.querySelector('.searchicon')
const searchBar = document.querySelector('.searchbar')
const newposts = document.querySelector('.newposts')
const filters = document.querySelector('.filters')
const closer = document.querySelector('.closer')
const headerModal = document.querySelector('.header-modal')
const headPart = document.querySelector('.head')

let fetchedProjects = [0, 1, 2, 3, 4, 5];

const floatingFooter = document.querySelectorAll(".floating-footer");

window.onload = function() {
    if(window.innerWidth <= 1000){
        container.classList.add("container-fullScreen")
        document.querySelectorAll(".project").forEach(project => {
            project.classList.add("full-screen")
        })
        document.querySelectorAll(".footer").forEach(foot => {
            foot.style.display = "none";
        })
        document.querySelectorAll(".header").forEach(head => {
            head.style.display = "none";
        })
        for (let i = 0; i < floatingFooter.length; i++) {
            floatingFooter[i].style.display = "flex";
        }

    } else if (window.innerWidth >= 1000) {
        container.classList.remove("container-fullScreen")
        document.querySelectorAll(".project").forEach(project => {
            project.classList.remove("full-screen")
        })
        document.querySelectorAll(".footer").forEach(foot => {
            foot.style.display = "flex";
        })
        document.querySelectorAll(".header").forEach(head => {
            head.style.display = "flex";
        })
        for (let i = 0; i < floatingFooter.length; i++) {
            floatingFooter[i].style.display = "none";
        }
    }
})
window.addEventListener("resize", () => {
    if(window.innerWidth <= 1000){
        container.classList.add("container-fullScreen")
        document.querySelectorAll(".project").forEach(project => {
            project.classList.add("full-screen")
        })
        document.querySelectorAll(".footer").forEach(foot => {
            foot.style.display = "none";
        })
        document.querySelectorAll(".header").forEach(head => {
            head.style.display = "none";
        })
        for (let i = 0; i < floatingFooter.length; i++) {
            floatingFooter[i].style.display = "flex";
        }

    } else if (window.innerWidth >= 1000) {
        container.classList.remove("container-fullScreen")
        document.querySelectorAll(".project").forEach(project => {
            project.classList.remove("full-screen")
        })
        document.querySelectorAll(".footer").forEach(foot => {
            foot.style.display = "flex";
        })
        document.querySelectorAll(".header").forEach(head => {
            head.style.display = "flex";
        })
        for (let i = 0; i < floatingFooter.length; i++) {
            floatingFooter[i].style.display = "none";
        }
    }
})

let Likes = [0, 0, 0, 0, 0, 0]
// FUNCTIONINGS | START
async function like (e) {
    const target = e.currentTarget;
    let likes = parseInt(target.children[1].innerHTML)

    const targetId = e.currentTarget.parentNode.parentNode.id;
    
    
    if(Likes[targetId] == 1){
        likes -= 1
        target.children[0].innerHTML = '<path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/>'
        Likes[targetId] = 0;
        //container[0].children[button.parentNode.parentNode.id-1].children[2].children[0].children[0].outerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg>'
    } else if(Likes[targetId] == 0){
        likes += 1
        target.children[0].innerHTML = '<path fill="#027382" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>'
        Likes[targetId] = 1;
        //container[0].children[button.parentNode.parentNode.id-1].children[2].children[0].children[0].outerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#027382" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>'
    }
    
    target.children[1].innerHTML = likes
    //like.remove()
}


let Saves = [0, 0, 0, 0, 0, 0]
async function save(e){
    const target = e.currentTarget;
    
    const targetId = e.currentTarget.parentNode.parentNode.parentNode.id;
    console.log(targetId)
    
    if(Saves[targetId] == 1){
        console.log("unsaved")
        target.childNodes[0].innerHTML = '<path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>'
        Saves[targetId] = 0
    } else if(Saves[targetId] == 0){
        console.log("saved")
        target.childNodes[0].innerHTML = '<path fill="#dbac00" d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>'
        Saves[targetId] = 1
    }
}


// MODALS | START

window.onclick = function(event) {
    if (event.target == modal_postManu) {
        modal_postManu.style.display = "none";
        var showCode = modal_postManu.querySelector("#show-code")
        var showCodeHR = modal_postManu.querySelector("#show-code-HR")
        showCode.style.display = "none"
        showCodeHR.style.display = "none"
    } else if (event.target == modal_comment) {
        modal_comment.style.display = "none";
        let elements = modal_comment.getElementsByClassName("added");
        while(elements.length > 0) {
            elements[0].parentNode.removeChild(elements[0]);
            fetchedComments.pop()
        }
    } else if (event.target == modal_proposal) {
        modal_proposal.style.display = "none";
        let elements = modal_proposal.getElementsByClassName("added");
        while(elements.length > 0) {
            elements[0].parentNode.removeChild(elements[0]);
            fetchedRecommendations.pop()
        }
    } else if (event.target == modal_question) {
        modal_question.style.display = "none";
        let elements = modal_question.getElementsByClassName("added");
        while(elements.length > 0) {
            elements[0].parentNode.removeChild(elements[0]);
            fetchedQuestions.pop()
        }
    } else if (event.target == modal_description) {
        modal_description.style.display = "none";
        var showCode = modal_description.querySelector("#show-code")
        showCode.style.display = "none"
    } else if (event.target == fake_modal) {
        fake_modal.style.display = "none";
        searchIcon.style.display = 'flex';
        searchBar.style.display = 'none';
        searchBar.value = "";
        cardConteriner.innerHTML = ""
        newposts.style.display = 'flex'
        filters.style.display = 'block';
        closer.style.display = 'none';
        headerModal.style.display = 'none';
        headPart.style.width = "unset"
        headPart.style.left = "60%"
    } else if (event.target ==  modal_report){
        modal_report.style.display = "none";
    }
}
function closeModal(e){
    const targetId = e.currentTarget.parentNode.parentNode.parentNode.id;
    if (targetId == "m-description") {
        modal_description.style.display = "none";
        var showCode = modal_description.querySelector("#show-code")
        showCode.style.display = "none"
    } else if (targetId == "m-comment") {
        modal_comment.style.display = "none";
        let elements = modal_comment.getElementsByClassName("added");
        while(elements.length > 0) {
            elements[0].parentNode.removeChild(elements[0]);
            fetchedComments.pop()
        }
    } else if (targetId == "m-proposal") {
        modal_proposal.style.display = "none";
        let elements = modal_proposal.getElementsByClassName("added");
        while(elements.length > 0) {
            elements[0].parentNode.removeChild(elements[0]);
            fetchedRecommendations.pop()
        }
    } else if (targetId == "m-question") {
        modal_question.style.display = "none";
        let elements = modal_question.getElementsByClassName("added");
        while(elements.length > 0) {
            elements[0].parentNode.removeChild(elements[0]);
            fetchedQuestions.pop()
        }
    } else if (e.currentTarget == closer) {
        searchIcon.style.display = 'flex';
        searchBar.style.display = 'none';
        searchBar.value = "";
        cardConteriner.innerHTML = ""
        newposts.style.display = 'flex'
        filters.style.display = 'block';
        closer.style.display = 'none';
        headerModal.style.display = 'none';
        fake_modal.style.display = 'none';
        headPart.style.width = "unset"
        headPart.style.left = "60%"
    } else if(targetId == "m-report"){
        modal_report.style.display = "none";
    }
}


function closePM(e){
    modal_postManu.style.display = "none";
    var showCode = modal_postManu.querySelector("#show-code")
    var showCodeHR = modal_postManu.querySelector("#show-code-HR")
    showCode.style.display = "none"
    showCodeHR.style.display = "none"
}
let target;
async function project_menu(e){
    modal_postManu.style.display = "block";
    const targetId = e.currentTarget.parentNode.parentNode.parentNode.id;
    target = fetchedProjects[targetId]

    var showCode = modal_postManu.querySelector("#show-code")
    var showCodeHR = modal_postManu.querySelector("#show-code-HR")
    if(target.code_sharing){
        showCode.style.display = "flex"
        showCodeHR.style.display = "block"
        showCode.href = `/code/${target.id}`
    }
}
async function projectMenu_follow(e){
    const request = new Request(`http://localhost:5000/api/follow/${target.creator_id}`)
    const response = await fetch(request)
    const data = await response.json()
    if(data=="followed"){
        document.querySelector('.follow-href').innerHTML = "Unfollow"
    }else{
        document.querySelector('.follow-href').innerHTML = "Follow"
    }
}

function share(e){
    navigator.share({
        text: "SHARE",
        url: `http://localhost:5000/project/${fetchedProjects[e.currentTarget.parentNode.parentNode.parentNode.id].id}`
    })
}

// BYFOOTERS | START

let tat;
function openModal_comment(e){
    const targetId = e.currentTarget.parentNode.parentNode.id;
    tat = fetchedProjects[targetId]
    //modal_comment.querySelector("[formes]").action = `/api/comment/${tat.id}`
    modal_comment.style.display = "block";
    fetchComments()
}
let fetchedComments = [];
const commentCard_template = document.querySelector("[comment-template]")
const commentConteriner = document.querySelector(".comment-holder")
async function fetchComments(e){
    const request = new Request(`http://localhost:5000/get/comments/forp/${tat.id}`)
    const response = await fetch(request)
    const data = await response.json()
    if(data == "none") {
        document.getElementById("default-comment").style.display = "flex";
    } else {
        document.getElementById("default-comment").style.display = "none";
        data.forEach(async function(item, index){
            const card = commentCard_template.content.cloneNode(true).children[0]
            card.classList.add("added")
            card.id = index
            const username = card.querySelector("[username]")
            const image = card.querySelector("[image]")
            const hyperlink = card.querySelector("[hyperlink]")
            const description = card.querySelector("[description]")
            const likeSpan = card.querySelector("[likeC]")
            const icon = card.querySelector("[icon]")
            username.innerHTML = item.username
            description.innerHTML = item.comment
            image.src = `${item.image}`
            hyperlink.href = `/${item.username}`
            likeSpan.innerHTML = item.likes

            fetchedComments.push(item)
            likeCheck(icon, index)

            commentConteriner.insertBefore(card, commentConteriner.firstChild)
            
        })
        //sortDivs()
    }
}
async function likeCheck(icon, index){
    const request1 = new Request(`http://localhost:5000/get/comment_liked/${fetchedComments[index].id}`)
    const response1 = await fetch(request1)
    const data1 = await response1.json()
    if(data1){
        icon.innerHTML = '<path fill="#027382" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>'
    }
}
async function comment_submit(e){
    const commInput = document.getElementById("commet")
    if(!commInput.value){
        e.preventDefault()
    }else {
        e.preventDefault()
        console.log(tat.id)
        const request = new Request(`http://localhost:5000/api/comment/${tat.id}`, {
            method: "POST",
            headers: {
                comment: commInput.value
            }
        })
        const response = await fetch(request)
        const data = await response.json()
        if(data=="sucess"){
            let elements = document.getElementsByClassName("added");
            while(elements.length > 0) {
                elements[0].parentNode.removeChild(elements[0]);
                fetchedComments.pop()
            }
            commInput.value = ""
            fetchComments()
        }
    }   
}
async function comment_like (e) {
    const target = e.currentTarget;
    let likes = parseInt(target.children[1].innerHTML)
    console.log(target.parentNode.parentNode.parentNode.parentNode.parentNode.id)
    
    const request = new Request('http://localhost:5000/api/commentLike', {
        method: 'POST',
        headers: {
            "comment_id": fetchedComments[target.parentNode.parentNode.parentNode.parentNode.parentNode.id].id //fetchedProjects[target.parentNode.parentNode.id-1].id
        }
    })
    
    const response = await fetch(request)
    const data = await response.json()
    
    if(data=="unliked"){
        likes -= 1
        target.children[0].innerHTML = '<path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/>'
        //container[0].children[button.parentNode.parentNode.id-1].children[2].children[0].children[0].outerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg>'
    } else if(data=="liked"){
        likes += 1
        target.children[0].innerHTML = '<path fill="#027382" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>'
        //container[0].children[button.parentNode.parentNode.id-1].children[2].children[0].children[0].outerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#027382" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>'
    }
    
    target.children[1].innerHTML = likes
    //like.remove()
}


let tatR;
function openModal_proposal(e){
    const targetId = e.currentTarget.parentNode.parentNode.id;
    tatR = fetchedProjects[targetId]
    modal_proposal.style.display = "block";
    fetchRecommendations()
}
let fetchedRecommendations = [];
const recommendationCard_template = document.querySelector("[recommendation-template]")
const recommendationConteriner = document.querySelector(".recommendation-holder")
async function fetchRecommendations(e){
    const request = new Request(`http://localhost:5000/get/recommendations/forp/${tatR.id}`)
    const response = await fetch(request)
    const data = await response.json()
    if(data == "none") {
        document.getElementById("default-reco").style.display = "flex";
    } else {
        let elements = document.getElementsByClassName("added");
        while(elements.length > 0) {
            elements[0].parentNode.removeChild(elements[0]);
            fetchedRecommendations.pop()
        }
        document.getElementById("default-reco").style.display = "none";
        data.forEach(async function(item, index){
            const card = recommendationCard_template.content.cloneNode(true).children[0]
            card.classList.add("added")
            card.id = index
            const username = card.querySelector("[username]")
            const image = card.querySelector("[image]")
            const hyperlink = card.querySelector("[hyperlink]")
            const description = card.querySelector("[description]")
            const likeSpan = card.querySelector("[likeC]")
            const icon = card.querySelector("[icon]")
            username.innerHTML = item.username
            description.innerHTML = item.recommendation
            image.src = `/profile_images/${item.image}`
            hyperlink.href = `/${item.username}`
            likeSpan.innerHTML = item.likes

            fetchedRecommendations.push(item)
            likeCheckRecommendation(icon, index)

            recommendationConteriner.insertBefore(card, recommendationConteriner.firstChild)
            
        })
    }
}
async function likeCheckRecommendation(icon, index){
    const request1 = new Request(`http://localhost:5000/get/recommendation_liked/${fetchedRecommendations[index].id}`)
    const response1 = await fetch(request1)
    const data1 = await response1.json()
    if(data1){
        icon.innerHTML = '<path fill="#027382" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>'
    }
}
async function recommendation_submit(e){
    const recoInput = document.getElementById("recoinput")
    if(!recoInput.value){
        e.preventDefault()
    }else {
        e.preventDefault()
        const request = new Request(`http://localhost:5000/api/recommend/${tatR.id}`, {
            method: "POST",
            headers: {
                recommendation: recoInput.value
            }
        })
        const response = await fetch(request)
        const data = await response.json()
        if(data=="sucess"){
            let elements = document.getElementsByClassName("added");
            while(elements.length > 0) {
                elements[0].parentNode.removeChild(elements[0]);
                fetchedRecommendations.pop()
            }
            recoInput.value = ""
            fetchRecommendations()
        }
    }   
}
async function recommendation_like (e) {
    const target = e.currentTarget;
    let likes = parseInt(target.children[1].innerHTML)
    
    const request = new Request('http://localhost:5000/api/recommendationLike', {
        method: 'POST',
        headers: {
            "recommendation_id": fetchedRecommendations[target.parentNode.parentNode.parentNode.parentNode.parentNode.id].id //fetchedProjects[target.parentNode.parentNode.id-1].id
        }
    })
    
    const response = await fetch(request)
    const data = await response.json()
    
    if(data=="unliked"){
        likes -= 1
        target.children[0].innerHTML = '<path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/>'
        //container[0].children[button.parentNode.parentNode.id-1].children[2].children[0].children[0].outerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg>'
    } else if(data=="liked"){
        likes += 1
        target.children[0].innerHTML = '<path fill="#027382" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>'
        //container[0].children[button.parentNode.parentNode.id-1].children[2].children[0].children[0].outerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#027382" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>'
    }
    
    target.children[1].innerHTML = likes
    //like.remove()
}



let tatQ;
function openModal_question(e){
    const targetId = e.currentTarget.parentNode.parentNode.id;
    tatQ = fetchedProjects[targetId]
    //modal_question.querySelector("[formes]").action = `/api/question/${tatQ.id}`
    modal_question.style.display = "block";
    fetchQuestions()
}
let fetchedQuestions = [];
const questionCard_template = document.querySelector("[question-template]")
const questionConteriner = document.querySelector(".question-holder")
async function fetchQuestions(e){
    const request = new Request(`http://localhost:5000/get/questions/forp/${tatQ.id}`)
    const response = await fetch(request)
    const data = await response.json()
    if(data == "none") {
        document.getElementById("default-question").style.display = "flex";
    } else {
        document.getElementById("default-question").style.display = "none";
        data.forEach(async function(item, index){
            const card = questionCard_template.content.cloneNode(true).children[0]
            card.classList.add("added")
            card.id = index
            const username = card.querySelector("[username]")
            const image = card.querySelector("[image]")
            const hyperlink = card.querySelector("[hyperlink]")
            const description = card.querySelector("[description]")
            const likeSpan = card.querySelector("[likeC]")
            const answerSpan = card.querySelector("[answerC]")
            const icon = card.querySelector("[icon]")
            username.innerHTML = item.username
            description.innerHTML = item.question
            image.src = `/profile_images/${item.image}`
            hyperlink.href = `/${item.username}`
            likeSpan.innerHTML = item.likes
            answerSpan.innerHTML = item.answers
            console.log("a",item.answers)
            if(item.answers == "0"){
                card.querySelector("[seeanswers]").style.display = "none";
            }

            fetchedQuestions.push(item)
            likeCheckQuestion(icon, index)

            questionConteriner.insertBefore(card, questionConteriner.firstChild)
            
        })
    }
}
async function likeCheckQuestion(icon, index){
    const request1 = new Request(`http://localhost:5000/get/question_liked/${fetchedQuestions[index].id}`)
    const response1 = await fetch(request1)
    const data1 = await response1.json()
    if(data1){
        icon.innerHTML = '<path fill="#027382" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>'
    }
}
async function question_submit(e){
    const queInput = document.getElementById("questionInput")
    if(!queInput.value){
        e.preventDefault()
    }else {
        e.preventDefault()
        console.log(tatQ.id)
        const request = new Request(`http://localhost:5000/api/question/${tatQ.id}`, {
            method: "POST",
            headers: {
                question: queInput.value
            }
        })
        const response = await fetch(request)
        const data = await response.json()
        if(data=="sucess"){
            let elements = modal_question.getElementsByClassName("added");
            while(elements.length > 0) {
                elements[0].parentNode.removeChild(elements[0]);
                fetchedQuestions.pop()
            }
            queInput.value = ""
            fetchQuestions()
        }
    }   
}
async function question_like (e) {
    const target = e.currentTarget;
    let likes = parseInt(target.children[1].innerHTML)
    
    const request = new Request('http://localhost:5000/api/questionLike', {
        method: 'POST',
        headers: {
            "question_id": fetchedQuestions[target.parentNode.parentNode.parentNode.parentNode.parentNode.id].id //fetchedProjects[target.parentNode.parentNode.id-1].id
        }
    })
    
    const response = await fetch(request)
    const data = await response.json()
    
    if(data=="unliked"){
        likes -= 1
        target.children[0].innerHTML = '<path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/>'
        //container[0].children[button.parentNode.parentNode.id-1].children[2].children[0].children[0].outerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg>'
    } else if(data=="liked"){
        likes += 1
        target.children[0].innerHTML = '<path fill="#027382" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>'
        //container[0].children[button.parentNode.parentNode.id-1].children[2].children[0].children[0].outerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#027382" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>'
    }
    
    target.children[1].innerHTML = likes
}
let fetchedAnswers = [];
const answerCard_template = document.querySelector("[answer-template]")
let targetQuestion;
let targetQuestionElement;
let answerContainer;
async function toggleAnswers(e){
    const targetQuestionId = e.currentTarget.parentNode.parentNode.parentNode.id
    targetQuestion = fetchedQuestions[targetQuestionId]
    targetQuestionElement = e.currentTarget.parentNode.parentNode.parentNode
    answerContainer = targetQuestionElement.querySelector("[answer-container]")
    const seeButton = targetQuestionElement.querySelector("[seeanswers-btn]") 
    if(seeButton.innerHTML == "see answers"){
        let elements = modal_question.getElementsByClassName("addedAnswer");
        while(elements.length > 0) {
            elements[0].parentNode.removeChild(elements[0]);
            fetchedAnswers.pop()
        }
        const tobbi = modal_question.querySelectorAll(".hbt")
        for (var i=0; i < tobbi.length; i++) {
            tobbi[i].innerHTML = "see answers";
        }
        seeButton.innerHTML = "hide answers"
        //targetQuestionElement.querySelector('#line').style.display = "flex"
        
        fetchAnswers()
    } else {
        let elements = modal_question.getElementsByClassName("addedAnswer");
        while(elements.length > 0) {
            elements[0].parentNode.removeChild(elements[0]);
            fetchedAnswers.pop()
        }
        seeButton.innerHTML = "see answers"
        //targetQuestionElement.getElementById("line").style.display = "none"
    }
}
async function fetchAnswers(e){
    const request = new Request(`http://localhost:5000/get/answers/forp/${targetQuestion.id}`)
    const response = await fetch(request)
    const data = await response.json()
    console.log("adat", data)
    data.forEach(async function(item, index){
        const card = answerCard_template.content.cloneNode(true).children[0]
        card.classList.add("addedAnswer")
        card.id = index
        const username = card.querySelector("[username]")
        const image = card.querySelector("[image]")
        const hyperlink = card.querySelector("[hyperlink]")
        const description = card.querySelector("[description]")
        const likeSpan = card.querySelector("[likeC]")
        const icon = card.querySelector("[icon]")
        username.innerHTML = item.username
        description.innerHTML = item.answer
        image.src = `/profile_images/${item.image}`
        hyperlink.href = `/${item.username}`
        likeSpan.innerHTML = item.likes

        fetchedAnswers.push(item)
        likeCheckAnswer(icon, index)

        answerContainer.insertBefore(card, answerContainer.firstChild)
    })
}
async function likeCheckAnswer(icon, index){
    const request1 = new Request(`http://localhost:5000/get/answer_liked/${fetchedAnswers[index].id}`)
    const response1 = await fetch(request1)
    const data1 = await response1.json()
    if(data1){
        icon.innerHTML = '<path fill="#027382" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>'
    }
}
const answerSubmitDiv = document.getElementById("answerSubmit")
const questionSubmitDiv = document.getElementById("questionSubmit")
function shortAnswer(e){
    modal_answerMenu.style.display = "none"
    const answeringer = document.getElementById("answeringer")
    answeringer.style.display = "flex";
    
    answerSubmitDiv.style.display = "flex"
    questionSubmitDiv.children[0].type = "button"
    questionSubmitDiv.style.display = "none"

    answeringer.children[0].children[0].innerHTML = `Answering on "${targetQ.question}"`
    modal_question.querySelector("[formes]").action = `/api/answer/${targetQ.id}`
    document.getElementById("questionInput").focus()
}
function stopAnswer(e){
    const answeringer = document.getElementById("answeringer")
    answeringer.style.display = "none";

    questionSubmitDiv.style.display = "flex"
    questionSubmitDiv.children[0].type = "submit"
    answerSubmitDiv.style.display = "none"

    modal_question.querySelector("[formes]").action = `/api/question/${tatQ.id}`
}
async function answer_submit(e){
    const queInput = document.getElementById("questionInput")
    if(!queInput.value){
        e.preventDefault()
    }else {
        e.preventDefault()
        const request = new Request(`http://localhost:5000/api/answer/${targetQ.id}`, {
            method: "POST",
            headers: {
                answer: queInput.value
            }
        })
        const response = await fetch(request)
        const data = await response.json()
        if(data=="sucess"){
            let elements = modal_question.getElementsByClassName("addedAnswer");
            while(elements.length > 0) {
                elements[0].parentNode.removeChild(elements[0]);
                fetchedAnswers.pop()
            }
            let elements2 = modal_question.getElementsByClassName("added");
            while(elements2.length > 0) {
                elements2[0].parentNode.removeChild(elements2[0]);
                fetchedQuestions.pop()
            }
            const answeringer = document.getElementById("answeringer")
            answeringer.style.display = "none";
            questionSubmitDiv.style.display = "flex"
            answerSubmitDiv.style.display = "none"
            questionSubmitDiv.children[0].type = "submit"
            queInput.value = ""
            fetchQuestions()
        }
    }   
}
async function answer_like (e) {
    const target = e.currentTarget;
    let likes = parseInt(target.children[1].innerHTML)
    
    const request = new Request('http://localhost:5000/api/answerLike', {
        method: 'POST',
        headers: {
            "answer_id": fetchedAnswers[target.parentNode.parentNode.parentNode.parentNode.parentNode.id].id //fetchedProjects[target.parentNode.parentNode.id-1].id
        }
    })
    
    const response = await fetch(request)
    const data = await response.json()
    
    if(data=="unliked"){
        likes -= 1
        target.children[0].innerHTML = '<path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/>'
        //container[0].children[button.parentNode.parentNode.id-1].children[2].children[0].children[0].outerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg>'
    } else if(data=="liked"){
        likes += 1
        target.children[0].innerHTML = '<path fill="#027382" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>'
        //container[0].children[button.parentNode.parentNode.id-1].children[2].children[0].children[0].outerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#027382" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>'
    }
    
    target.children[1].innerHTML = likes
}



function openModal_description(e){
    var showCode = modal_description.querySelector("#show-code")
    modal_description.style.display = "block";
    const targetId = e.currentTarget.parentNode.parentNode.id;
    console.log(targetId)
    target = fetchedProjects[targetId]
    if(targetId == 0) {
        document.querySelector('.modal-description-dsc').innerHTML = "This login page is one of my first web projects. I started using here animation as you can see. Hope you like it."
    } else if(targetId == 1){
        document.querySelector('.modal-description-dsc').innerHTML = "My first calculator app."
    } else if(targetId == 2){
        document.querySelector('.modal-description-dsc').innerHTML = "Blue moving line around a big B"
    } else if(targetId == 3){
        document.querySelector('.modal-description-dsc').innerHTML = "This is my second javascript app."
    } else if(targetId == 4){
        document.querySelector('.modal-description-dsc').innerHTML = "Tic-Tac-Toe engine with a modern UI. It's unbeatable and it took me 5 days to build."
    }
    if(target.code_sharing){
        showCode.style.display = "flex"
        showCode.children[0].href = `/code/${target.id}`
    }
}
function openModal_report(e){
    modal_report.style.display = "block";
    modal_postManu.style.display = "none";
    modal_report.querySelector("[formes]").action = `/report/project/${target.id}`
}
let targetQ;
function openModal_answerMenu(e){
    targetQ = fetchedQuestions[e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.id];
    modal_answerMenu.style.display = "block";
    modal_answerMenu.querySelector("[longA]").href = `/answers/answer/${fetchedQuestions[e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.id].id}`
}

// BYFOOTERS | END
// MODALS | END
// FUNCTIONGINGS | END
