import Menu from '../menu/Menu';



const Menus = ({ menuItems }) => {
    return (
        <div className="container">
            <Menu menuItems={menuItems} />
        </div>
    );
};

export default Menus;