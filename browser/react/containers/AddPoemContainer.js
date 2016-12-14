import React from 'react'
import { connect } from 'react-redux'
import AddPoem from '../components/AddPoem'
import { createPoem } from '../action-creators/poems'

class AddPoemContainer extends React.Component {
	constructor(props){
		super(props)
	}

	render(){
		return(
			<AddPoem createPoem={this.props.createPoem}/>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createPoem: (poem) => { dispatch(createPoem(poem)) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPoemContainer)