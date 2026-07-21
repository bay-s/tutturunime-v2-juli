import Image from "next/image"

const PostImage = ({anime}) => {

return(
    <Image
            alt={`Nonton Anime ${anime?.title} Sub indo`}
            src={anime.thumb || anime.thumbnail}
            loading="lazy"
            width={100}
            height={100}
            placeholder="blur"
            blurDataURL={`${anime.thumb || anime.thumbnail}&w=16&q=1`}
            className="h-full w-full group-hover:brightness-50 rounded-md object-cover transition-all transition-all duration-300 w-full group-hover:scale-[1.2] rounded-lg"
          />
 
)
}

export default PostImage