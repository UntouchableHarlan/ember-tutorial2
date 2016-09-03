import Ember from 'ember';

let rentals = [{
    id: 1,
    title: "Grand Old Mansion",
    city: "San Francisco",
    owner: 'Mike Trout',
    type: "Estate",
    bedroom: 15,
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
  },
  {
    id: 2,
    title: "Jay Z Mansion",
    city: "Los Angeles",
    owner: 'Jay Z',
    type: "Estate",
    bedroom: 7,
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
  },
  {
    id: 2,
    title: "My Home",
    city: "Miami",
    owner: 'Me',
    type: "House",
    bedroom: 3,
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
  }];

export default Ember.Route.extend({
  model() {
    return rentals;
  }
});
