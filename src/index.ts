import app from './app';
import './libs/custom-array';
import './libs/linked-list';
import './libs/hash-table';
import './libs/hash-set';

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
