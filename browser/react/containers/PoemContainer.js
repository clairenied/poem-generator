import { connect } from 'react-redux'
import PoemPage from '../components/PoemPage'


const mapStateToProps = (state, ownProps) => {
	return {
		poem: state.poem.poem
		// tags: state.poem.poem.tags
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		deletePoem: (id) => { dispatch(deletePoem(id)) }
	}
}

const PoemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PoemPage);

export default PoemContainer

