import React, {Component} from 'react';
import styles from '../components/App.css';
import beach from '../images/proposal.JPG';
import sign from '../images/mvsign.jpg';
import ferry from '../images/realferry.jpg';
import plane from '../images/plane.jpg';
import flower from '../images/hydrangea.jpg';
import path from '../images/path.jpg';
import LargeImage from './LargeImage';

class GettingThere extends React.Component {
  render() {
    return (
      <div className={styles.pageContainer}>
        <LargeImage src={sign} alt="Makayla and Mason" />
        <div className={styles.pageTextContainer}>
          <h1 className={styles.fancyText}>Getting There</h1>
          <div>
            <p>
              There are endless ways to make your trip to Martha's Vineyard. Between the planes, trains, automobiles,
              boats, and trolleys, we've tried them all, so we hope we can help make your travel as easy as possible. As
              with any trip, we recommend booking your travel plans early!
            </p>

            <p>
              Martha's Vineyard is located off the coast of Cape Cod, Massachusetts. The last hop across the water to
              the island requires either flying or taking the ferry; nope, no bridge! Four airlines—Delta, Cape Air,
              JetBlue, and American—fly directly to Martha's Vineyard Airport (MVY) from places like Boston, New York,
              DC, Philadelphia, and Providence. There are also several ferry options from ports in New York, Rhode
              Island, and Massachusetts.
            </p>

            <p>
              The ferry terminals have ample parking and shuttles to the boats, so there's no need to plan to bring your
              car to the island. However, if you'd like to, know that the Steamship Authority in Woods Hole, MA—a little
              past Falmouth—has the only boats that have space for cars on board. Once you're on island, there's plenty
              of options for transportation including cabs, Uber, bikes, buses, or asking Mason to drive you around.
            </p>
          </div>
        </div>
        <LargeImage src={ferry} />
        <div className={styles.pageTextContainer}>
          <h1 className={styles.fancyText}>By Car & Boat</h1>
          <h3>Steamship Authority</h3>
          <p>
            The easiest option, and our preferred method of travel, is to drive to one of the ferries. The Steamship
            Authority Ferry in Woods Hole, MA has the most frequent departures, and lets you take your car on boardif
            you'd like. You do not need to get a passenger ticket in advance, but car reservations are required. If you
            prefer to leave your car on the mainland—we usually do—there are several available parking lots from which
            the Steamship Authority offers free shuttles to the boat. Check which lot is open on [their website] as you
            make your way over the Bourne Bridge to Cape Cod.
          </p>

          <p>
            Shuttles are coordinated with ferry departures, but keep in mind that parking always takes some time, and
            the shuttle ride will add a 20-30 minute ride to your trip to the ferry. We seriously recommend not aiming
            for the last ferry of the night. If you miss an earlier ferry, waiting at the terminal for the next boat is
            a short affair, but if you miss the last ferry, there are no other ways across.
          </p>

          <p>
            Ferries arrive in either Oak Bluffs or Vineyard Haven, each only 15 or 20 minutes from Edgartown. From
            there, you can quickly grab a cab or Uber to wherever you're staying. See you at welcome drinks!
          </p>

          <h3>Seastreak</h3>
          <p>
            The Seastreak leaves out of New Bedford, MA. This can be more convenient if you're looking to avoid Cape
            traffic. We recommend arriving 45 minutes prior to your ferry's departure time, and you'll need to make a
            reservation a couple weeks in advance. Reminder that this boat does not allow you to bring a car over.
          </p>

          <h3>Island Queen</h3>
          <p>
            The last port of call is the Island Queen in Falmoth, MA. Parking is nearby the terminal, and the walk to
            the ferry is short. Tickets are first-come-first-served, and cars are not allowed on the boat. If you want
            to spend some time in Falmouth, the Island Queen can be a great ferry option. It's also not far from the
            larger port at Wood's Hole if a change of plans is necessary.
          </p>
        </div>
        <LargeImage src={plane} />
        <div className={styles.pageTextContainer}>
          <h1 className={styles.fancyText}>By Plane</h1>

          <p>
            Though the Martha's Vineyard Airport (MVY) is small, it's busy! Several major airlines make trips to the
            island, so getting there by plane is a breeze. The airport code is MVY, and there are direct flights
            available from Boston, DC, Philadelphia, and New York City.
          </p>

          <p>
            You also have the option of flying into Boston or Providence and making your way to the Steamship Authority
            Ferry in Woods Hole from there. The Peter Pan bus line makes stops in Boston and Providence and drops you
            off right at the ferry terminal.
          </p>
        </div>
        <LargeImage src={path} />
        <div className={styles.pageTextContainer}>
          <h1 className={styles.fancyText}>By Train</h1>

          <p>
            The best way to get to the island by train is to take an Amtrak to Providence, RI. From there, you can book
            a car service like [Little Rest Limo] or hail an Uber and make your way to the [Vineyard Fast Ferry] in
            North Kingston, RI, a short 15 mile trip from the train station. Or, hop the bus to Woods Hole, or meet up
            with a friend that's also making their way down! The road to the ferry most often ends in Woods Hole, so
            there's a good chance that you and a friend (maybne with a car) could meet somewhere like Providence and get
            there together!
          </p>
        </div>
        <LargeImage src={flower} />
      </div>
    );
  }
}

export default GettingThere;
