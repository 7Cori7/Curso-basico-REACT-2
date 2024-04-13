import LightDarkMode from "../light-dark-mode";
import TicTacToe from "../tic-tac-toe/tictactoe";
import NestedMenu from "../nested-menu";
import menus from "../nested-menu/data";
import ImageSlider from "../image-slider";
import GithubProfileFinder from "../github-profile-finder";
import { useContext } from "react";
import { FeatureFlagsContext } from "./context";

export default function FeatureFlags(){

    const {loading, enableFlags} = useContext(FeatureFlagsContext);

    const componentsToRender = [
        {
            key: 'showLightDarkMode',
            component: <LightDarkMode />
        },
        {
            key: 'showTicTacToe',
            component: <TicTacToe />
        },
        {
            key: 'showNestedMenu',
            component: <NestedMenu menus={menus} />
        },
        {
            key: 'showImageSlider',
            component: <ImageSlider url={'https://picsum.photos/v2/list'} page={'3'} limit={'10'}/>
        },
        {
            key: 'showGithubProfile',
            component: <GithubProfileFinder />
        }
    ];

    function checkEnabledFlags(key){

        return enableFlags[key];
    }

    if(loading){
        return <div><p>Loading data...</p></div>
    }

    return <div>
        <h1>Feature Flags</h1>
        {
            componentsToRender.map(item => checkEnabledFlags(item.key) ? item.component : null)
        }
    </div>
}