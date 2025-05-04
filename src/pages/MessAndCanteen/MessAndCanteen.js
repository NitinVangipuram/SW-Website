import React from 'react'
import ImageGrid from '../../components/ImageGrid/ImageGrid.js';

import images from './MessAndCanteenData.js'

import { motion } from 'framer-motion';
export default function MessAndCanteen() {
    return (
        <>
            <motion.div className='pb-5 pt-2' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <h1 className='mb-2'>Mess</h1>

                <div className='mt-5'>
                    <div className='custom-sub-header fs-2 rounded'>
                        <p>Hostels</p>
                    </div>
                    <div className='custom-content text-start fs-4'>
                        <p>
                            The mess block has specious dining halls with modern mechanized kitchen operated by outsourced service providers.
                            Both vegetarian and multi cuisine food are served in 3 dining halls.
                            The canteen operates till late in the night for the benefit of students.
                        </p>

                         <div>
                            <ImageGrid
                                key={1}
                                images={images.slice(0, 3)} // First set of images
                                width="332px" // Adjustable width
                                height="250px" // Adjustable height
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}
