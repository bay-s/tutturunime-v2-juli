import CharacterCard from "@/component/layout/post/character-card";
import DownloadBatch from "@/component/layout/post/download-batch-card";
import DownloadCard from "@/component/layout/post/download-card";
import OverView from "@/component/layout/post/overview";
import StaffCard from "@/component/layout/post/staff-card";

export const TabsComponent = (anilist,anime,type) => {

 
const sections =  [
    {
      label: 'Download',
      component:type === 'episode' ?  <DownloadCard anime={anime} /> : <DownloadBatch batch={anime} />,
    },
    {
      label: 'Overview',
      component: <OverView episode={anime} anilist={anilist} />,
      condition: type === 'episode', // Add a condition here
    }  ,
      {
        label: 'Character',
        component: <CharacterCard anime={anilist} />,
      },
      {
        label: 'Staff',
        component: <StaffCard anime={anilist} />,
      },
  ];

  return sections.filter(section => section.condition !== false);


}