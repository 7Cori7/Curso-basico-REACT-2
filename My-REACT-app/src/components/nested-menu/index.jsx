import './nested-menu.css';
import MenuList from './menu-list';

export default function NestedMenu({menus = []}){

    return(

        <div className='tree-view-container'>

            <MenuList list={menus} />

        </div>

    );
};