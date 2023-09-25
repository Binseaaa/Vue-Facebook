<template>
    <div class="main-story">
        <div class="story">
             <div class="story1">
            <img src="../assets/s1.jpg" alt="" class="st1">
            <font-awesome-icon icon="fa-solid fa-circle-plus" />
            <p>Create story</p>
        </div>
        <div class="story2">
            <img src="../assets/group.jpg" alt="">
            <p>Jay Jo</p>
        </div>
        <div class="story2">
            <img src="../assets/vinny.jpg" alt="">
            <p>Vinny Hong</p>
        </div>
        <div class="story2">
            <img src="../assets/felip.jpg" alt="">
            <font-awesome-icon icon="fa-solid fa-circle-chevron-right" />
            <p>FELIP</p>
        </div>
        </div>
    </div>
    <div class="share">
        <div class="posting">
            <img src="../assets/s1.jpg" alt="">
            <input type="text" class="post" placeholder="What's on your mind, sir Benjie?">
        </div>
    </div>  
    <div class="chismis">
        <div class="chika1">
            <img src="../assets/profile.jpg" alt="">
            <div class="text">
                <h3>Fiona Millan</h3>
                <p>3m</p>
            </div>  
        </div>
        <div class="words">
            <h2>What is Lorem Ipsum?</h2>
            <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h4>
        </div>
    </div>
    <div class="chismis1">
        <div class="chika1">
            <img src="../assets/profile.jpg" alt="">
            <div class="text">
                <h3>Stern Salera</h3>
                <p>sponsored</p>
                <font-awesome-icon icon="fa-solid fa-earth-americas" />
            </div>  
        </div>
        <div class="ads">
            <img src="../assets/ads2.gif" alt="">
            <h3>Ads Campaign. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
        </div>
    </div>
</template>

<style scoped>
    .story {
        display:flex;
        flex-direction: row;
    }
    .fa-earth-americas {
        margin-left:4rem;
    }
    .post::placeholder {
        color: rgb(166, 166, 166);
        font-size: 1vw;
    }
    .share {
        background-color: rgb(36, 36, 36);
        border: none;
        border-radius: 1vw;
        padding: 1vw;
        width: 41vw;
        margin-top: 15px;
        margin-left: 6rem;
        display: flex;
    }



    .story2 img {
        background-color: rgb(36, 36, 36);
        border: none;
        border-radius: 1vw;
        width: 10vw;
        display: flex;
        height: 31.5vh;
    }
    .story1 img {
        background-color: rgb(36, 36, 36);
        border: none;
        border-top-left-radius: 1vw;
        border-top-right-radius: 1vw;
        width: 10vw;
        margin-bottom: -20px;
        display: flex;
        height: 25vh;
    }
    .story1 p {
        text-align: center;
        margin-top: 5px;
        color: white;
        font-size: .8em;
        font-weight: bold;
    }

    .story2 p {
        color: white;
        font-size: .8em;
        position: absolute;
        margin-top: -3vh;
        margin-left: 1vw;
        font-weight: bold;
    }
    .story1 {
        background-color: rgb(36, 36, 36);
        border: none;
        border-radius: 1vw;
        width: 10vw;
            margin-top: 10vh;
            margin-left: 6rem;
        height: 32vh;
        text-align: center;
    }
    .story2 {
        border: none;
        width: 10vw;
            margin-top: 10.5vh;
            margin-left: 1rem;
        height: 32vh;
        text-align: center;
    }
    .fa-circle-plus {
        color: #35ff86;
        background-color:rgb(36, 36, 36);
        font-size: 2.5vw;
        border-radius: 100%;
        padding: 5px;
        cursor: pointer;
    }    
    .fa-circle-chevron-right {
        color: #35ff86;
        margin-top: -50px;
    }
    .words {
        background-color: rgba(255, 255, 255, 0.703);
        border-radius: 1rem;
        margin-top: 15px;
        height: 35vh;
    }

    .ads img {
        height: 35vh;
        width: 41vw;
        margin-top: 10px;
        border: 1px solid;
    }

    .ads h3 {
        color: white;
        background-color: rgb(74, 72, 72);
        padding: 5px;
        border-radius: 5px;
        font-size: 1rem;
    }

    .words h2 ,h4{
        padding: 1rem;
        color: black;
    }

    .chismis {
        background-color: rgb(36, 36, 36);
        border: none;
        padding: 1vw;
        width: 41vw;
        margin-top: 3vh;
        margin-left: 6rem; 
        height: 45vh;
        border-radius: 1vw;
    }

    .chismis1 {
        background-color: rgb(36, 36, 36);
        border: none;
        padding: 1vw;
        width: 41vw;
        margin-top: 3vh;
        margin-left: 6rem; 
        height: 52vh;
        border-radius: 1vw;
    }

    .chika1 {
        display: flex;
    }
    .text {
        flex-direction: column;
        margin-top: 1px;
        color: white;
    }

    .text p {
        margin-top: .5rem;
        font-size: .8rem;
    }
    .chika1 h3 {
        margin-top: .2rem;
        font-size: 1vw;
        color: white;
    }
    .posting input{
        border-radius: 5rem;
        background-color: rgba(82, 82, 82, 0.419);
        width: 35vw;
        margin-top: 5px;
        height: 3vh;
        border: none;
        padding: .5rem 1rem;
        font-size: 1vw;
    }

    .posting img{
        height: 7vh;
        width: 3.5vw;
        border-radius: 100%;
        margin-right: .5rem;
    }

    .chika1  img{
        height: 7vh;
        width: 3.5vw;
        border-radius: 100%;
        margin-right: .5rem;
    }

    .posting img, input {
        margin-bottom: 1rem;
    }

    .posting {
        display: flex;
        z-index: 1;
        border-bottom: 1px solid rgb(74, 74, 74);
    }
</style>
  