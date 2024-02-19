
<script>
  import { Meteor } from 'meteor/meteor';
  let cssUrl = Meteor.absoluteUrl('chat.css');
</script>

<p>
    This chat goes through a third-party server.
    Don't be a jerk or I'll have to remove the chat.
</p>
<iframe src="//embed.tlk.io/dipkisschat-capcon?custom_css_path={cssUrl}&amp;theme=theme--day" width="100%" height="100%" frameborder="0" style="margin-bottom: -8px;"></iframe>

<style>
iframe {
  height: 88%;
}
</style>