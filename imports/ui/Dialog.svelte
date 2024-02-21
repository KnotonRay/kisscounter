<script>
    export let dialog;

    function closeDialog() {
        dialog.close();
    }
</script>

<dialog bind:this={dialog} on:close>
    <button class='close' on:click={closeDialog} on:touchend={closeDialog}>X</button>
    <slot/>
</dialog>

<style>

dialog {
    width: 95vmax;
    height: 90%;
    overflow-x: hidden;

    /* background: #d4dbff; */
    background: transparent;
    border: none;

    border-top-left-radius: 5px;
    border-bottom-radius: 5px;
}

button.close {
    position: absolute;
    right: 1vmin;
    font-size: 5vmin;
    width: 5vmin;
    height: 5vmin;
}

button.close:focus-visible {
  outline: none;
}
</style>
