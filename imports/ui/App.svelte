<script>
  import { Meteor } from 'meteor/meteor';
  import { Log } from 'meteor/logging';
  import Counter from './Counter';
  import Banner from './Banner';

  Log('App.svelte script');

  function sniff()
  {
    var sniffcheck = new URLSearchParams(document.location.search).get('sniffcheck');
    sniffcheck = sniffcheck === null ? '' : sniffcheck;
    Log('sniffed "' + sniffcheck + '"');
    return sniffcheck;
  }



  const increment = () => {
    Log('increment');
    Meteor.call('increment', sniff());
  }

  const decrement = () => {
    Log('decrement');
    Meteor.call('decrement', sniff());
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
  <a class='attribution' href="https://www.vecteezy.com/free-vector/number-balloon">Number Balloon Vectors by Vecteezy</a>
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

.attribution
{
  font-size: 10px;
  color: blue;
  position: absolute;
  left: 0px;
  bottom: 0px;
}
</style>