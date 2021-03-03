import  React from 'react';
// import TaskInput from './component/TaskInput'

class App extends React.Component{
  state = {
    todoList : [  ],
    todo : ''
  }
  onChangeHandler = (e) => {
    this.setState({
      todo : e.target.value
    })
  }
  onClickHandler = (e) => {
    e.preventDefault();
    let randomId = Math.random().toString(16).slice(2);
    this.setState({
      todoList : [...this.state.todoList , { todo : this.state.todo, id : randomId}],
      todo : ''
    })
    
  }
  onDeleteHandler = (id) => {
    const todo_delete = this.state.todoList.filter( el => el.id  !== id )
    this.setState({
      todoList : todo_delete
    })
  }

  onModifyHandler =(id) => {
    let temp = this.state.todoList.map( (el) => {
      let jj = el.filter( j => j.id === id )
      return(
        jj
      )
    })

    console.log(temp)

  }


  render(){
    return(
      <div>
        <form>
          <input value={this.state.todo} onChange={this.onChangeHandler} />
          <button onClick={this.onClickHandler}>저장</button>
        </form>

        <TaskDisplay todoList={this.state.todoList} onDeleteHandler={this.onDeleteHandler}  onModifyHandler={this.onModifyHandler}/>


      </div>
    )
  }
}

const TaskDisplay = ( {todoList , onDeleteHandler, onModifyHandler} ) => {

  return(
    todoList.map( (el) => {
      return (
        <div key={el.id}> 
          <span >{el.todo} {el.id}</span>
          <button onClick={() => onDeleteHandler(el.id)}>삭제</button>
          <button onClick={() => onModifyHandler(el.id)}>수정</button>
        </div>
      )
    })
  )

}

export default App;
