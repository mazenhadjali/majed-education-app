import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const ZoomImageModal = ({ src, alt = '', className = '' }) => {
    const [open, setOpen] = useState(false);
    const zoomRef = React.useRef(null);

    return (
        <>
            <img
                src={src}
                alt={alt}
                onClick={() => setOpen(true)}
                className={`cursor-pointer ${className}`}
            />
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                zoom={{ ref: zoomRef }}

                noScroll={true}
                slides={[{ src }]}
            />
        </>
    );
};

export default ZoomImageModal;
