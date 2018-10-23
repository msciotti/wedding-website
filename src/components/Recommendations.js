import React, {Component} from 'react';
import map from '../images/savethedate.png';
import LargeImage from '../components/LargeImage';
import styles from './App.css';

class Recommendations extends Component {
  render() {
    return (
      <div className={styles.pageContainer}>
        <LargeImage src={map} />
        <div className={styles.pageTextContainer}>
          <h1 className={styles.fancyText}>Things to Do</h1>
          <p>
            The Island is an amazing destination, no matter what kind of fun you're looking for. Sun-soakers—like
            us—will love the beautiful beaches around the island, especially South Beach in Katama; they'll be empty
            this time of year! Foodies—also us—can indulge in the numerous amazing restaurants in Edgartown and around
            the island. The outdoorsy types—ok a little less like us—can enjoy walks, bike rides, hikes, and the
            beautiful Great Outdoors that permeate the entire island. There really is something for everyone!
          </p>
          <p>Also, there's an alpaca farm. Go see the alpaca farm.</p>
        </div>
        <LargeImage src={map} />
        <div className={styles.pageTextContainer}>
          <h1 className={styles.fancyText}>For the Vacationer</h1>
          <p>
            The island is our favorite getaway every year. Even in the midst of high summer season, the quiet nights
            walking on the beach or sitting on the porch are a welcome relaxation, and the towns are never so crowded as
            to be unmanageable. If you're looking to make the most of our wedding weekend and get away from it all,
            you'll be in the right place.
          </p>

          <p>
            Catch some sun on South Beach, right outside of Edgartown in Katama. Though it will be October, the weather
            is still beautiful, and a good hot October day in New England is not exactly unheard of. Or, grab a chair
            and a sweatshirt and watch the waves for a while. If you're lucky, you might catch a glimpse of Sammy the
            Seal, a playful seal that returns to the island every summer to investigate the beach tourists.
          </p>

          <p>
            Book a tee time at [Farm Neck Golf Club](LINK), a course along the water in Oak Bluffs with amazing views,
            and a favorite course of President Obama when his family vacations on the island.
          </p>

          <h1 className={styles.fancyText}>For the Foodie</h1>
          <p>
            Martha's Vineyard is full of delicious places to grab a bite to eat. From water-view restaurants to small
            crab shacks to a homemade pie operation run out of a woman's home, you won't go hungry on the Vineyard.
            We've come up with a shortlist of some of our favorite places we think you should check out; keeping it
            short was a difficult task!
          </p>

          <h3 className={styles.fancyText}>Breakfast</h3>
          <ul>
            <li>
              [Right Fork Diner](LINK). A close-to-home favorite—literally!—that's just down the street from Makayla's
              family home in Katama. Wake up with coffee and a classic diner-style breakfast overlooking the Katama Air
              Field, a grass airport that's the home to many biplane flyers.
            </li>
            <li>
              [Black Dog Bakery Café](LINK). A great place to grab breakfast if you're docking in Vineyard Haven, the
              Black Dog Cafe and it's logo, a large black dog, are familiar sights to any New Englander. Remember: it's
              never too early for a lobster roll.
            </li>
            <li>
              [Espresso Love](LINK). Located in the heart of Downtown Edgartown, Espresso Love is one of our favorite
              breakfast spots. Grab a bagel and a coffee and walk the brick sidewalks of Edgartown. Take a stroll down
              South Water St. to see the really fantastic homes of the island.
            </li>
          </ul>

          <h3 className={styles.fancyText}>Lunch</h3>
          <ul>
            <li>[Giordano's](LINK). A local favorite and the spot for many on-island summer jobs, Giordano's</li>
          </ul>

          <p>
            Grab a meal in Edgartown, or venture over to Oak Bluffs or Vineyard Haven to one of the many delicious
            restaurants. Dine at The Atlantic, or grab a drink at the rooftop bar of the Seafood Shanty. Don't forget to
            stop by Back Door Donuts for a late night treat!
          </p>

          <h1 className={styles.fancyText}>For the Adventurer</h1>
          <p>
            Rent a bike and see the island the way it was meant to be seen. Bike paths traverse almost the entire
            island, and there's nothing better than getting lost in a good journey. True thrillseekers might be
            interested in contacting the [Katama Airport](LINK) about biplane sightseeing tours of the island.
          </p>

          <h1 className={styles.fancyText}>For the Romantic</h1>
          <p>
            Drive out to Menemsha for a sunset so gorgeous that words don't do it justice. Bring some wine, snacks, and
            a blanket and watch the sun dip down beneath the lazily-floating boats in the harbor. Also a fun picture
            spot with giant lifeguard chairs!
          </p>

          <h1 className={styles.fancyText}>For the Tourist</h1>
          <p>
            Explore all the little nooks and crannies of Edgartown, Oak Bluffs, and Vineyard Haven. Search the shops,
            the snacks, and the sights that keep us coming back to Martha's Vineyard year after year.
          </p>
        </div>
      </div>
    );
  }
}

export default Recommendations;
