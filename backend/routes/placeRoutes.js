import express from 'express';
const router = express.Router();
import {
  createPlace,
  deletePlace,
  getPlaceById,
  getPlaceByUserId,
  getPlaces,
  updatePlace,
} from '../controllers/placeController.js';
import { check } from 'express-validator';
import fileUpload from '../middleware/fileUpload.js';

router.route('/user/:uid').get(getPlaceByUserId);

router
  .route('/')
  .get(getPlaces)
  .post(
    fileUpload.single('image'),
    [
      check('title').not().isEmpty(),
      check('description').isLength({ min: 5 }),
      check('address').not().isEmpty(),
    ],
    createPlace
  );

router
  .route('/:pid')
  .get(getPlaceById)
  .patch(
    [check('title').not().isEmpty(), check('description').isLength({ min: 5 })],
    updatePlace
  )
  .delete(deletePlace);

export default router;
