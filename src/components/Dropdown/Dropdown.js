import Switcher from '../../components/Switcher';
import Dialog from '../../components/Dialog';

export default {
  components: {
    Switcher,
    Dialog,
  },
  data: () => ({
    items: [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' },
    ],
  }),
}
