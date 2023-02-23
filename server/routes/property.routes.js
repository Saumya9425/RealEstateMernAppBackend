import express from 'express';

import {
createProperty, getAllProperties, getPropertyDetail,updateProperty, deleteProperty
} from '../controllers/property.controller.js';

const router = express.Router();

router.route('/').get(getAllProperties);
router.route('/:id').get(getPropertyDetail);
router.route('/').post(createProperty);
router.route('/').patch(updateProperty);
router.route('/').delete(deleteProperty);

export default router;
