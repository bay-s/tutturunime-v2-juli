import CharacterCard from "@/component/layout/post/character-card";
import OverView from "@/component/layout/post/overview";
import StaffCard from "@/component/layout/post/staff-card";

export const TabsComponentWatch = (aniList,anime,type) => {

 
const sections =  [
    {
      label: 'Overview',
      component: <OverView episode={anime} aniList={aniList} />,
    }  ,
      {
        label: 'Character',
        component: <CharacterCard anime={aniList} />,
      },
      {
        label: 'Staff',
        component: <StaffCard anime={aniList} />,
      },
  ];

  return sections.filter(section => section.condition !== false);


}