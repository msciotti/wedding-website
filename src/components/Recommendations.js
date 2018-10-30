import React, {Component} from 'react';
import map from '../images/savethedate.png';
import seagull from '../images/seagull.jpg';
import chairs from '../images/beachchairs.png';
import lobster from '../images/lobster.png';
import sunset from '../images/sunset.jpg';
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
          <p>Also, there's an alpaca farm(http://www.islandalpaca.com/). Go see the alpaca farm.</p>
        </div>
        <LargeImage src={seagull} />
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
            Book a tee time at Farm Neck Golf Club, a course along the water in Oak Bluffs with amazing views, and a
            favorite course of President Obama when his family vacations on the island.
          </p>

          <img src={chairs} className={[styles.smallImage, styles.fakeCenter].join(' ')} />

          <h1 className={styles.fancyText}>For the Foodie</h1>
          <p>
            Martha's Vineyard is full of delicious places to grab a bite to eat. From water-view restaurants to small
            crab shacks to a homemade pie operation run out of a woman's home, you won't go hungry on the Vineyard.
            We've come up with a shortlist of some of our favorite places we think you should check out; keeping it
            short was a difficult task!
          </p>

          <h3 className={styles.fancyText}>Breakfast or Lunch</h3>
          <ul>
            <li>
              Right Fork Diner. A close-to-home favorite—literally!—that's just down the street from Makayla's family
              home in Katama. Wake up with coffee and a classic diner-style breakfast overlooking the Katama Air Field,
              a grass airport that's the home to many biplane flyers.
            </li>
            <li>
              Black Dog Bakery Café. A great place to grab breakfast if you're docking in Vineyard Haven, the Black Dog
              Cafe and it's logo, a large black dog, are familiar sights to any New Englander. Remember: it's never too
              early for a lobster roll.
            </li>
            <li>
              Espresso Love. Located in the heart of Downtown Edgartown, Espresso Love is one of our favorite breakfast
              spots. Grab a bagel and a coffee and walk the brick sidewalks of Edgartown. Take a stroll down South Water
              St. to see the really fantastic homes of the island.
            </li>
            <li>Giordano's. A local favorite and the spot for many on-island summer jobs, Giordano's</li>
            <li>
              Among the Flowers Cafe. An outdoor patio and breakfast until 2 p.m. make for a wonderful morning or
              afternoon spent taking in the sights and sounds of Edgartown.
            </li>
          </ul>

          <h3 className={styles.fancyText}>Dinner</h3>
          <ul>
            <li>
              L'etoile. A restaurant with upscale service located in the heart of Edgartown in a beautiful renovation
              home. Enjoy delicacies like lobster and oysters and decadent desserts. Reservations recommended.
            </li>
            <li>State Road. An island favorite for farm to table dining. Reservations recommended.</li>
            <li>
              Rockfish. A favorite of Makayla and Mason. Head upstairs for seating by the warm brick pizza oven and grab
              some drinks and a flatbread.
            </li>
            <li>
              The Seafood Shanty. If you're on an island, you may as well get some seafood! Enjoy a casual dining room
              or the rooftop bar on a beautiful night. No reservations, but often crowded.
            </li>
            <li>
              The Atlantic. The iconic restaurant of Edgartown. Steak and seafood with a quintessentially Martha's
              Vineyard vibe. Overlook the water and watch the waves and boaters. No reservations, so get there early!
            </li>
          </ul>

          <img src={lobster} className={[styles.smallImage, styles.fakeCenter].join(' ')} />

          <h1 className={styles.fancyText}>For the Adventurer</h1>
          <p>
            The Island is not only for relaxation! If you're the adventurous type, there are many adventures to be had
            throughout Martha's Vineyard. Rent a paddleboard, kayak, body bound, surf board, or canoe from Island Spirit
            Kayak or Wind's Up in Vineyard Haven. Head over to Classic Aviator's for biplane tours of Martha's Vineyard;
            ask about the "thrill ride" package.
          </p>

          <p>
            For a more tame exploration expedition, rent a bicycle from Edgartown Bicycles or MV Bike Rentals. The
            island is full of bike paths that go from town to town, beach to beach. So explore to your heart's content!
          </p>

          <p>
            Though the water will be cold, jumping off Jaw's Bridge is an island tradition. Jaw's was filmed on Martha's
            Vineyard, but don't worry, we promise there's no sharks. Probably.
          </p>
        </div>
        <LargeImage src={sunset} />
      </div>
    );
  }
}

export default Recommendations;
