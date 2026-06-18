import { Router } from 'express';
import { 
  getTasks, 
  createTask, 
  updateTask, 
  toggleComplete, 
  toggleImportant, 
  deleteTask 
} from '../controllers/taskController.js';

const router = Router();

router.get('/', getTasks);
router.post('/', createTask);
router.put('/:id', updateTask);
router.patch('/:id/toggle-complete', toggleComplete);
router.patch('/:id/toggle-important', toggleImportant);
router.delete('/:id', deleteTask);

export default router;