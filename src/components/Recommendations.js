import React, {Component} from 'react';
import img from '../images/mapsketch.jpg';
import LargeImage from '../components/LargeImage';

class Recommendations extends Component {
  render() {
    return (
      <div>
        <LargeImage src={img} alt="Map of Martha's Vineyard" />
        <div>
          <div>For the Vacationer - Lounge on South Beach in Katama</div>
          <div>
            For the Foodie - Grab a meal in Oak Bluffs or Edgartown at one of the many delicious restaurants. Don't
            forget to stop by Back Door Donuts for a late night treat!
          </div>
          <div>
            For the Adventurer - Rent a bike and ride around the island! Bike paths traverse almost the entire island,
            and there's nothing better than getting lost in a good journey.
          </div>
          <div>
            For the Sentimental - Catch a sunset in Menemsha, a spectacle so gorgeous it has to be experienced in
            person. Bring some wine and a blanket and watch the sun dip down past the boats in the harbor.
          </div>
          <div>
            For the Tourist - Explore the many little nooks and crannies of Edgartown and Oak Bluffs. Check out the
            shops, the snacks, and the sights that kept us coming back to Martha's Vineyard for so many years.
          </div>
        </div>
      </div>
    );
  }
}

export default Recommendations;
