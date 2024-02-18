<script>
    export let glyph;



</script>

<div class='reel'>
    {#if glyph !== ' '}
        <img src='/{glyph}.png'/>
    {:else}
        <img src='/space.png'/>
    {/if}
</div>

<style>
@keyframes floatingY {
    0% { transform: translate(0,  0px);  } 
    /* 50%  { transform: translate(0, 8px); }  */
    100%   { transform: translate(0, 8px); }
}








@keyframes floatingX{
    0%  { transform: translate(8px, 0) rotate(3deg); } 
    100% { transform: translate(0px, 0)  rotate(-3deg); } 
}

.reel
{
    display: grid;
    animation-name: floatingY;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-direction: alternate;
}

.reel:nth-child(1) { animation-delay: 0ms; }
.reel:nth-child(2) { animation-delay: 300ms; }
.reel:nth-child(2) { animation-delay: 120ms; }
.reel:nth-child(2) { animation-delay: 700ms; }

img
{
   width: 100%;
   height: auto;
   object-fit: cover;
   align-self: center;

   animation-name: floatingX;
   animation-duration: 8s;
   animation-iteration-count: infinite;
   animation-timing-function: ease-in-out;
   animation-direction: alternate;
}

</style>