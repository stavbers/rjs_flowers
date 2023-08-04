import React, {useState} from 'react'

import { Menu, SubMenu, Item } from "burger-menu";
import 'burger-menu/lib/index.css';
import './style.css'

function MobMenu(props){
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <div onClick={() => setIsOpen(!isOpen)}>
    <span role="img" className="icon icon-default burger" style={{fontSize: '50px'}}><svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"><g opacity="0.99"><path d="M802.133333 281.6H221.866667c-17.066667 0-29.866667-12.8-29.866667-29.866667 0-17.066667 12.8-29.866667 29.866667-29.866666h580.266666c17.066667 0 29.866667 12.8 29.866667 29.866666 0 17.066667-12.8 29.866667-29.866667 29.866667zM802.133333 524.8H221.866667c-17.066667 0-29.866667-12.8-29.866667-29.866667 0-17.066667 12.8-29.866667 29.866667-29.866666h580.266666c17.066667 0 29.866667 12.8 29.866667 29.866666 0 17.066667-12.8 29.866667-29.866667 29.866667zM802.133333 768H221.866667c-17.066667 0-29.866667-12.8-29.866667-29.866667 0-17.066667 12.8-29.866667 29.866667-29.866666h580.266666c17.066667 0 29.866667 12.8 29.866667 29.866666 0 17.066667-12.8 29.866667-29.866667 29.866667z" p-id="851"></path></g></svg></span>
    </div>
    <Menu className="burger-menu" isOpen={isOpen} width={300} animate={'fallDown'} side={'left'} selectedKey={'entry'} onClose={() => setIsOpen(false)}>
      <Item itemKey={'manage'} text={'User Management'}></Item>
      <Item itemKey={'user'} text={'User Center'}></Item>
      <Item itemKey={'user'} text={'User Center'}></Item>
      <Item itemKey={'user'} text={'User Center'}></Item>
      <Item itemKey={'user'} text={'User Center'}></Item>
    </Menu>
  </>
  )
}

export {MobMenu}
