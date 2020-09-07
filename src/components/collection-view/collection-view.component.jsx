import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import PreviewCollection from "../preview-collection/preview-collection.component";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import "./collection-view.styles.scss";

const CollectionView = ({ collections }) => (
  <div className="collection-view">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <PreviewCollection key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionView);