import React from 'react';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './IconSearch.scss';

export const IconSearch: React.FC = () => {
    return (
        <div className="icon-search">
            <FontAwesomeIcon className="fa-2x" icon={faSearch} />
        </div>
    )
};
