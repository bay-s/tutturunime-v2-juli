
import OngoingPagination from "./post/ongoing-pagination"
import Pagination from "./post/pagination"

const GridCardContainer = ({value, children }) => {
// console.log(value?.data?.pagination);
// console.log(value);
    return(
 <article className="col-span-4 lg:col-span-3 flex flex-col gap-4 ">
  <ul className="flex justify-between items-start sm:gap-0 gap-6 sm:items-center sm:flex-row flex-col">
  <h3 className='rounded border-s-4 border-purple-500 p-2 font-bold text-2xl dark:text-gray-200 uppercase'>{value.title}</h3>
  <p className={value?.type === 'search' ? "font-medium dark:text-gray-100" : "hidden"}>Maximum hasil pencarian hanya 12 hasil</p>
  </ul>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3">
         {children}
        </div>
 <div className={value?.hide ? "hidden invisible h-0" : "col-span-4 my-5 sm:mx-auto items-center flex sm:justify-center"}>
{value?.title === "Anime Ongoing" ? <OngoingPagination pagination={value?.data?.pagination} value={value}  /> :  <Pagination pagination={value?.data?.pagination} value={value}  />}

</div>
 </article>
    )
}

export default GridCardContainer

// import Pagination from "./post/pagination"

// const GridCardContainer = ({value, children }) => {

//     return(
//  <article className="col-span-4 lg:col-span-3 flex flex-col gap-4 ">
//   <ul className="flex justify-between items-start sm:gap-0 gap-6 sm:items-center sm:flex-row flex-col">
//   <h3 className='rounded border-s-4 border-purple-500 p-2 font-bold text-2xl dark:text-gray-200 uppercase'>{value.title}</h3>
//   <p className={value?.type === 'search' ? "font-medium dark:text-gray-100" : "hidden"}>Maximum hasil pencarian hanya 12 hasil</p>
//   </ul>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3">
//          {children}
//         </div>
//  <div className={value?.hide ? "hidden invisible h-0" : "col-span-4 my-5 sm:mx-auto items-center flex sm:justify-center"}>
//  <Pagination pagination={value?.data?.pagination} value={value}  />
// </div>
//  </article>
//     )
// }

// export default GridCardContainer