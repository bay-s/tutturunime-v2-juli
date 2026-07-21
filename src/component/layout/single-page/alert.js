
const Alert = () => {

    return(
<ul class="p-4 mb-4 mt-6 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 flex flex-col gap-3" role="alert">
<li>
  <h3 class="font-bold text-lg">
    <span className="italic font-bold  px-2"><i class="fa fa-exclamation" aria-hidden="true"></i></span>
    Note</h3> 
  </li>
  <li>
  <span class="font-medium sm:text-sm text-xs">- Jika menemukan Link rusak silahkan lapor di kolom komentar.</span> 
  </li>
  <li>
  <span class="font-medium sm:text-sm text-xs">- Jika Video belum muncul silahkan refresh halaman.</span> 
  </li>
  <li>
  <span class="font-medium sm:text-sm text-xs">- Website masih dalam tahap pengembangan, mohon laporkan jika menemukan halaman yang error.</span> 
  </li>
</ul>
    )
}

export default Alert