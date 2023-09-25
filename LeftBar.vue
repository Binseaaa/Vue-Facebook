<template>
        <div id="navbar">
        <div class="logos">
            <img src="../assets/s1.jpg" alt="">
            <h4>Vincy Deguma</h4>
        </div>
        
        <div id="main">
            <li><font-awesome-icon icon="fa-solid fa-user-group" /><a href="#">Friends</a></li>
            <li><font-awesome-icon icon="fa-solid fa-store" /><a href="#">Marketplace</a></li>
            <li><font-awesome-icon icon="fa-solid fa-people-group" /><a href="#">Groups</a></li> 
            <li><font-awesome-icon icon="fa-solid fa-clock-rotate-left" /><a href="#">Memories</a></li> 
        </div>

        <div class="gif">
            <h3>Sponsored</h3>
            <img src="../assets/ads.gif" alt="ADS">
        </div>
    </div>
    
</template>

<style scoped>


    .gif {
        color: rgb(152, 152, 152);
        border-top: .1vw solid grey;
    }

    .gif h3 {
        margin: 1vw .5vw;
        font-size: 1.5vw;
    }
    .gif img{
        height: 40vh;
        width: 20vw;
        border-radius: 2vw;
    }

    h4 {
        margin-top: 2.5vh;
        font-size: 1vw;
    }
    .logos {
        display: flex;
        color: white;
        padding: .5vw;
        cursor: pointer;
    }

    .logos:hover {
        background-color: rgba(136, 136, 136, 0.423);
        transition: 0.3s ease-in-out;
        border-radius: 10px;
    }

    .logos img {
        width: 15%;
        height: 15%;
        border-radius: 100%;
        margin-right: .5vw;
        margin-left: -.3vw;
    }

    #navbar {
        padding: 1vw;
        height: 100vh;
        width: 25vw;
        background-color: rgb(20, 20, 20);
        justify-content: left;
        /* /* margin-top: 7vh; */
        position: fixed; 
        margin-top: 8.5vh;
    }

    #main a, li {
        text-decoration: none;
        font-size: 1vw;
        color: white;
        padding: .7vw;
        display: flex;
        width: 24vw;
    }

    .fa-user-group{
        /* color: #1f513a; */
        color: #3c956c;
        font-size: 2vw;
    }

    #main li:hover {
        background-color: rgba(136, 136, 136, 0.423);
        transition: 0.3s ease-in-out;
        border-radius: 10px;
    }

    .fa-store{
        color: #3c956c;
        font-size: 2vw;
    }

    .fa-people-group{
        color: #3c956c;
        font-size: 2vw;
    }

    .fa-clock-rotate-left{
        color: #3c956c;
        font-size: 2vw;
    }
</style>