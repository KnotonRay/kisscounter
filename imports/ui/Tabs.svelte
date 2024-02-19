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
    grid-template-rows: 5% 1fr;
}

.buttons {
    width: 100%;
    display: grid;
    justify-content: left;
    grid-template-columns: repeat(auto-fill, 20%);
    grid-gap: 5px;
}

.tabContent {
    padding: 2%;
    height: 96%;
}


.tab {
    background-color: #f4f4f5;
    padding: 1rem;
}

.tab.active {
    background-color: #e4e4e7;
}
</style>