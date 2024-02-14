<script>
    export let glyph;
</script>

<div class='wrap'>
    {#if glyph !== ' '}
        <img src='/{glyph}.png'/>
    {:else}
        <img src='/space.png'/>
    {/if}
</div>

<style>
.wrap
{
    display: inline-block;
}

img
{
    width: 100%;
   height: auto;
   object-fit: cover;
}

</style>