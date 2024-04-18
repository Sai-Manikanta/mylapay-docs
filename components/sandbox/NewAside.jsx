import Link from 'next/link';
import Image from 'next/image';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { IoMdHome } from "react-icons/io";
import { SiMicrosoftaccess } from "react-icons/si";
import { GrSecure } from "react-icons/gr";
import { SiCoronaengine } from "react-icons/si";

// import SidebarNew from './SidebarNew'
import mylapaylogo from '../../public/mylapaylogo.png';

const NewAside = () => {

    // const menuItemStyles = {
    //     button: ({ level, active, disabled }) => {
    //         // only apply styles on first level elements of the tree
    //         if (level === 0)
    //             return {
    //                 color: active ? '#002060' : '#fff',

    //                 //   backgroundColor: active ? '#eecef9' : undefined,
    //             };
    //     },
    // };

    // const submenuStyles = {
    //     backgroundColor: '#3366ff', // Background color of submenu
    //     color: 'red', // Text color of submenu
    // };

    return (
        <div className={`sm:block h-screen fixed sm:sticky top-0 bg-primary text-white`}>
            <div className="flex items-center sm:justify-center p-4 gap-x-5 shadow bg-white">
                {/* <div className='block sm:hidden'>
                    {showSidebar ? (
                        <button onClick={() => setShowSidebar(false)}>Close</button>
                    ) : (
                        <button onClick={() => setShowSidebar(true)}>Open</button>
                    )}
                </div> */}

                <Link href="/" className="-m-1.5 p-1.5">
                    <Image className="h-8 w-auto" src={mylapaylogo} alt="" />
                </Link>
            </div>
            <Sidebar
                image="https://www.bestelectro.in/_next/image?url=%2Fimages%2FbestElectroLogo.png&w=640&q=75"
                toggled={true}
                backgroundColor="#47BDFF"
                width="220px"
            >
                <Menu
                    // menuItemStyles={menuItemStyles}
                    // submenuStyles={submenuStyles}

                    // rootStyles={{
                    //     // ['.ps-submenu-content .ps-menuitem-root']: {
                    //     //     backgroundColor: 'rgba(71, 189, 255, 0.8)',
                    //     //     '&:hover': {
                    //     //         backgroundColor: '#3366ff',
                    //     //     },
                    //     // },
                    // }}

                    menuItemStyles={{
                        button: ({ level, active }) => {
                            if (level === 0 || level === 1) {
                                return {
                                    backgroundColor: active ? '#001F60' : undefined,
                                    color: active ? 'white' : undefined,
                                    "&:hover": {
                                        backgroundColor: '#001F60',
                                        color: 'white',
                                    }
                                }
                            }
                        },
                    }}

                    subMenuItemStyles={{
                        button: ({ level, active }) => {
                            if (level === 0 || level === 1) {
                                return {
                                    backgroundColor: active ? '#001F60' : undefined,
                                    color: active ? 'white' : undefined,
                                    "&:hover": {
                                        backgroundColor: '#001F60',
                                        color: 'white',
                                    }
                                }
                            }
                        },
                    }}
                >
                    <MenuItem active={false} icon={<IoMdHome size="1.2rem" />}> Home </MenuItem>
                    <MenuItem icon={<GrSecure size="1.2rem" />}> Authentication </MenuItem>
                    <MenuItem icon={<SiMicrosoftaccess size="1.2rem" />}> Athorization </MenuItem>
                    {/* <SubMenu 
                        active={true} 
                        icon={<SiCoronaengine size="1.2rem" />} 
                        label="Intellengine"
                        defaultOpen={true}
                        style={{ backgroundColor: '#47BDFF', color: 'white' }}
                    >
                        <MenuItem style={{ backgroundColor: 'rgba(71, 189, 255, 0.8)', color: 'white', fontSize: '0.9rem' }}> Capture </MenuItem>
                        <MenuItem style={{ backgroundColor: 'rgba(71, 189, 255, 0.8)', color: 'white', fontSize: '0.9rem' }}> Refund </MenuItem>
                        <MenuItem style={{ backgroundColor: 'rgba(71, 189, 255, 0.8)', color: 'white', fontSize: '0.9rem' }}> Reversal </MenuItem>
                        <MenuItem style={{ backgroundColor: 'rgba(71, 189, 255, 0.8)', color: 'white', fontSize: '0.9rem' }}> Void </MenuItem>
                    </SubMenu> */}

                    <SubMenu
                        active={true}
                        icon={<SiCoronaengine size="1.2rem" />}
                        label="Intellengine"
                        defaultOpen={true}
                    >
                        <MenuItem style={{ backgroundColor: 'rgba(71, 189, 255, 0.8)', color: 'white', fontSize: '0.9rem' }}> Capture </MenuItem>
                        <MenuItem> Refund </MenuItem>
                        <MenuItem> Reversal </MenuItem>
                        <MenuItem> Void </MenuItem>
                    </SubMenu>
                </Menu>
            </Sidebar>
        </div>
    )
}

export default NewAside