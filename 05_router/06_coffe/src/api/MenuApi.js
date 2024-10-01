//데이터를 처리하는 로직 파일

import menus from "../data/Menu-detail.json";

//1. 전체 메뉴 반환
export function getMenuList (){
    return menus;
}



//디테일 페이지 함수  클릭시 보여줄
 export function getMenuDetail(id){
    return menus.filter(menu=>menu.id==parseInt(id))[0]
 }