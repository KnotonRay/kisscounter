<script>
  import { Meteor } from 'meteor/meteor';
  import { Log } from 'meteor/logging';
  import Counter from './Counter';
  import Banner from './Banner';

  Log('App.svelte script');


  const increment = () => {
    Log('increment');
    Meteor.call('increment', document.location.pathname);
  }

  const decrement = () => {
    Log('decrement');
    Meteor.call('decrement', document.location.pathname);
  }
  
  const onKeyUp = (e) => {
    switch(e.key) {
      case 'ArrowUp':
        increment();
				break;
      case 'ArrowDown':
        decrement();
				break;
		 }
} 
</script>


<div class="container">
  <Counter/>
  <Banner/>
</div>
<svelte:window on:keyup|preventDefault={onKeyUp} />

<style>
:global(body) {
  display: grid;
  background-color: lightblue;
  height: 100vh;
  width: auto;
  box-sizing: border-box;
  padding: 2%;
  margin: 0;
  
}
.container
{
  display: grid;
  align-self: center;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 100%;
}
</style>