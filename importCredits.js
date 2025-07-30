const { createClient } = require('@sanity/client');
const path = require('path');

// Load environment variables from .env.local
require('dotenv').config({ path: path.resolve(__dirname, '.env.local') });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-03-07', // use current date (YYYY-MM-DD) to target the latest API version
  token: process.env.SANITY_API_TOKEN, // Ensure this token has write access
  useCdn: false, // Don't use CDN for writing
});

const credits = [
  // From CV PDF
  { year: '2024', type: 'Musical Theatre', project: 'Seussical the Musical', director: 'Joey Phyland', company: 'OCPAC', role: 'General Genghis Kahn Schmidtz' },
  { year: '2023', type: 'Corporate', project: 'Road Safety Education Victoria, Training Videos and Photography', director: 'Eugene Hyland, Antuong Nguyen', company: 'Resonance Communications', role: 'Dad' },
  { year: '2022', type: 'Musical Theatre', project: 'Les Miserables', director: 'Anne Dewar', company: 'MDMS', role: 'Thenardier' },
  { year: '2022', type: 'Commercial', project: 'Salvation Army Heroes', director: 'Monster & Bear', company: 'SARAH-JANE WOULAHAN', role: 'Hero male' },
  { year: '2019', type: 'Commercial', project: 'Respect Aged Care', director: 'Sarah Hickey', company: 'Monster & Bear', role: 'Visitor' },
  { year: '2018', type: 'Musical Theatre', project: 'Next to Normal', director: 'Bernadette Sheedy', company: 'Oxagen', role: 'Dan' },
  { year: '2016', type: 'Other', project: 'Ex ID - Internal Training Video, Lloyds Bank UK', director: 'Steve Bookbinder', company: 'Speakeasy', role: 'Bank Teller' },
  { year: '2016', type: 'Film', project: 'Star Wars: Rogue One', director: 'Gareth Edwards', company: 'Lucasfilm', role: 'Storm Trooper' },
  { year: '2015', type: 'Commercial', project: 'BMW, Mini Cooper Countryman, UK', director: 'Ed Rosie', company: 'Iris Worldwide', role: 'Cyclist' },
  { year: '2015', type: 'Musical Theatre', project: 'Cinderella - a Pantomime, UK National Tour', director: 'Abi Finley', company: 'Blue Box Entertainment', role: 'Prince Charming / Ugly Step Sister' },
  { year: '2015', type: 'TV', project: "Secret History - London's Lost Graveyard - The Crossrail Discovery", director: 'Kenny Scott', company: 'True North Productions', role: 'Violent Man (Reenactment)' },
  { year: '2014', type: 'Musical Theatre', project: 'Cinderella - a Pantomime, UK National Tour', director: 'Abi Finley', company: 'Blue Box Entertainment', role: 'Furry Dog Father' },
  { year: '2014', type: 'Film', project: 'Guardians of the Galaxy', director: 'James Gunn', company: 'Marvel', role: 'Alien Prosthetics' },
  { year: '2012', type: 'TV', project: 'Call the Midwife', director: 'Roger Goldby', company: 'BBC, Neal Street Productions', role: 'Teddy boy' },
  { year: '2012', type: 'Short Film', project: 'Konnichiwa Brick Lane', director: 'Saera Jin', company: '', role: 'Andrew (Japanese speaking)' },
  { year: '2011', type: 'Musical Theatre', project: 'Grease 2: Live in Concert', director: 'Karl McNamara', company: 'StageArt', role: 'Ensemble' },
  { year: '2011', type: 'Musical Theatre', project: 'You\'re a Good Man Charlie Brown', director: 'Ryan Purdy', company: 'Players Theatre Company', role: 'Charlie Brown' },
  { year: '2010', type: 'Musical Theatre', project: 'Hot Mikado', director: 'Mel Trickey', company: 'Players Theatre Company', role: 'Koko' },
  { year: '2009', type: 'Musical Theatre', project: 'Joseph & The Amazing Technicolor Dreamcoat', director: 'Jeremy Showgren', company: 'SCERA Shell, Utah', role: 'Naphtali' },

  // From Casting Networks Public Profile
  { year: '', type: 'Film', project: 'The Last Stand', director: 'Jane Doe', company: '', role: 'Lead' },
  { year: '', type: 'TV', project: 'City of Shadows', director: '', company: 'ABC', role: 'Guest Star, 2 episodes' },
  { year: '', type: 'Commercial', project: '"Fresh Start" Campaign', director: '', company: 'National Brand', role: 'Principal' },
  { year: '', type: 'Theatre', project: 'A Midsummer Night\'s Dream', director: '', company: 'Local Playhouse', role: 'Puck' },
];

async function importCredits() {
  console.log('Starting credit import to Sanity...');
  for (const credit of credits) {
    try {
      const doc = {
        _type: 'credit',
        year: credit.year,
        type: credit.type,
        project: credit.project,
        director: credit.director,
        company: credit.company,
        role: credit.role,
      };
      const result = await client.create(doc);
      console.log(`Created credit: ${result._id} - ${credit.project}`);
    } catch (error) {
      console.error(`Failed to create credit for ${credit.project}:`, error.message);
    }
  }
  console.log('Credit import process completed.');
}

importCredits();
