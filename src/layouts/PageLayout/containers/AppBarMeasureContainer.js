import { withContentRect } from 'react-measure'
import GlobalAppBar from '../components/AppBar'

export default withContentRect('bounds')(({ measureRef, measure, contentRect }) => (GlobalAppBar))
