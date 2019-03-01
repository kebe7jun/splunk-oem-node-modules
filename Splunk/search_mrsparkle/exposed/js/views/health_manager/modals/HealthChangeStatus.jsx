import merge from 'lodash/merge';
import { defaultFetchInit, handleResponse } from '@splunk/splunk-utils/fetch';

import { sprintf } from '@splunk/ui-utils/format';
import { _ } from '@splunk/ui-utils/i18n';

import ModalChangeStatusDefault from '@splunk/base-lister/modals/ChangeStatus';

// Update this to extend Component and pass handleChangeStatus in as a prop.
// Need to wait for BaseLister to be refactored to allow that.
class ModalChangeStatus extends ModalChangeStatusDefault {
    static propTypes = {
        ...ModalChangeStatusDefault.propTypes,
    };

    static defaultProps = {
        ...ModalChangeStatusDefault.defaultProps,
    };

    handleChangeStatus = () => {
        const changeStatus = sprintf('disabled=%s',
            this.props.object.content.disabled === true ? '0' : '1');
        const editObjectURL = `${this.props.objectsCollectionPath}/${this.props.object[
            this.props.idAttribute
        ]
            .split('/')
            .pop()}?output_mode=json`;

        const fetchOverrides = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: changeStatus,
        };
        const editFetchInit = merge({}, defaultFetchInit, fetchOverrides);

        fetch(editObjectURL, editFetchInit)
            .then(handleResponse(200))
            .then(() => {
                this.handleSuccess();
                this.props.handleRefreshListing();
            })
            .catch((response) => {
                this.handleError(
                    sprintf(
                        _('Could not %s %s.'),
                        this.actionLabel.toLowerCase(),
                        this.props.objectNameSingular.toLowerCase(),
                    ),
                    response,
                );
            });
    };
}

export default ModalChangeStatus;