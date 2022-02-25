import React from 'react'
import { useParams } from 'react-router-dom';
import EdRight from './EdRight';
import NoExRight from './NonExRight';
import UsageAgree from './UsageAgree';

const Main = () => {
    let { licenseId } = useParams();

    return (
      <div>
        {licenseId === 'mashnonexeclusiverightagreement' && <NoExRight />}
        {licenseId === 'compusagesagreement' && <UsageAgree />}
        {licenseId === 'editorial' && <EdRight />}
      </div>
    );
}

export default Main