
import 'wijmo/wijmo.vue2.grid';
import 'wijmo/wijmo.vue2.chart';
import { CollectionView } from 'wijmo/wijmo';

function getData() {
  var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
      data = [];
  for (var i = 0; i < countries.length; i++) {
    data.push({
      country: countries[i],
      sales: Math.random() * 10000,
      expenses: Math.random() * 5000,
      downloads: Math.round(Math.random() * 20000),
    });
  }
  return new CollectionView(data);
}
export default {
  name: 'graph',
  components: {},
  props: [],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      data: getData()
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {

  }
}
