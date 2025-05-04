import React from 'react';
import { motion } from 'framer-motion';

const ImageGrid = ({ images, width, height, columns }) => {
    const columnClass = columns ? `col-md-${12 / columns}` : 'col-md-3';

    return (
        <div className='row justify-content-center' style={{ margin: '2rem', gap: '2rem' }}>
            {images.map((image, index) => (
                <div className={columnClass} key={index}>
                    <motion.div
                        variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 } }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5, delay: 0.25 * index }} // Delay based on index
                    >
                        <img src={image.src} alt={image.alt} style={{ width: width, height: height }} className='img-fluid' />
                    </motion.div>
                </div>
            ))}
        </div>
    );
};

export default ImageGrid;
