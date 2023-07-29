const todolist={
    "create a new practice task": "To do",
    "make a bed": "To do",
    "write a post": "in Progress",
    "cocss": "in Progress"
    }
    //Добавляет задачу
    function addTask(key,value){
    todolist[key] = value;
    }
    addTask("price aphone","Do")
    //Удаляет задачу
    const deleteTask =(key)=> delete todolist[key]
    console.log(deleteTask("make a bed"))
    // Меняет статус задачи 
    const changeStatus =(key,value)=>{todolist[key]=value; return value}
    changeStatus("result","in Progress")
    // Показывает список всех задач, которые надо выполнитьили выполняются 
    function showList(dab){
    const result =[]
    for(const task in todolist){
      if(todolist[task] === dab){
       result.push(task +`:${dab}`) 
      }
    }
    return result 
    }
    console.log(showList("in Progress"))
    