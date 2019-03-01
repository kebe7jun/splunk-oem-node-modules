import React from 'react';
import PropTypes from 'prop-types';
import { isUndefined } from 'lodash';
import { _ } from '@splunk/ui-utils/i18n';
import Remove from '@splunk/react-icons/Remove';
import Progress from '@splunk/react-ui/Progress';
import { getStyled } from '@splunk/react-ui/Themes';

import './StyleItem';

const { StyledBox, StyledLabel, StyledRemoveClickable } = getStyled('File.Item');

const propTypes = {
    /** @private */
    disabled: PropTypes.bool,
    /**
     * Invoked with the DOM element when the component mounts and null when it unmounts.
     */
    elementRef: PropTypes.func,
    /** Show the Item in an error state. */
    error: PropTypes.bool,
    /** A unique for this file. */
    itemId: PropTypes.any,
    /** The name is displayed on the item. */
    name: PropTypes.string.isRequired,
    /** @private */
    onClick: PropTypes.func,
    /** @private */
    size: PropTypes.oneOf(['small', 'medium']),
    /** If the uploadPercentage is 0, the item is assumed to be queued. If the upload is complete or
     * not applicable, uploadPercentage must be undefined. */
    uploadPercentage: PropTypes.number,
};

const defaultProps = {
    disabled: false,
    error: false,
};

function Item(props) {
    const { disabled, error, itemId, name, onClick, size, uploadPercentage, ...otherProps } = props;

    function handleRequestRemove(e) {
        e.preventDefault();
        onClick({ itemId, name });
    }

    const removeLabel = _('Remove "%1"').replace('%1', name);
    const uploadLabel = _('Uploading "%1"').replace('%1', name);

    return (
        <StyledBox
            data-test="item"
            {...otherProps}
            flex
            data-error={error || null}
            data-size={size}
            data-disabled={disabled || null}
        >
            <StyledLabel data-test="label">{name}</StyledLabel>
            {!disabled && (
                <StyledRemoveClickable
                    data-test="remove"
                    onClick={handleRequestRemove}
                    aria-label={removeLabel}
                >
                    <Remove screenReaderText={null} />
                </StyledRemoveClickable>
            )}
            {!isUndefined(uploadPercentage) &&
                uploadPercentage > 0 && (
                    <Progress
                        style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            right: 0,
                            zIndex: 1,
                        }}
                        percentage={uploadPercentage}
                        aria-label={uploadLabel}
                    />
                )}
        </StyledBox>
    );
}

Item.propTypes = propTypes;
Item.defaultProps = defaultProps;
export default Item;
