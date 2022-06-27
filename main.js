const user_info={
    age:18,
    firstName:"yehuda",
    lastName:"sanay",
};
function printUserInfo(){
    for (let key in user_info) {
        h1_id.innerHTML+=`${key} : ${user_info[key]}<br/>`
    }

}
printUserInfo()
