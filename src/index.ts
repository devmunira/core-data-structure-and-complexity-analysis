import app from './app';
import './libs/custom-array';
import './libs/linked-list';

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
