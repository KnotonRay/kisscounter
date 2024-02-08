<script>
    import { Meteor } from 'meteor/meteor';
    import { Data } from '/imports/api/data';
    import Reel from './Reel';

    const handler = Meteor.subscribe('data');
    let isLoading = true;
    let data = null;
    let glyphs = '    '.split('');

    $m: {
        isLoading = !handler.ready();
        data = Data.find().fetch();
        if (data.length > 0) {
            glyphs = data[0].kisses.toString().padStart(4, ' ').split(''); 
        }
    }

</script>

<div class='counter'>
    {#each glyphs as glyph}
        <Reel glyph={glyph} />
    {/each}
</div>

<style>
.counter
{
    display: grid;

    width: 80%;
    height: 80%;
    margin: 0;
    padding: 0;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
}

    
</style>