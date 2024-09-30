//데이터를 처리하는 로직을 별도의 파일로 분리하여
//api처럼 사용하기 위함..
//api는  특정요청이 들어왓을때 내보내주는 역할을한다
import menus from "../data/Menu-detail.json";

//1. 메뉴 전체 반환
export function getMenuList (){
    return menus;
}

// 검색 함수 match : 일치하면 true 반환
export function searchMenu(menuName){
    return menus.filter(menu => menu.menuName.match(menuName));
}

//디테일 페이지 함수 [0] : 필터링된 결과값에 맨 위에 것가져옴 = 중복제거
export function getMenuDetail(menuCode){
    return menus.filter(   menu => menu.menuCode===parseInt(menuCode))[0]
}