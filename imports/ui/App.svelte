<script>
  import { Meteor } from 'meteor/meteor';
  import { Log } from 'meteor/logging';
  import Counter from './Counter';
  import Banner from './Banner';
  import Dialog from './Dialog';
  import Chat from './Chat';
  import Tabs from './Tabs';
  import FAQ from './FAQ';
  import AboutMe from './AboutMe';
  import History from './History';

  Log('App.svelte script');

  var startPos = null;
  var lastTriggered = new Date().getTime();

  function sniff() {
    var sniffcheck = new URLSearchParams(document.location.search).get('sniffcheck');
    sniffcheck = (typeof sniffcheck === 'undefined' || sniffcheck === null ) ? '' : sniffcheck;
    Log('sniffed "' + sniffcheck + '"');
    return sniffcheck;
  };

  function allowTrigger() {
      const now = new Date().getTime();
      const timeSinceTriggered = now - lastTriggered;
      return timeSinceTriggered > 250;
  }

  function increment(n) {
    if (allowTrigger()) {
      Log('increment ' + n);
      lastTriggered = new Date().getTime();
      Meteor.call('increment', sniff(), n);
    }
  }
  
  window.setKisses = function setKisses(n) {
    Meteor.call('set', sniff(), n)
  }

  const onKeyUp = (e) => {
    switch(e.key) {
      case 'ArrowUp':
        increment(1);
				break;
      case 'ArrowDown':
        increment(-1);
				break;
		 }
  }

  function getPageDimensions() {
    const pageWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const pageHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    return [pageWidth, pageHeight];
  }

  function onMouseDown(evt) { onPointerActionStart(evt); }
  function onMouseUp(evt) { onPointerActionEnd(evt); }
  function onTouchStart(evt) { onPointerActionStart(evt.touches[0]); }
  function onTouchEnd(evt) { onPointerActionEnd(evt.changedTouches[0]); }
  function onPointerActionStart(posSource) { startPos = [posSource.pageX, posSource.pageY]; }

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
          increment(1);
        }

      // vertical swipe
      } else if (Math.abs(deltaY) > 200) {

        // swipe down
        if (deltaY > 0) {
          increment(1);

        // swipe up
        } else {
          increment(-1);

        }
      }
    }
  }

  let dialog;
  function showDialog() {
    dialog.showModal();
  }

</script>



<div class="container">
  <button on:click={showDialog} on:touchend={showDialog}>?</button>
  <Dialog bind:dialog>
    <Tabs
        tabs_={[
          { name: 'FAQ', content: FAQ },
          { name: 'About' + String.fromCharCode(160) + 'Me', content: AboutMe },
          { name: 'History', content: History},
        ]}
    />
  </Dialog>
  <Counter/>
  <Banner/>
</div>
<svelte:window on:keyup|preventDefault={onKeyUp} 
               on:mousedown|preventDefault={onMouseDown} 
               on:mouseup|preventDefault={onMouseUp} 
               on:touchstart={onTouchStart} 
               on:touchend={onTouchEnd} />

<style>

:global(html) {
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}

:global(body) {
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  height: 100%;

  background: linear-gradient(to top, #0072ff 0%, #00c6ff 100%);
}

button {
    position: absolute;
    top: 1vmin;
    right: 1vmin;
    font-size: 30px;
    z-index: 2;
    width: 40px;
    height: 40px;
    border: none;
    background-color:  #0072ff;
    color: #00c6ff;
    border-radius: 5px;
    cursor: pointer;
}

button {
  cursor: pointer;
}

button:focus-visible {
  outline: none;
}

.container
{
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  height: 100%;

  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-areas: "counter" "banner";
  grid-template-rows: 1fr 30vmin;
}

.attribution
{
  grid-area: footer;
  font-size: 10px;
  color: blue;
}
</style>