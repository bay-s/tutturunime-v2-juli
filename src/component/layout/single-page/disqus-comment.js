const { DiscussionEmbed } = require("disqus-react");

const DisqussComment = ({anime,slug}) => {
 
    const disqusConfig = {
        shortname: 'TEBO', // Replace with your Disqus shortname
        config: {
          url: `https://www.tutturunime.my.id/${slug}`,
          identifier:`/${slug}`,
          title:anime.title,
        },
      };
    
      return <DiscussionEmbed {...disqusConfig} />;
    
}

export default DisqussComment