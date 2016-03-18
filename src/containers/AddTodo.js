import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'



class AddTodo extends Component {

  constructor(props, context) {
    super(props, context)
  }


  componentDidMount(){
    console.log('did componentDidMount')
    this.input.focus()
  }



  render() {
    let { dispatch, onClick } = this.props
    return (
      <div>
        <input ref={node => {
          this.input = node
        }} />
        <button onClick={() => {
          // dispatch(addTodo(this.input.value))
          // this.input.value = ''
          // this.input.focus()
          onClick(this.input)

        }}>
          Add Todo
        </button>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {

  }
}

 function mapDispatchToProps(dispatch) {
    return {
      onClick: (el) => {
        dispatch(addTodo(el.value))
      }
    }
 }




AddTodo = connect(mapStateToProps,mapDispatchToProps)(AddTodo)

export default AddTodo

