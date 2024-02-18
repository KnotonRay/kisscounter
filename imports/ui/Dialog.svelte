<script>
    export let dialog;

    function closeDialog() {
        dialog.close();
    }
</script>

<dialog bind:this={dialog} on:close>
    <button on:click={closeDialog} on:touchend={closeDialog}>X</button>
    <slot/>
</dialog>

<style>
dialog {
    width: 80vmin;
    height: 80vmin;

}

button {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 5vmin;
    width: 5vmin;
    height: 5vmin;
}

button:focus-visible {
  outline: none;
}


</style>