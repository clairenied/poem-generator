import { connect } from 'react-redux'
import Poems from '../components/Poems'


const mapStateToProps = (state, ownProps) => {
	return {
		poems: state.poems.poems
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {}
}

const PoemsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Poems);

export default PoemsContainer