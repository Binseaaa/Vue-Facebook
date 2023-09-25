<template>
<div class="header">
    <div class="main">
            <ul class="container">
                <div class="search">
                    <li><font-awesome-icon icon="fa-brands fa-facebook"/></li>
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                    <li><input type="text" placeholder="Search Facebook" class="insearch"></li>
                </div>
                <div class="center">
                    <li><span class="home">Home</span><font-awesome-icon icon="fa-solid fa-house" /></li>
                    <li><span class="vid">Video</span><font-awesome-icon icon="fa-solid fa-tv" /></li>
                    <li><span class="market">Marketplace</span><font-awesome-icon icon="fa-solid fa-store" /></li>
                    <li><span class="groups">Groups</span><font-awesome-icon icon="fa-solid fa-people-group" /></li>
                    <li><span class="game">Gaming</span><font-awesome-icon icon="fa-solid fa-gamepad" /></li>
                </div>
                <div class="right">
                    <li><span class="menu">Menu</span><font-awesome-icon icon="fa-solid fa-bars" /></li>
                    <li><span class="msg">Messenger</span><font-awesome-icon icon="fa-brands fa-facebook-messenger" /></li>
                    <li><span class="notif">Notifications</span><font-awesome-icon icon="fa-solid fa-bell" /></li>
                    <li><span class="prof">Profile</span><img src="../assets/s1.jpg" alt="Gwapa"></li>
                </div>
            </ul>
    </div>
</div>
</template>

<style scoped>

    .header {
        height: 8vh; 
        width: 100%; 
        background-color: rgb(43, 41, 41);  
        border-bottom: 1px rgb(75, 75, 75) solid;
        position: fixed;
        z-index: 2;
    }

    
    .fa-facebook {
        font-size: 3.5vw;
        margin-right: 1rem;
        color: rgb(45, 104, 255);
        background-color: white;
        border-radius: 100%;
        margin-left: 1vw;
    }

    .container {
        justify-content: space-between;
        display: flex;
    }

    .center li {
        font-size: 4vh;
        color: rgb(201, 201, 201);
        margin-right: 2vw;
        float: left;
        list-style-type: none;
        transition: color 0.3s;
        padding: .3rem 1.5rem;
        cursor: pointer;
        margin-top: .6rem;
    }
    .center li:hover {
        background-color: rgba(82, 70, 70, 0.612);
        border-radius: 10%;
        transform: scale(1.2);
    }

    .home {
        visibility: hidden;
        background-color:rgba(255, 255, 255, 0.518);
        color: rgb(0, 0, 0);
        text-align: center;
        border-radius: .5rem;
        padding: 4px 8px;
        position: absolute;
        z-index: 1;
        left: 50%;
        transform: translateY(150%) translateX(-50%);
        opacity: 0;
        transition: opacity 0.3s ease;
        font-size: 1vw;
    }

    .center li:hover .home {
        visibility: visible;
        opacity: 1;
        transition: 0.5s ease-in-out;
    }

    .vid {
        visibility: hidden;
        background-color:rgba(255, 255, 255, 0.518);
        color: rgb(0, 0, 0);
        text-align: center;
        border-radius: .5rem;
        padding: 4px 8px;
        position: absolute;
        z-index: 1;
        left: 50%;
        transform: translateY(150%) translateX(-50%);
        opacity: 0;
        transition: opacity 0.3s ease;
        font-size: 1vw;
    }

    .center li:hover .vid {
        visibility: visible;
        opacity: 1;
        transition: 0.5s ease-in-out;
    }

    .market {
        visibility: hidden;
        background-color:rgba(255, 255, 255, 0.518);
        color: rgb(0, 0, 0);
        text-align: center;
        border-radius: .5rem;
        padding: 4px 8px;
        position: absolute;
        z-index: 1;
        left: 50%;
        transform: translateY(150%) translateX(-50%);
        opacity: 0;
        transition: opacity 0.3s ease;
        font-size: 1vw;
    }

    .center li:hover .market {
        visibility: visible;
        opacity: 1;
        transition: 0.5s ease-in-out;
    }

    .groups {
        visibility: hidden;
        background-color:rgba(255, 255, 255, 0.518);
        color: rgb(0, 0, 0);
        text-align: center;
        border-radius: .5rem;
        padding: 4px 8px;
        position: absolute;
        z-index: 1;
        left: 50%;
        transform: translateY(150%) translateX(-50%);
        opacity: 0;
        transition: opacity 0.3s ease;
        font-size: 1vw;
    }

    .center li:hover .groups {
        visibility: visible;
        opacity: 1;
        transition: 0.5s ease-in-out;
    }

    .game {
        visibility: hidden;
        background-color:rgba(255, 255, 255, 0.518);
        color: rgb(0, 0, 0);
        text-align: center;
        border-radius: .5rem;
        padding: 4px 8px;
        position: absolute;
        z-index: 1;
        left: 50%;
        transform: translateY(150%) translateX(-50%);
        opacity: 0;
        transition: 0.3s ease;
        font-size: 1vw;
    }

    .center li:hover .game {
        visibility: visible;
        opacity: 1;
        transition: 0.5s ease-in-out;
    }

    .menu {
        visibility: hidden;
        background-color:rgba(255, 255, 255, 0.518);
        color: black;
        text-align: center;
        border-radius: .5rem;
        padding: 4px 8px;
        position: absolute;
        z-index: 1;
        left: 87%;
        transform: translateY(200%) translateX(-50%);
        opacity: 0;
        transition: 0.3s ease;
        font-size: 1vw;
    }

    .right {
        margin-top: 5px;
    }
    .right li:hover .menu {
        visibility: visible;
        opacity: 1;
        transition: 0.5s ease-in-out;
    }

    .msg {
        visibility: hidden;
        background-color:rgba(255, 255, 255, 0.518);
        color: black;
        text-align: center;
        border-radius: .5rem;
        padding: 4px 8px;
        position: absolute;
        z-index: 1;
        left: 90.5%;
        transform: translateY(200%) translateX(-50%);
        opacity: 0;
        transition: 0.3s ease;
        font-size: 1vw;
    }

    .right li:hover .msg {
        visibility: visible;
        opacity: 1;
        transition: 0.5s ease-in-out;
    }

    .notif {
        visibility: hidden;
        background-color:rgba(255, 255, 255, 0.518);
        color: black;
        text-align: center;
        border-radius: .5rem;
        padding: 4px 8px;
        position: absolute;
        z-index: 1;
        left: 94%;
        transform: translateY(200%) translateX(-50%);
        opacity: 0;
        transition: 0.3s ease;
        font-size: 1vw;
    }

    .right li:hover .notif {
        visibility: visible;
        opacity: 1;
        transition: 0.5s ease-in-out;
    }

    .prof {
        visibility: hidden;
        background-color:rgba(255, 255, 255, 0.518);
        color: black;
        text-align: center;
        border-radius: .5rem;
        padding: 4px 8px;
        position: absolute;
        z-index: 1;
        left: 98%;
        transform: translateY(200%) translateX(-50%);
        opacity: 0;
        transition: 0.3s ease;
        font-size: 1vw;
    }

    .right li:hover .prof {
        visibility: visible;
        opacity: 1;
        transition: 0.5s ease-in-out;
    }

    .right li {
        font-size: 1.5em;
        color: white;
        margin-right: .5vw;
        float: left;
        list-style-type: none;
        cursor: pointer;
        width: 2.5vw;
        height: 5vh;
        background: rgba(128, 128, 128, 0.336);
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
    }

    .right li:hover {
        background-color: rgba(128, 128, 128, 0.56);
    }

    .right img {
        height: 50px;
        width: 50px;
        border-radius: 100%;
    }

    .fa-magnifying-glass {
        color: grey;
        position: relative;
        right: 69%;
        bottom: -21px;
        font-size: 1.1em;
    }

    .search li {
        list-style-type: none;
        float: left;
        margin-top: 6px;
    }

    .insearch::placeholder {
        padding-left: 25px;
        width: 100%;
        display: flex;
        align-items: center;
        font-size: 1.2em;
        font-weight: lighter;
    }
    
    .insearch{
        border-radius: 5vw;
        width: 15vw;
        padding: 2vh;
        font-size: 1vw;
        background-color: rgba(128, 128, 128, 0.279);
        border: none;
        display: flex;
    }

</style>