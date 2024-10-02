
import {create} from "zustand";

//useStore 전역으로 관리될 상태

const useStore = create((set)=>({
        count :0, //상태로 사용할 값.

        
        increment :  ()=>set((state)=>({count:state.count+1})),
        decrement : ()=>set((state)=>({count:state.count-1})),
        reset : ()=>set({count:0})
}));

export default useStore;