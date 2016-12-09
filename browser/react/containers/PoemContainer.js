import { connect } from 'react-redux'
import PoemPage from '../components/PoemPage'


const mapStateToProps = (state, ownProps) => {
	return {
		poem: state.poems.poem
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {}
}

const PoemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PoemPage);

export default PoemContainer

