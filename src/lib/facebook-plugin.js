 
 
const FacebookPlugin = () => {
 
  return (

<article className="dark:bg-dark-gray bg-gray-100 shadow-lg dark:shadow rounded-md flex flex-col gap-3 mb-2">
<div className="p-2">
<h3 className='rounded border-s-4 border-purple-500 p-2 font-bold text-xl dark:text-gray-200 uppercase'>Follow Kami</h3>
</div>
<ul className="flex items-center gap-2 my-3 p-2">
<li><a href="https://web.facebook.com/tutturunime/"  target="_blank"  className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xl px-6 py-3 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
     <i className="fa fa-facebook" aria-hidden="true"></i>    
 </a></li>  
 <li><a href="https://www.instagram.com/tutturunime/"  target="_blank"  className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xl px-6 py-3 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
     <i className="fa fa-instagram" aria-hidden="true"></i>    
 </a></li>
</ul>
</article>
  );
};
 
export default FacebookPlugin;
