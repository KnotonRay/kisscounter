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
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}

button.close {
    position: absolute;
    right: 20px;
    top: 60px;
    font-size: 30px;
    width: 40px;
    height: 40px;
}

button.close:focus-visible {
  outline: none;
}

button.close {
  cursor: pointer;
  border: none;
  border-radius: 7px;
}
</style>
