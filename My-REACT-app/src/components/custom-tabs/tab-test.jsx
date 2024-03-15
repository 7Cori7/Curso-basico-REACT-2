import Tabs from "./tabs.jsx";
import RandomContent from "./random-content.jsx";

export default function TabsTest(){

    const tabs = [
        {
            label: 'Tab 1',
            content: <div>This is content for tab 1</div>
        },
        {
            label: 'Tab 2',
            content: <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas rerum, nisi reiciendis, dolorem itaque pariatur ullam libero recusandae consequatur voluptas, non praesentium tenetur omnis et consequuntur provident vel rem!</div>
        },
        {
            label: 'Tab 3',
            content: <RandomContent />
        }
    ];

    function handleChange(currTabIndex){
        console.log(currTabIndex)
    }

    return <Tabs tabsContent={tabs} onChange={handleChange} />;
}