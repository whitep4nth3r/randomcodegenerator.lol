import VideoEmbedStyles from "./VideoEmbed.module.css";

export default function VideoEmbed() {
  return (
    <>
      <h3 className={VideoEmbedStyles.videoEmbed__title}>Watch how this project started</h3>
      <div className={VideoEmbedStyles.videoEmbed}>
        <iframe
          className={VideoEmbedStyles.videoEmbed__iframe}
          src="https://www.youtube.com/embed/kjGjXo9eKXg"
          height="100%"
          width="100%"
          frameBorder="0"
          scrolling="no"
          title="I built a random JavaScript generator and it was hilarious | Panther's Twitch Stream Highlights"
          allowFullScreen={true}
        />
      </div>
    </>
  );
}
