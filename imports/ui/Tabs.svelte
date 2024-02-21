<script>
	export let tabs_;

	$: tabs = tabs_;
	$: activeTab = 0;
</script>

<div class='wrap'>

    <div class='buttons'>
    {#each tabs as tab, idx}
        <button class="tab" class:active={idx === activeTab} on:touchend={() => (activeTab = idx)} on:click={() => (activeTab = idx)}>
            {tab.name}
        </button>
    {/each}
    </div>

    <div class='tabContent'>
    {#each tabs as tab, idx}
        {#if idx === activeTab}
            <svelte:component this={tab.content} />
        {/if}
    {/each}
    </div>
</div>

<style>

.wrap {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: min-content 1fr;
}

.buttons {
    width: 100%;
    display: grid;
    justify-content: left;
    grid-template-columns: repeat(auto-fit, minmax(min-content, 8%));
    grid-gap: 5px;
}

.buttons button {
    height: 40px;
    width: 100px;
    border: none;
}

.tabContent {
    padding: 2%;
    height: 96%;
    background: #d4dbff;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
}


.tab {
    background-color: #bebeff;
    border-top-left-radius: 1vmin;
    border-top-right-radius: 1vmin;
    position: relative;
    top: 1px;
}

.tab.active {
    background: #d4dbff;
    /* background-color: #aeb1f9; */
    border-bottom: none;
}
</style>