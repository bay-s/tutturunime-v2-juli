import AnimeSearchResult from "./anime-search-result-card"

const SearchResultCard = ({result,title}) => {

    return(
  <div class="flex flex-col">
        <p class="font-medium dark:text-gray-400 mb-4">Search Result for: <span className="italic dark:text-white font-medium">{title}</span></p>
 <ul class="space-y-4 mb-4">
{
result?.length < 1 ? <h3 className="text-md m-auto font-semibold text-gray-900 dark:text-white">
Hasil pencarian tidak di temukan.</h3> 
: result.map(item => {
  return <AnimeSearchResult anime={item} key={item.title} result={result}  />
  })
 }
        </ul>
</div>
    )
}

export default SearchResultCard