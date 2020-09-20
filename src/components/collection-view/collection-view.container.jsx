import {connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';

import { selectIsCollectionFetching} from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionView from './collection-view.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionViewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionView);

export default CollectionViewContainer;