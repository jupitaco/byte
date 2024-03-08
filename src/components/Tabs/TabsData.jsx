import AllLock from '../DashboardComps/AllLock';
import MyLock from '../DashboardComps/MyLock';

export const TabsData = {
  TabTitle: [
    {
      id: 'tab1',

      title: 'All',
    },

    {
      id: 'tab2',

      title: 'My Lock',
    },
  ],

  TabContents: [
    { id: 'tab1', comp: <AllLock /> },
    { id: 'tab2', comp: <MyLock /> },
  ],
};
