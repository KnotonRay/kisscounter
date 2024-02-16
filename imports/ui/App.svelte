<script>
  import { Meteor } from 'meteor/meteor';
  import { Log } from 'meteor/logging';
  import Counter from './Counter';
  import Banner from './Banner';

  Log('App.svelte script');

  var startPos = null;

  function sniff() {
    var sniffcheck = new URLSearchParams(document.location.search).get('sniffcheck');
    sniffcheck = sniffcheck === null ? '' : sniffcheck;
    Log('sniffed "' + sniffcheck + '"');
    return sniffcheck;
  };

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

  function getPageDimensions() {
    const pageWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const pageHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    return [pageWidth, pageHeight];
  }

  function onMouseDown(evt) {
    onPointerActionStart(evt);
  }

  function onMouseUp(evt) {
    onPointerActionEnd(evt);
  }

  function onTouchStart(evt) {
    onPointerActionStart(evt.touches[0]);
  }
  
  function onTouchEnd(evt) {
    onPointerActionEnd(evt.changedTouches[0]);
  }

  function onPointerActionStart(posSource) {
    startPos = [posSource.pageX, posSource.pageY];
  }

  function onPointerActionEnd(posSource) {
    if (startPos !== null) {
      const [startX, startY] = startPos;
      startPos = null;
      const endX = posSource.pageX;
      const endY = posSource.pageY;

      const deltaX = endX - startX;
      const deltaY = endY - startY;

      // click/tap
      if (Math.abs(deltaX) < 5 && Math.abs(deltaY) < 5) {
        const [width, height] = getPageDimensions();
        const halfWidth = width / 2;
        const halfHeight = height / 2;

        // near screen center
        if (Math.abs(endX - halfWidth) < 10 && Math.abs(endY - halfHeight) < 100) {
          increment();
        }

      // vertical swipe
      } else if (Math.abs(deltaY) > 200) {

        // swipe down
        if (deltaX > 0) {
          decrement();

        // swipe up
        } else {
          increment();

        }
      }
    }
  }

  document.addEventListener('mousedown', onMouseDown);
  document.addEventListener('mouseup', onMouseUp);
  document.addEventListener('touchstart', onTouchStart);
  document.addEventListener('touchend', onTouchEnd);

</script>


<div class="container">
  <Counter/>
  <Banner/>
  <a class='attribution' href="https://www.vecteezy.com/free-vector/number-balloon">Number Balloon Vectors by Vecteezy</a>
</div>
<svelte:window on:keyup|preventDefault={onKeyUp} />

<style>

:global(html) {
  overflow: hidden;
  width: 100%;
  height: 100%;
}

:global(body) {
  display: grid;
  background: linear-gradient(to top, #0072ff 0%, #00c6ff 100%);
  height: 100%;
  width: auto;
  box-sizing: border-box;
  padding: 2%;
  margin: 0;
  overflow: hidden;
}

.container
{
  display: grid;
  align-self: center;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 100%;
  grid-template-rows: 80% min-content 5%;
}

.attribution
{
  font-size: 10px;
  color: blue;
}
</style>