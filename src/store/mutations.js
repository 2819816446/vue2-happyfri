const ADD_ITEMNUM = 'ADD_ITEMNUM' 
const REMBER_ANSWER = 'REMBER_ANSWER'
const REMBER_TIME = 'REMBER_TIME'
const INIT_DATA = 'INIT_DATA'

export default {
    // 点击进入下一题
    [ADD_ITEMNUM](state,num){
        console.log(num);
        state.itemNum += num;
    },
    // 记录答案
    [REMBER_ANSWER](state,id){
        state.answerid.push(id);
    },
    //记录做题时间
    [REMBER_TIME](state){
        state.timer = setInterval(()=>{
            state.allTime++;   
        },1000 );
    },
    // 初始化信息
    [INIT_DATA](state){
        state.itemNum = 1;
        state.allTime = 0;
        state.answerid = [];

    },
}

