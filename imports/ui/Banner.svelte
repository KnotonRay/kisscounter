


<h1><span>Diapers kissed<span></h1>
<!-- <div class='banner'> -->
    <!-- <img src='/ribbon.svg'/> -->
<!-- </div> -->
<style>
    .banner {
        /* display: grid; */
        /* grid-template:  */
            /* "a"; */
    }

    @font-face {
        font-family: "KissCountBanner";
        src: url("/5yearsoldfont.medium.ttf");
    }

    h1 {
        display: grid;
        grid-area: banner;
        position: relative;
        text-align: center;
        user-select: none;
        margin: 0;

        aspect-ratio: 3 / 1;
        height: 100%;
        background-image: url("/ribbon.svg");
        background-size: contain;
        background-repeat: round;
    }
    
    span {
        color: #e6ff9b;
        font-family: "KissCountBanner", "Comic Sans MS", "Comic Sans", cursive;
        text-shadow: 0.5vmin 0.5vmin 1px #515d1f7d;
        font-size: 11vmin;
        align-self: center;
        text-wrap: nowrap;

    }

    img {
        grid-area: a;
        max-width: 80vw;
        margin-top: -100%;
    }
</style>
